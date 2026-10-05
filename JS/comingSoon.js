const infoTexts = {
	"unpublishedProject": "Details for this project will be added soon."
};

if (urlParams.get("infoTextId")) {
	document.getElementsByClassName("mainText")[0].innerText =
		infoTexts[urlParams.get("infoTextId")];
};