if (urlParams.get("suggestedId")) {
	let emailLinkContainer = document.getElementById(urlParams.get("suggestedId"));
	if (emailLinkContainer) {
		emailLinkContainer.classList.add("emailLinkContainer--suggested");
	};
};