const texts = [
	"A Level Biology Tutoring",
	"A Level Chemistry Tutoring",
	"A Level Maths Tutoring",
	"A Level Computer Science Tutoring",
	"GCSE Tutoring",
	"11+ Tutoring",
	"Medicine University Application Advice",
	"Medicine Personal Statement Advice",
	"Programming Tutoring",
	"Programming Courses",
	"Programming Projects"
];
const waitPerCharacterDuration = 175;
const typeDuration = 60;
const textContainer = document.getElementsByClassName("section--hero__textContainer")[0];

async function typeText() {
	let oldText = textContainer.innerText;
	let textsToChooseFrom = texts.filter((val) => (val != oldText));
	let newText = textsToChooseFrom[Math.floor(Math.random() * textsToChooseFrom.length)];
	for (let i = oldText.length; i >= 0; i--) {
		textContainer.innerHTML = oldText.substring(0, i) + '<span class="section--hero__cursor"></span>';
		await new Promise(resolve => setTimeout(resolve, typeDuration));
	};
	for (let i = 0; i <= newText.length; i++) {
		textContainer.innerHTML = newText.substring(0, i) + '<span class="section--hero__cursor"></span>';
		await new Promise(resolve => setTimeout(resolve, typeDuration));
	};
	setTimeout(typeText, newText.length * waitPerCharacterDuration);
};

typeText();