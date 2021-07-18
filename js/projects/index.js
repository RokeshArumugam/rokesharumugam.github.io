const projects = [
	{
		"name": "Ball Jump",
		"startDate": "2015-06",
		"description": [
			"Ball Jump is my first ever project.",
			"It is a 2D computer game I made during my secondary school summer holidays."
		]
	},
	{
		"name": "Stickmen Battles",
		"startDate": "2016-06",
		"description": [
			"Stickmen Battles is another project I made during my secondary school years.",
			"It is a 2D computer game like Ball Jump, however, it was much more of a learning experience. It made me appreciate what worked for Ball Jump and not for Stickemen Battles."
		]
	},
	{
		"name": "Easy Type",
		"startDate": "2016-10",
		"description": [
			"Easy Type is a text editor.",
			"I created it for my classmates and I to use during ICT lessons at school."
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
const projectsContainer = document.getElementsByClassName("section--projects")[0];

function populateProjects() {
	for (let project of projects) {
		let projectElement = document.importNode(projectTemplate.content, true).querySelector(".project");
		projectElement.getElementsByClassName("project__name")[0].innerText = project["name"];
		projectElement.getElementsByClassName("project__startDate")[0].innerText =
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