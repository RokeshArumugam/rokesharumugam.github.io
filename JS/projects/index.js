const projects = [
	{
		"name": "Character Sheet",
		"startDate": "2022-09",
		"description": [
			"Character Sheet is a digital character sheet that has some web-scraping-powered automations.",
			"I use this instead of my paper character sheet when I'm playing D&D. I just copy the URL when I'm done and then I can use it later to access the same character sheet again.",
			"All of the data is saved in the URL so anyone can use this and save data without an account."
		]
	},
	{
		"name": "Meal Booking Website",
		"startDate": "2022-07",
		"description": [
			"Meal Booking Website is a new website I created to (hopefully) replace the old meal booking website at my college (Gonville and Caius) at the University of Cambridge.",
			"This was a nice project to do over the summer, but it is yet to be seen whether it will be bought by the college."
		]
	},
	{
		"name": "Price Checker",
		"startDate": "2022-07",
		"url": "/comingSoon.html?infoTextId=unpublishedProject",
		"description": [
			"Price Checker is a web scraper that checks if the price of a product on amazon.co.uk changes.",
			"I add the URLs of products I would like to monitor to a file and my phone is pinged when the price changes. It helps me save a few pounds every so often."
		]
	},
	{
		"name": "Prandium",
		"startDate": "2021-11",
		"description": [
			"Prandium is a bot to book meals at Gonville and Caius college, University of Cambridge.",
			"We have to book meals in advance and they can be very competitive. People wake up early to book meals and still often miss them.",
			"So I created Prandium. I have been able to sleep in and get a place at any meal I would like for over a year now. I also let some friends occasionally use it too."
		]
	},
	{
		"name": "Invoice Generator",
		"startDate": "2021-06",
		"url": "/comingSoon.html?infoTextId=unpublishedProject",
		"description": [
			"Invoice Generator is a command-line program that can be used to generate, track and manage invoices.",
			"I used this create invoices when I worked as a TA for Medify. It uses a HTML template so you can design the invoice to look however you want."
		]
	},
	{
		"name": "Command Bar",
		"startDate": "2021-05",
		"url": "/comingSoon.html?infoTextId=unpublishedProject",
		"description": [
			"Command Bar is menu bar application for MacOS that allow you to run shell commands and see their outputs.",
			"I spent a week creating this to save me (and hopefully other developers when I released Command Bar on the App Store) some time when performing routine tasks. However less than a week after I finished Command Bar I heard that Apple was developing almost identical functionality as part of their Shortcuts app on MacOS; so I abandoned this project."
		]
	},
	{
		"name": "TV Tracker",
		"startDate": "2021-05",
		"url": "/comingSoon.html?infoTextId=unpublishedProject",
		"description": [
			"TV Tracker is a PWA (Progressive Web App) that I created to keep track of how many episodes I've watched of each TV show.",
			"This project is nowhere near finished and was simply an experiment for me to see how PWAs work. PWAs seem like a way to code in HTML, CSS and JavaScript and make mobile apps for IOS and Android. I only spent a weekend on this but may come back to it in the future."
		]
	},
	{
		"name": "Remote Controller",
		"startDate": "2020-09",
		"url": "/comingSoon.html?infoTextId=unpublishedProject",
		"description": [
			"Remote Controller is a command-line and webpage application that can be used to control your computer (via mouse and keyboard) from your phone.",
			"I created this so I could pause movies that were playing on my laptop which was connected to my TV while I was sitting on the other side of the room."
		]
	},
	{
		"name": "Solitaire",
		"startDate": "2017-01",
		"url": "/comingSoon.html?infoTextId=unpublishedProject",
		"description": [
			"Solitaire is a single-player card game. You may know it as Klondike.",
			"I created this online version of Solitaire for my friends and me to play on our school iPads - since popular gaming websites were blocked at my secondary school.",
			"For any student reading this, I am obliged to ask you to not play games during lessons like we did. Paying attention in school is highly recommended."
		]
	},
	{
		"name": "Easy Type",
		"startDate": "2016-10",
		"description": [
			"Easy Type is another secondary school project.",
			"It is a text editor that I created for my classmates and me to use during ICT lessons at school."
		]
	},
	{
		"name": "Stickmen Battles",
		"startDate": "2016-06",
		"description": [
			"Stickmen Battles is another project I made during my secondary school years.",
			"It is a 2D computer game like Ball Jump - however, it was much more of a learning experience. It made me appreciate what worked for Ball Jump and not for Stickemen Battles."
		]
	},
	{
		"name": "Ball Jump",
		"startDate": "2015-06",
		"description": [
			"Ball Jump is my first ever project.",
			"It is a 2D computer game I made during my Year 7 summer holidays."
		]
	}
].sort((one, two) => (one["startDate"] <= two["startDate"]));
const projectTemplate = document.getElementById("projectTemplate");
const projectsContainer = document.getElementsByClassName("section--projects")[0];

function populateProjects() {
	for (let project of projects) {
		let projectElement = document.importNode(projectTemplate.content, true).querySelector(".project");
		projectElement.getElementsByClassName("project__name")[0].innerText = project["name"];
		projectElement.getElementsByClassName("project__startDate")[0].innerText = "Started in " +
			new Date(project["startDate"]).toLocaleDateString(
				"en-gb",
				{
					"month": "long",
					"year": "numeric"
				}
			);
		if (project["url"]) {
			projectElement.href = project["url"];
		} else {
			projectElement.href = project["name"].replaceAll(" ", "_").toLowerCase() + ".html";
		};

		let projectDescription = projectElement.getElementsByClassName("project__description")[0];
		for (let line of project["description"]) {
			let paragraph = document.createElement("p");
			paragraph.innerText = line;
			projectDescription.appendChild(paragraph);
		};

		projectsContainer.appendChild(projectElement);
	};
};

populateProjects();
