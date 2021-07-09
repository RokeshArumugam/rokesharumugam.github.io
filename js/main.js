const urlParams = new URLSearchParams(window.location.search);

async function loadHeaderAndFooter() {
	fetch("/components/header.html")
		.then(response => {
			return response.text()
		})
		.then(data => {
			document.getElementsByTagName("header")[0].innerHTML = data;
		});

	fetch("/components/footer.html")
		.then(response => {
			return response.text()
		})
		.then(data => {
			document.getElementsByTagName("footer")[0].innerHTML = data;
		});
};

loadHeaderAndFooter();