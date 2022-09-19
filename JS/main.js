const donationLink = "https://donate.stripe.com/fZe5kv5SJ3jZfjG000";

const urlParams = new URLSearchParams(window.location.search);
const modalTypes = {
	Information: "fa-info-circle",
	Success: "fa-check-circle",
	Warning: "fa-exclamation-triangle",
	Error: "fa-times-circle",
	Prompt: "fa-question-circle"
};
const alertTemplateString = `
	<div id="modal" class="modal" role="alertdialog">
		<div id="modal__overlay" class="modal__overlay"></div>
		<div id="modal__box" class="modal__box surface">
			<i id="modal__icon" class="fas"></i>
			<span id="modal__heading"></span>
			<div id="modal__message"></div>
			<div id="modal__buttonContainer">
				<button class="modal__button primaryButton">Close</button>
			</div>
		</div>
	</div>
`;
const confirmTemplateString = `
	<div id="modal" class="modal" role="alertdialog">
		<div id="modal__overlay" class="modal__overlay"></div>
		<div id="modal__box" class="modal__box surface">
			<i id="modal__icon" class="fas"></i>
			<span id="modal__heading"></span>
			<div id="modal__message"></div>
			<div id="modal__buttonContainer">
				<button id="modal__button--cancel" class="modal__button primaryButton">Cancel</button>
				<button id="modal__button--ok" class="modal__button primaryButton">OK</button>
			</div>
		</div>
	</div>
`;
const promptTemplateString = `
	<div id="modal" class="modal" role="alertdialog">
		<div id="modal__overlay" class="modal__overlay"></div>
		<div id="modal__box" class="modal__box surface">
			<i id="modal__icon" class="fas"></i>
			<span id="modal__heading">Prompt</span>
			<div id="modal__message"></div>
			<div class="inputWrapper surface">
				<input type="text" id="modal__field">
			</div>
			<div id="modal__buttonContainer">
				<button id="modal__button--cancel" class="modal__button primaryButton">Cancel</button>
				<button id="modal__button--ok" class="modal__button primaryButton">OK</button>
			</div>
		</div>
	</div>
`;

const testimonialTemplate = document.getElementById("testimonialTemplate");
const testimonialsContainer = document.getElementsByClassName("section--testimonials")[0];

async function loadComponent(fileName, identifier) {
	await fetch("/COMPONENTS/" + fileName)
		.then(response => {
			return response.text()
		})
		.then(data => {
			for (let elem of document.querySelectorAll(identifier)) {
				elem.innerHTML = data;
			};
		})
		.catch(err => {
			alert(err, modalTypes.Error);
		});
};

async function loadHeaderAndFooter() {
	await Promise.all([
		loadComponent("header.html", "header")
			.then(_ => {
				let header = document.getElementsByTagName("header")[0];
				if (header) {
					for (let navLink of header.getElementsByClassName("navLink--standard")) {
						if (window.location.pathname == navLink.pathname) {
							navLink.classList.add("navLink--current");
							break;
						};
					};
				};
			}),
		loadComponent("footer.html", "footer")
			.then(_ => {
				let footer = document.getElementsByTagName("footer")[0];
				if (footer) {
					footer.getElementsByClassName("copyrightNotice__year")[0].innerText = new Date().getFullYear();
				};
			})
	]);
};

function createModal(templateString, message, type, heading) {
	if (!heading) {
		heading = Object.keys(modalTypes).find(key => modalTypes[key] === type);
	};
	let modalElem = new DOMParser().parseFromString(templateString, "text/html");
	let messageElem = modalElem.getElementById("modal__message");

	modalElem.getElementById("modal__icon").classList.add(type);

	modalElem.getElementById("modal__heading").innerText = heading;

	if (typeof message !== "string")
		message = String(message);

	for (let paragraph of message.split("\n")) {
		let paragraphElem = document.createElement("p");
		paragraphElem.innerText = paragraph;
		messageElem.appendChild(paragraphElem);
	};

	modalElem = modalElem.body.firstChild;
	modalElem.addEventListener("click", evt => {
		if (evt.target.classList.contains("modal__button")) {
			modalElem.parentElement.removeChild(modalElem);
		};
	});
	return modalElem
};

window.onbeforeunload = () => {
	document.getElementById("navToggleInput").checked = false;
};

window.alert = (message, type = modalTypes.Information, heading) => {
	return new Promise((resolve, reject) => {
		let alertElem = createModal(alertTemplateString, message, type, heading);
		alertElem.querySelector(".modal__button").addEventListener("click", () => {
			resolve(undefined);
		});
		document.body.appendChild(alertElem);
	})
};
window.confirm = (message, heading = "Warning") => {
	return new Promise((resolve, reject) => {
		let alertElem = createModal(confirmTemplateString, message, modalTypes.Warning, heading);
		alertElem.querySelector("#modal__button--ok").addEventListener("click", () => {
			resolve(true);
		});
		alertElem.querySelector("#modal__button--cancel").addEventListener("click", () => {
			resolve(false);
		});
		document.body.appendChild(alertElem);
	})
};
window.prompt = (message, heading = "Prompt", defaultText = "") => {
	return new Promise((resolve, reject) => {
		let modalElem = createModal(promptTemplateString, message, modalTypes.Prompt, heading);
		let modalFieldElem = modalElem.querySelector("#modal__field");
		modalFieldElem.value = defaultText;
		modalElem.querySelector("#modal__button--ok").addEventListener("click", () => {
			resolve(modalFieldElem.value);
		});
		modalElem.querySelector("#modal__button--cancel").addEventListener("click", () => {
			resolve(null);
		});
		document.body.appendChild(modalElem);
		modalFieldElem.focus();
	});
};

function populateTestimonials() {
	for (let testimonial of testimonials) {
		let testimonialElement = document.importNode(testimonialTemplate.content, true).querySelector(".testimonial");
		for (let [key, val] of Object.entries(testimonial)) {
			testimonialElement.getElementsByClassName("testimonial__" + key)[0].innerText = val;
		};
		testimonialElement.addEventListener("click", () => {
			const testimonialModal = document.createElement("div");
			testimonialModal.classList.add("modal");

			const testimonialModalOverlay = document.createElement("div");
			testimonialModalOverlay.classList.add("modal__overlay");
			testimonialModal.appendChild(testimonialModalOverlay)

			const testimonialClone = testimonialElement.cloneNode(true);
			testimonialClone.classList.remove("testimonial--card");
			testimonialClone.classList.add("testimonial--modal", "modal__box");
			testimonialModal.appendChild(testimonialClone);


			testimonialModal.addEventListener("click", evt => {
				if (evt.target.classList.contains("modal")) {
					testimonialModal.parentElement.removeChild(testimonialModal);
				};
			});

			document.body.appendChild(testimonialModal);
		});
		testimonialsContainer.appendChild(testimonialElement);
	};
	function scrollTestimonials() {
		setTimeout(() => {
			if (!(testimonialsContainer.querySelector(":hover")) && !(document.getElementsByClassName("modal").length)) {
				let increment;
				let endX;
				switch (testimonialsContainer.dataset.scrollDirection) {
					case "right":
						increment = 1;
						endX = (testimonialsContainer.scrollWidth - testimonialsContainer.clientWidth);
						break;
					case "left":
						increment = -1;
						endX = 0;
						break;
					default:
						break;
				}
				if (testimonialsContainer.scrollLeft !== endX) {
					testimonialsContainer.scrollTo(testimonialsContainer.scrollLeft + increment, 0);
				} else {
					if (testimonialsContainer.dataset.scrollDirection == "right")
						testimonialsContainer.dataset.scrollDirection = "left";
					else if (testimonialsContainer.dataset.scrollDirection == "left")
						testimonialsContainer.dataset.scrollDirection = "right";
				};
			};
			requestAnimationFrame(scrollTestimonials);
		}, 50);
	};
	requestAnimationFrame(scrollTestimonials);
};

loadHeaderAndFooter();

for (const elem of document.getElementsByClassName("donationLink")) {
	elem.href = donationLink;
	elem.target = "_blank";
};