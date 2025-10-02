"use strict";


/* Variables */

const projectsOld = [
	{
		"name": "AVT",
		"startDate": "2025-09",
		"description": [
			"AVT is a simple webapp I made to help collect data for the Ambient Voice Technology study.",
			"There was already an old website which was quite good but was just missing a few quality of life features, so I quickly whipped up this version to replace it."
		]
	},
	{
		"name": "Blaze",
		"startDate": "2024-10",
		"url": "/comingSoon.html?infoTextId=unpublishedProject",
		"description": [
			"Blaze is a project that I made to convert my university timetable from a website format to a subscribable link.",
			"My university's timetable is only available on a website (after several logins and clicks) which they update frequently without notice so often students have turned up to a session only to find out that it was cancelled shortly before.",
			"This project lets me have an always-up-to-date calendar easily accessible on my phone."
		]
	},
	{
		"name": "NIA",
		"startDate": "2024-07",
		"description": [
			"NIA is a simple webapp I made to help allocate accommodation to students at my college (Gonville and Caius) at the University of Cambridge.",
			"For clinical medical students, we have to self-assign a representative who then manually allocates rooms to students based on their preferences. This can be a tedious task so I made NIA to help with this.",
			"Update (2025-08): the accommodation officer is MIA so I sent a link to NIA to the college in case it helps them.",
		]
	},
	{
		"name": "May Ball Website",
		"startDate": "2023-12",
		"description": [
			"May Ball Website is a website that I made for my college (Gonville and Caius) at the University of Cambridge to be used for the May Ball.",
			"The May Ball is a big, fancy party at the end of the year and the website is usually used to sell tickets and show FAQs. This year the committee wanted to do something a little more advanced so they enlisted my help."
		]
	},
	{
		"name": "Salt",
		"startDate": "2023-08",
		"description": [
			"Salt is a browser extension that enhances the meal booking website at my college (Gonville and Caius) at the University of Cambridge.",
			"Salt applies almost all of the improvements (and more) from my Meal Booking Website project on top of the old website via a browser extension (albeit not as efficiently as replacing the old website would be)."
		]
	},
	{
		"name": "Video Speeder",
		"startDate": "2023-07",
		"url": "/comingSoon.html?infoTextId=unpublishedProject",
		"description": [
			"Video Speeder is a browser extension that allows you to change the playback speed of videos beyond the normal 0.5-2.0x.",
			"I created this since I sometimes watch lectures at 3.0-4.0x speed, but I had to use Google Chrome instead of Safari (which is what I normally use) to use the 'Fast Panopto' extension - now I can stick with Safari."
		]
	},
	{
		"name": "Sesame",
		"startDate": "2022-11",
		"url": "/comingSoon.html?infoTextId=unpublishedProject",
		"description": [
			"Sesame is a project that allows my Raspberry Pi to unlock the front door of my accomodation using a servomotor and the intercom button in my room.",
			"Instead of using my key to unlock the front door I can now just tap a button on my watch and buzz myself in.",
			"This was my first electronics projects so it was a good learning experience."
		]
	},
	{
		"name": "Character Sheet",
		"startDate": "2022-09",
		"description": [
			"Character Sheet is a digital character sheet that has some web-scraping-powered automations.",
			"I use this instead of my paper character sheet when I'm playing D&D. I just close the tab when I'm done and reopen it next time to access my previous character sheets.",
			"All of the data is saved in the browser on your device so anyone can use this and save data without an account. Alternatively you can also download and upload your character sheet as an editable PDF."
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
		"name": "Static Site Checker",
		"startDate": "2022-07",
		"url": "/comingSoon.html?infoTextId=unpublishedProject",
		"description": [
			"Static Site Checker is a web scraper that checks if a website changes e.g. if the price of a product on amazon.co.uk changes.",
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
			"It is a 2D computer game like Ball Jump - however, it was much more of a learning experience. It made me appreciate what worked for Ball Jump and not for Stickmen Battles."
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
const projects = {
	"avt": {},
	"blaze": {},
	"nia": {},
	"mayBallWebsite": {},
	"salt": {},
	"videoSpeeder": {},
	"sesame": {},
	"characterSheet": {},
	"mealBookingWebsite": {},
	"staticSiteChecker": {},
	"prandium": {},
	"invoiceGenerator": {},
	"commandBar": {},
	"tvTracker": {},
	"remoteController": {},
	"solitaire": {},
	"easyType": {},
	"stickmenBattles": {},
	"ballJump": {}
};
const md = window.markdownit();
const pageIntroTemplate = document.getElementById("pageIntroTemplate");
const projectTemplate = document.getElementById("projectTemplate");
const carouselTemplate = document.getElementById("carouselTemplate");
const carouselTimeoutDuration = 10000;


/* Functions */

async function fetchProjects() {
	await Promise.all(Object.keys(projects).map(async projectName => {
		if (
			(projects[projectName]["name"]) &&
			(projects[projectName]["startDate"]) &&
			(projects[projectName]["description"])
		) {
			return;
		};

		await fetch(
			projectName + "/README.md"
		).then(
			response => response.ok ? response.text() : null
		).then(text => {
			if (!text) return;

			let tokens = md.parse(text, {});

			for (let i = 0; i < tokens.length; i++) {
				// Heading
				if (
					(tokens[i]["type"] == "heading_open") &&
					(tokens[i]["tag"] == "h1")
				) {
					projects[projectName]["name"] = tokens[i + 1]["content"].trim();
					i += 2;
					continue;
				};

				// Start date
				if (tokens[i]["type"] == "blockquote_open") {
					projects[projectName]["startDate"] = tokens[i + 2]["content"].replace(/.*Started in: (\d\d\d\d-\d\d).*/s, "$1");
					i += 4;
					continue;
				};

				// Description
				if (tokens[i]["type"] == "paragraph_open") {
					if (!projects[projectName]["description"]) projects[projectName]["description"] = [];
					projects[projectName]["description"].push(tokens[i + 1]["content"].trim());
					if (projects[projectName]["description"].length >= 2) break;
					i += 2;
					continue;
				};
			};
		}).catch(
			error => console.error(error)
		);
	}));
};

/* -- Section population -- */

function populatePageIntroHeading(heading) {
	if (!document.querySelector(".section--pageIntro")) {
		document.querySelectorAll("section").forEach(elem => elem.remove());
		document.querySelector("main").append(pageIntroTemplate.cloneNode(true).content.firstElementChild);
	};
	document.getElementsByClassName("section--pageIntro__heading")[0].innerText = heading.trim();
}
function populatePageIntroDescription(description) {
	let descriptionElem = document.getElementsByClassName("section--pageIntro__description")[0];
	descriptionElem.innerHTML = "";
	for (let line of description.trim().split("\n")) {
		line = line.trim();
		let elem;
		let linkMatch = line.match(/^\[([^\]]+?)\]\(([^\)]+?)\)$/);
		if (linkMatch) {
			elem = document.createElement("a");
			elem.innerText = linkMatch[1];
			elem.href = linkMatch[2];
			elem.classList.add("primaryButton");
		} else {
			elem = document.createElement("p");
			elem.innerText = line;
		}
		descriptionElem.append(elem);
	};
};
function populateTextSection(h2, elems) {
	if (h2 != "Background") {
		let h2Elem = document.createElement("h2");
		h2Elem.innerText = h2;
		elems = [h2Elem, ...elems];
	};

	elems.forEach(elem => elem.innerHTML = elem.innerHTML.replaceAll(/\[([^\]]+?)\]\(([^\)]+?)\)/g, "<a href=\"$2\">$1</a>"));
	
	if (
		(elems[1].tagName == "P") &&
		(elems[1].children.length == 1) &&
		(elems[1].firstElementChild.tagName == "A") &&
		(elems[1].innerText == elems[1].firstElementChild.innerText)
	) {
		elems[1] = elems[1].firstElementChild;
		elems[1].classList.add("primaryButton");
	};

	let sectionElem = document.createElement("section");
	sectionElem.id = h2.charAt(0).toLowerCase() + h2.slice(1).replaceAll(" ", "") + "Section";
	sectionElem.classList.add("section--text");
	sectionElem.append(...elems);
	document.querySelector("main").append(sectionElem);
};
function populateCarouselSection(imageElems) {
	let startCarousel = () => carouselTimeout = setTimeout(nextImage, carouselTimeoutDuration);
	let stopCarousel = () => clearTimeout(carouselTimeout);
	let getCurrentIndex = () => imageElems.findIndex(elem => elem.className.includes("section--carousel__image--current"));
	let changeImage = (currentIndex, targetIndex) => {
		targetIndex = ((targetIndex % imageElems.length) + imageElems.length) % imageElems.length;
		if (currentIndex == targetIndex) return;

		imageElems[currentIndex].classList.remove("section--carousel__image--current");
		imageElems[targetIndex].classList.add("section--carousel__image--current");
		dotElems[currentIndex].classList.remove("section--carousel__dot--current");
		dotElems[targetIndex].classList.add("section--carousel__dot--current");
		stopCarousel();
		startCarousel();
	};
	let previousImage = () => {
		let currentIndex = getCurrentIndex();
		changeImage(currentIndex, currentIndex - 1);
	};
	let nextImage = () => {
		let currentIndex = getCurrentIndex();
		changeImage(currentIndex, currentIndex + 1);
	};

	let carouselTimeout;

	let sectionElem = carouselTemplate.cloneNode(true).content.firstElementChild;
	sectionElem.style.setProperty("--image-wait-duration", carouselTimeoutDuration + "ms");

	imageElems = Array.from(imageElems);
	let dotElems = imageElems.map((elem, index) => {
		let dotElem = document.createElement("div");
		dotElem.classList.add("section--carousel__dot");
		dotElem.addEventListener("click", () => changeImage(getCurrentIndex(), index));
		return dotElem;
	});

	sectionElem.querySelector(".section--carousel__imagesContainer").append(...imageElems);
	sectionElem.querySelector(".section--carousel__dotsContainer").append(...dotElems);
	sectionElem.querySelector(".section--carousel__button--left").addEventListener("click", () => previousImage());
	sectionElem.querySelector(".section--carousel__button--right").addEventListener("click", () => nextImage());
	document.querySelector("main").append(sectionElem);

	setTimeout(() => dotElems[0].classList.add("section--carousel__dot--current"), 1);
	startCarousel();
};
function populateSection(h2, elems) {
	if (h2 == "Tags") {
	} else if (h2 == "Screenshots") {
		populateCarouselSection(elems);
	} else {
		populateTextSection(h2, elems);
	};
};

/* -- Page population -- */

async function populateProjectsListPage() {
	populatePageIntroHeading("Projects");
	populatePageIntroDescription(`
		I learnt to code when I was 12 and have been doing some projects, now and then, in my free time.

		I started coding in Java then HTML, CSS and JavaScript, then I dabbled in some VB, Batch and Bash. I also did some Swift programming. For some full-stack projects I also used PHP and SQL. Nowadays I mainly do Python and HTML, CSS and JavaScript.

		I've made a list of some of my projects below - feel free to check them out and let me know what you think!
	`.trim());


	let sectionElem = document.createElement("section");
	sectionElem.classList.add("section--projects");
	await fetchProjects();
	sectionElem.append(
		...Object.entries(
			projects
		).sort(
			([projectOneName, projectOne], [projectTwoName, projectTwo]) => (projectOne["startDate"] <= projectTwo["startDate"])
		).map(([projectName, project]) => {
			let projectElem = projectTemplate.cloneNode(true).content.firstElementChild;
			projectElem.getElementsByClassName("project__name")[0].innerText = project["name"];
			projectElem.getElementsByClassName("project__startDate")[0].innerText =
				"Started in " +
				new Date(project["startDate"]).toLocaleDateString(
					"en-gb", { "month": "long", "year": "numeric" }
				);
			projectElem.href = project["url"] ?? "?project=" + projectName;

			let projectDescription = projectElem.getElementsByClassName("project__description")[0];
			projectDescription.append(...project["description"].map(line => {
				let paragraph = document.createElement("p");
				paragraph.innerText = line;
				return paragraph;
			}));

			return projectElem;
		})
	);
	document.querySelector(".section--projects").remove();
	document.querySelector("main").append(sectionElem);
};
function populateProjectPage(README) {
	let tokens = md.parse(README, {});
	let currentH2;
	let currentElems;
	for (let i = 0; i < tokens.length; i++) {
		// Page intro heading
		if (
			(tokens[i]["type"] == "heading_open") &&
			(tokens[i]["tag"] == "h1")
		) {
			populatePageIntroHeading(tokens[i + 1]["content"]);
			i += 2;
			continue;
		};

		// Page intro description
		if (
			(tokens[i]["type"] == "blockquote_open") &&
			(tokens[i - 1]["type"] == "heading_close") &&
			(tokens[i - 1]["tag"] == "h1")
		) {
			populatePageIntroDescription(tokens[i + 2]["content"].replace(/Started in: \d\d\d\d-\d\d\n/, ""));
			i += 4;
			continue;
		};

		// Sections
		if (
			(tokens[i]["type"] == "heading_open") &&
			(tokens[i]["tag"] == "h2")
		) {
			if (currentH2)
				populateSection(currentH2, currentElems);
			currentH2 = tokens[i + 1]["content"];
			currentElems = [];
			i += 2;
			continue;
		};
		if (currentH2) {
			switch (currentH2) {
				case "Tags":
					if (tokens[i]["type"] == "paragraph_open") {
						let tags = tokens[i + 1]["content"].split(",").map(tag => tag.trim());
						i += 2;
					};
					break;
				case "Screenshots":
					if (tokens[i]["type"] == "paragraph_open") {
						tokens[i + 1]["content"].split("\n").forEach((line, index) => {
							let lineMatch = line.trim().match(/^\[([^\]]+?)\]\(([^\)]+?)\)$/);
							let imageElem = document.createElement("img");
							imageElem.alt = lineMatch[1];
							imageElem.src = lineMatch[2];
							imageElem.classList.add("section--carousel__image");
							imageElem.classList.toggle("section--carousel__image--current", index == 0);
							currentElems.push(imageElem);
						});
						i += 2;
					};
					break;
				default:
					if (tokens[i]["type"] == "paragraph_open") {
						let paragraphElem = document.createElement("p");
						paragraphElem.innerText = tokens[i + 1]["content"];
						currentElems.push(paragraphElem);
						i += 2;
					} else if (tokens[i]["type"] == "bullet_list_open") {
						let ulElem = document.createElement("ul");
						while (tokens[i + 1]["type"] == "list_item_open") {
							i++;
							let liElem = document.createElement("li");
							liElem.innerText = tokens[i + 2]["content"];
							ulElem.append(liElem);
							i += 4;
						};
						currentElems.push(ulElem);
					};
					break;
			};
		};
	};
	if (currentH2)
		populateSection(currentH2, currentElems);
};


/* Main */

if (urlParams.get("project") && (urlParams.get("project") in projects)) {
	fetch(
		urlParams.get("project") + "/README.md"
	).then(
		response => response.ok ? response.text() : populateProjectsListPage()
	).then(README => {
		if (!README) return;
		if (README.includes("## Background")) {
			populateProjectPage(README);
		} else {
			window.history.replaceState({}, document.title, "/comingSoon.html?infoTextId=unpublishedProject");
		};
	}).catch(error => {
		console.error(error);
		populateProjectsListPage();
	});
} else {
	populateProjectsListPage();
};
