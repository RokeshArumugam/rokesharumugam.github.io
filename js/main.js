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
			let footer = document.getElementsByTagName("footer")[0];
			footer.innerHTML = data;
			footer.getElementsByClassName("copyrightNotice__year")[0].innerText = new Date().getFullYear();
		});
};

loadHeaderAndFooter();