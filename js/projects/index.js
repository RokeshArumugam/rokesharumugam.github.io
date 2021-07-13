const projects = [
	{
		"name": "Ball Jump",
		"startDate": "2015-06",
		"description": [
			"Ball Jump is a simple yet addictive 2D computer game! With easy controls and simple layout, this is very a fun game!",
			"Navigate your own customizable character through evil enemies and jump up through the platforms. With power-ups and skill there will be nothing to stop you!"
		]
	},
	{
		"name": "Stickmen Battles",
		"startDate": "2016-06",
		"url": "/comingSoon.html?infoText=Details%20for%20this%20project%20will%20be%20added%20soon.",
		"description": [
			"Stickmen Battles is a simple yet addictive 2D computer game! With easy controls and simple layout, this is very a fun game!",
			"Navigate your own customizable character past evil enemies and see how long you can survive. With power-ups and skill there will be nothing to stop you!"
		]
	},
	{
		"name": "Easy Type",
		"startDate": "2016-10",
		"url": "/comingSoon.html?infoText=Details%20for%20this%20project%20will%20be%20added%20soon.",
		"description": [
			"Easy Type is a simple yet easy to use text-editor! Its simple layout makes typing quick and effortless.",
			"There's even support for emojis in some fonts!"
		]
	},
	{
		"name": "Solitaire",
		"startDate": "2017-01",
		"url": "/comingSoon.html?infoText=Details%20for%20this%20project%20will%20be%20added%20soon.",
		"description": [
			"Solitaire is a single player card game.",
			"You may know it as Klondike."
		]
	},
	{
		"name": "TV Tracker",
		"startDate": "2021-05",
		"url": "/comingSoon.html?infoText=Details%20for%20this%20project%20will%20be%20added%20soon.",
		"description": [
			"TV Tracker can be used to keep track of how many episodes you have watched of each TV shows."
		]
	}
].sort((one, two) => (one["startDate"] < two["startDate"]));
const projectTemplate = document.getElementById("projectTemplate");
const projectsContainer = document.getElementsByClassName("projectsContainer")[0];

function populateProjects() {
	for (let project of projects) {
		let projectElement = document.importNode(projectTemplate.content, true).querySelector(".project");
		projectElement.getElementsByClassName("project__info__name")[0].innerText = project["name"];
		projectElement.getElementsByClassName("project__info__startDate")[0].innerText =
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