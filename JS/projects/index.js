"use strict";


/* Variables */

const projects = {
	"avt": {},
	"blaze": {},
	"nia": {},
	"mayball.cai.cam.ac.uk": {},
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
			Object.assign(projects[projectName], parseREADME(text));
		}).catch(
			error => console.error(error)
		);
	}));
};

function parseREADME(README) {
	let project = {};
	let tokens = md.parse(README, {});

	for (let i = 0; i < tokens.length; i++) {
		// Heading
		if (
			(tokens[i]["type"] == "heading_open") &&
			(tokens[i]["tag"] == "h1")
		) {
			project["name"] = tokens[i + 1]["content"].trim();
			i += 2;
			continue;
		};

		// Start date, tags, page intro description
		if (tokens[i]["type"] == "blockquote_open") {
			project["pageIntroDescriptionElems"] = [];
			while (tokens[i + 1]["type"] == "paragraph_open") {
				i++;

				let elem;
				let dateMatch = tokens[i + 1]["content"].match(/^\s*Started in: (\d\d\d\d-\d\d)\s*$/);
				let linkMatch = tokens[i + 1]["content"].match(/^\s*\[([^\]]+?)\]\(([^\)]+?)\)\s*$/);
				if (dateMatch) {
					project["startDate"] = dateMatch[1];
				} else if (linkMatch) {
					elem = document.createElement("a");
					elem.title = linkMatch[1];
					elem.href = linkMatch[2];
					elem.classList.add("primaryButton");
				} else if (tokens[i + 1]["content"].match(/^(?:\s*!\[[^\]]+?\]\([^\)]+?\)\s*\n?)+$/)) {
					project["tags"] ||= [];

					let currentTags = tokens[i + 1]["content"].split("\n").map(line => {
						let lineMatch = line.match(/^\s*!\[([^\]]+?)\]\(([^\)]+?)\)\s*$/);
						return { "name": lineMatch[1], "url": lineMatch[2] };
					});

					project["tags"].push(...currentTags);

					elem = document.createElement("div");
					elem.classList.add("section--pageIntro__tagsContainer");
					currentTags.forEach(tag => {
						let tagElem = document.createElement("img");
						tagElem.alt = tag["name"];
						tagElem.src = tag["url"];
						elem.append(tagElem);
					});
				} else {
					elem = document.createElement("p");
					elem.innerText = tokens[i + 1]["content"].trim();
				};
				if (elem) project["pageIntroDescriptionElems"].push(elem);

				i += 2;
			};
			i += 1;
			continue;
		};

		// Description
		if (
			(!project["sections"]) &&
			(tokens[i]["type"] == "paragraph_open")
		) {
			project["description"] ||= [];
			project["description"].push(tokens[i + 1]["content"].trim());
			i += 2;
			continue;
		};

		// Sections
		if (
			(tokens[i]["type"] == "heading_open") &&
			(tokens[i]["tag"] == "h2")
		) {
			project["sections"] ||= [];
			project["sections"].push({ "heading": tokens[i + 1]["content"], "elems": [] });
			i += 2;
			continue;
		};
		if (project["sections"].at(-1)["heading"] == "Screenshots") {
			if (tokens[i]["type"] == "paragraph_open") {
				tokens[i + 1]["content"].split("\n").forEach((line, index) => {
					let lineMatch = line.trim().match(/^!\[([^\]]+?)\]\(([^\)]+?)\)$/);
					let imageElem = document.createElement("img");
					imageElem.alt = lineMatch[1];
					imageElem.src = lineMatch[2];
					imageElem.classList.add("section--carousel__image");
					imageElem.classList.toggle("section--carousel__image--current", index == 0);
					project["sections"].at(-1)["elems"].push(imageElem);
				});
				i += 2;
			};
		} else if (project["sections"].at(-1)["heading"] == "Video Demo") {
			if (tokens[i]["type"] == "paragraph_open") {
				let lineMatch = tokens[i + 1]["content"].trim().match(/^!\[([^\]]+?)\]\(([^\)]+?)\)$/);
				let videoElem = document.createElement("video");
				videoElem.alt = lineMatch[1];
				videoElem.src = lineMatch[2];
				videoElem.preload = "auto";
				videoElem.controls = true;
				videoElem.muted = true;
				project["sections"].at(-1)["elems"].push(videoElem);
				i += 2;
			};
		} else if (
			[
				"Background",
				"Information for Clients",
				"Description",
				"Advantages Over Its Predecessor",
				"Advantages Over Paper",
				"Features",
				"Usage",
				"Copyright"
			].includes(project["sections"].at(-1)["heading"])
		) {
			project["sections"].at(-1)["tokens"] ||= []
			project["sections"].at(-1)["tokens"].push(tokens[i])
		};
	};

	if (project["sections"]) {
		project["sections"].forEach(section => {
			if (!section["tokens"] || !section["tokens"].length) return;
			let tempDivElem = document.createElement("div");
			tempDivElem.innerHTML = md.renderer.render(section["tokens"], {}, {});
			section["elems"] = Array.from(tempDivElem.children);
		});
		project["sections"] = project["sections"].filter(section => section["elems"] && section["elems"].length);
		project["sections"].forEach(section => {
			section["elems"].forEach(elem => {
				if (elem.tagName != "UL") return;
				for (let liElem of elem.children) {
					let bulletMatch = liElem.innerText.match(/^\s*(\p{Emoji})\s.+$/u);
					if (bulletMatch) {
						liElem.dataset.marker = bulletMatch[1];
						liElem.innerText = liElem.innerText.replace(/^\s*\p{Emoji}\s/u, "");
					};
				};
			});
		});
	};

	return project;
};

/* -- Section population -- */

function populatePageIntroHeading(heading) {
	if (!document.querySelector(".section--pageIntro")) {
		document.querySelectorAll("section").forEach(elem => elem.remove());
		document.querySelector("main").append(pageIntroTemplate.cloneNode(true).content.firstElementChild);
	};
	document.getElementsByClassName("section--pageIntro__heading")[0].innerText = heading.trim();
}
function populatePageIntroDescription(elems) {
	let descriptionElem = document.getElementsByClassName("section--pageIntro__description")[0];
	descriptionElem.innerHTML = "";
	descriptionElem.append(...elems);
};
function populateTextSection(h2, elems) {
	if (h2 != "Background") {
		let h2Elem = document.createElement("h2");
		h2Elem.innerText = h2;
		elems = [h2Elem, ...elems];
	};

	elems.forEach(elem => elem.innerHTML = elem.innerHTML.replaceAll(/\[([^\]]+?)\]\(([^\)]+?)\)/g, "<a href=\"$2\">$1</a>"));

	if (
		(elems.length == 2) &&
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
	if (h2 == "Screenshots")
		populateCarouselSection(elems);
	else
		populateTextSection(h2, elems);
};

/* -- Page population -- */

async function populateProjectsListPage() {
	populatePageIntroHeading("Projects");
	populatePageIntroDescription(`
		I learnt to code when I was 12 and have been doing some projects, now and then, in my free time.

		I started coding in Java then HTML, CSS and JavaScript, then I dabbled in some VB, Batch and Bash. I also did some Swift programming. For some full-stack projects I also used PHP and SQL. Nowadays I mainly do Python and HTML, CSS and JavaScript.

		I've made a list of some of my projects below - feel free to check them out and let me know what you think!
	`.trim().split("\n").map(line => {
		let elem = document.createElement("p");
		elem.innerText = line.trim();
		return elem;
	}));


	let sectionElem = document.createElement("section");
	sectionElem.classList.add("section--projects");
	await fetchProjects();
	sectionElem.append(
		...Object.entries(
			projects
		).filter(
			([, project]) => project["name"] && project["startDate"] && project["description"]
		).sort(
			([projectOneName, projectOne], [projectTwoName, projectTwo]) => (projectOne["startDate"] <= projectTwo["startDate"])
		).map(([projectName, project]) => {
			let projectElem = projectTemplate.cloneNode(true).content.firstElementChild;
			projectElem.querySelector(".project__name").innerText = project["name"];
			projectElem.querySelector(".project__startDate").innerText =
				"Started in " +
				new Date(project["startDate"]).toLocaleDateString(
					"en-gb", { "month": "long", "year": "numeric" }
				);

			if (project["sections"] && project["sections"].map(section => section["heading"]).includes("Background"))
				projectElem.href = "?project=" + projectName;
			else
				projectElem.href = "/comingSoon.html?infoTextId=unpublishedProject";

			let projectDescription = projectElem.querySelector(".project__description");
			projectDescription.append(...project["description"].slice(0, 2).map(line => {
				let paragraphElem = document.createElement("p");
				paragraphElem.innerText = line;
				return paragraphElem;
			}));

			if (project["pageIntroDescriptionElems"]) {
				let tagsContainerElems = project["pageIntroDescriptionElems"].filter(elem => elem.className.includes("section--pageIntro__tagsContainer"));
				if (tagsContainerElems.length)
					projectElem.querySelector(".project > .project__tagsContainer").append(...tagsContainerElems.at(-1).children);
				if (tagsContainerElems.length == 2)
					projectElem.querySelector(".project__infoContainer .project__tagsContainer").append(...tagsContainerElems[0].children);
			};

			return projectElem;
		})
	);
	document.querySelector(".section--projects")?.remove();
	document.querySelector("main").append(sectionElem);
};
function populateProjectPage(README) {
	let project = parseREADME(README);
	populatePageIntroHeading(project["name"]);
	populatePageIntroDescription(project["pageIntroDescriptionElems"]);
	project["sections"].forEach(section => populateSection(section["heading"], section["elems"]));
	hljs.highlightAll();
};


/* Main */

if (urlParams.get("project") && (urlParams.get("project") in projects)) {
	fetch(
		urlParams.get("project") + "/README.md"
	).then(
		response => response.ok ? response.text() : populateProjectsListPage()
	).then(README => {
		if (!README) return;

		if (README.includes("## Background"))
			populateProjectPage(README);
		else
			window.location.replace("/comingSoon.html?infoTextId=unpublishedProject");
	}).catch(error => {
		console.error(error);
		populateProjectsListPage();
	});
} else {
	populateProjectsListPage();
};
