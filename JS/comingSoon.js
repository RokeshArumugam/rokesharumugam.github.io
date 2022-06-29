const infoTexts = {
	"tutoring": "Subjects and prices offered will be added soon.",
	"courses": "Courses and prices (if any) offered will be added soon.",
	"unpublishedProject": "Details for this project will be added soon."
};

if (urlParams.get("infoTextId")) {
	document.getElementsByClassName("mainText")[0].innerText =
		infoTexts[urlParams.get("infoTextId")];
};