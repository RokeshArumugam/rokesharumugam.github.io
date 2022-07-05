const textLinks = {
	"A Level Biology Tutoring": "/tutoring/",
	"A Level Chemistry Tutoring": "/tutoring/",
	"A Level Maths Tutoring": "/tutoring/",
	"A Level Computer Science Tutoring": "/tutoring/",
	"GCSE Tutoring": "/tutoring/",
	"11+ Tutoring": "/tutoring/",
	"Medicine University Application Advice": "/ask/",
	"Medicine Personal Statement Advice": "/ask/",
	"Programming Tutoring": "/tutoring/",
	"Programming Courses": "/comingSoon.html?infoTextId=courses",
	"Programming Projects": "/projects/"
};
const waitPerCharacterDuration = 175;
const typeDuration = 60;
const textContainer = document.getElementsByClassName("section--hero__textContainer")[0];

async function typeText() {
	let oldText = textContainer.innerText;
	let textsToChooseFrom = Object.keys(textLinks).filter((val) => (val != oldText));
	let newText = textsToChooseFrom[Math.floor(Math.random() * textsToChooseFrom.length)];

	for (let i = oldText.length; i >= 0; i--) {
		textContainer.innerHTML = oldText.substring(0, i) + '<span class="section--hero__cursor"></span>';
		await new Promise(resolve => setTimeout(resolve, typeDuration));
	};
	textContainer.href = textLinks[newText];
	for (let i = 0; i <= newText.length; i++) {
		textContainer.innerHTML = newText.substring(0, i) + '<span class="section--hero__cursor"></span>';
		await new Promise(resolve => setTimeout(resolve, typeDuration));
	};

	setTimeout(typeText, newText.length * waitPerCharacterDuration);
};

typeText();