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

const testimonials = [
	{
		"authorName": "John Doe",
		"authorPosition": "A Level Student",
		"quoteText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum, repellat nesciunt quidem inventore officiis vel dolorum possimus non ab."
	},
	{
		"authorName": "John Doe",
		"authorPosition": "A Level Student",
		"quoteText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum, repellat nesciunt quidem inventore officiis vel dolorum possimus non ab."
	},
	{
		"authorName": "John Doe",
		"authorPosition": "A Level Student",
		"quoteText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum, repellat nesciunt quidem inventore officiis vel dolorum possimus non ab."
	},
	{
		"authorName": "John Doe",
		"authorPosition": "A Level Student",
		"quoteText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum, repellat nesciunt quidem inventore officiis vel dolorum possimus non ab."
	},
	{
		"authorName": "John Doe",
		"authorPosition": "A Level Student",
		"quoteText": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum, repellat nesciunt quidem inventore officiis vel dolorum possimus non ab."
	}
];
const testimonialTemplate = document.getElementById("testimonialTemplate");
const testimonialsContainer = document.getElementsByClassName("section--testimonials")[0];

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

function populateTestimonials() {
	for (let testimonial of testimonials) {
		let testimonialElement = document.importNode(testimonialTemplate.content, true).querySelector(".testimonial");
		for (let [key, val] of Object.entries(testimonial)) {
			testimonialElement.getElementsByClassName("testimonial__" + key)[0].innerText = val;
		};
		testimonialsContainer.appendChild(testimonialElement);
	};
};

typeText();
populateTestimonials();