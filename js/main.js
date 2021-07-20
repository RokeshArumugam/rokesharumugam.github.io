const urlParams = new URLSearchParams(window.location.search);
const alertTypes = {
	Information: "fa-info-circle",
	Success: "fa-check-circle",
	Warning: "fa-exclamation-triangle",
	Error: "fa-times-circle"
};

async function loadHeaderAndFooter() {
	fetch("/components/header.html")
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

	fetch("/components/footer.html")
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

window.alert = (message, type) => {
	let alertElem = new DOMParser().parseFromString(`
		<div id="alert">
			<div id="alert__modal"></div>
			<div id="alert__box" class="surface">
				<i id="alert__icon" class="fas"></i>
				<div id="alert__message"></div>
				<button id="alert__button" class="primaryButton" onclick="let alertElem = this.parentElement.parentElement; alertElem.parentElement.removeChild(alertElem);">Close</button>
			</div>
		</div>
	`, "text/html");
	let messageElem = alertElem.getElementById("alert__message");

	if (!Object.values(alertTypes).includes(type)) {
		type = alertTypes.Information;
	};
	alertElem.getElementById("alert__icon").classList.add(type);

	for (let paragraph of message.split("\n")) {
		let paragraphElem = document.createElement("p");
		paragraphElem.innerText = paragraph;
		messageElem.appendChild(paragraphElem);
	};
	document.getElementsByTagName("body")[0].appendChild(alertElem.body.firstChild);
};

loadHeaderAndFooter();