const infoText = document.querySelector(".infoText");

infoText.innerText = urlParams.get("infoText") + "\n" + infoText.innerText;