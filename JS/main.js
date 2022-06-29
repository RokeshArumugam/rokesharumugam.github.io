const urlParams = new URLSearchParams(window.location.search);
const modalTypes = {
	Information: "fa-info-circle",
	Success: "fa-check-circle",
	Warning: "fa-exclamation-triangle",
	Error: "fa-times-circle"
};
const alertTemplateString = `
	<div id="modal" class="modal" role="alertdialog">
		<div id="modal__overlay" class="modal__overlay"></div>
		<div id="modal__box" class="modal__box surface">
			<i id="modal__icon" class="fas"></i>
			<span id="modal__title"></span>
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
			<span id="modal__title"></span>
			<div id="modal__message"></div>
			<div id="modal__buttonContainer">
				<button id="modal__button--cancel" class="modal__button primaryButton">Cancel</button>
				<button id="modal__button--ok" class="modal__button primaryButton">OK</button>
			</div>
		</div>
	</div>
`;

async function loadHeaderAndFooter() {
	fetch("/COMPONENTS/header.html")
		.then(response => {
			return response.text()
		})
		.then(data => {
			let header = document.getElementsByTagName("header")[0];
			if (header) {
				header.innerHTML = data;
				for (let navLink of header.getElementsByClassName("navLink--standard")) {
					if (window.location.href.startsWith(navLink.href)) {
						navLink.classList.add("navLink--current");
						break;
					}
				};
			};
		});

	fetch("/COMPONENTS/footer.html")
		.then(response => {
			return response.text()
		})
		.then(data => {
			let footer = document.getElementsByTagName("footer")[0];
			if (footer) {
				footer.innerHTML = data;
				footer.getElementsByClassName("copyrightNotice__year")[0].innerText = new Date().getFullYear();
			};
		});
};

function createModal(templateString, title, message, type) {
	let modalElem = new DOMParser().parseFromString(templateString, "text/html");
	let messageElem = modalElem.getElementById("modal__message");

	modalElem.getElementById("modal__icon").classList.add(type);

	modalElem.getElementById("modal__title").innerText = title;

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

window.alert = (title, message, type=modalTypes.Information) => {
	return new Promise((resolve, reject) => {
		let alertElem = createModal(alertTemplateString, title, message, type);
		alertElem.querySelector(".modal__button").addEventListener("click", () => {
			resolve(undefined);
		});
		document.body.appendChild(alertElem);
	})
};
window.confirm = (title, message) => {
	return new Promise((resolve, reject) => {
		let alertElem = createModal(confirmTemplateString, title, message, modalTypes.Warning);
		alertElem.querySelector("#modal__button--ok").addEventListener("click", () => {
			resolve(true);
		});
		alertElem.querySelector("#modal__button--cancel").addEventListener("click", () => {
			resolve(false);
		});
		document.body.appendChild(alertElem);
	})
};

loadHeaderAndFooter();