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
const textContainer = document.querySelector(".textContainer");

const testimonials = [
	{
		"name": "John Doe",
		"position": "A Level Student",
		"quote": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum, repellat nesciunt quidem inventore officiis vel dolorum possimus non ab."
	},
	{
		"name": "John Doe",
		"position": "A Level Student",
		"quote": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum, repellat nesciunt quidem inventore officiis vel dolorum possimus non ab."
	},
	{
		"name": "John Doe",
		"position": "A Level Student",
		"quote": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum, repellat nesciunt quidem inventore officiis vel dolorum possimus non ab."
	},
	{
		"name": "John Doe",
		"position": "A Level Student",
		"quote": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum, repellat nesciunt quidem inventore officiis vel dolorum possimus non ab."
	},
	{
		"name": "John Doe",
		"position": "A Level Student",
		"quote": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores harum, repellat nesciunt quidem inventore officiis vel dolorum possimus non ab."
	}
];
const testimonialTemplate = document.getElementById("testimonialTemplate");
const testimonialsContainer = document.querySelector(".testimonials");

async function typeText() {
	let oldText = textContainer.innerText;
	let textsToChooseFrom = texts.filter((val) => (val != oldText));
	let newText = textsToChooseFrom[Math.floor(Math.random() * textsToChooseFrom.length)];
	for (let i = oldText.length; i >= 0; i--) {
		textContainer.innerHTML = oldText.substring(0, i) + '<span class="cursor"></span>';
		await new Promise(resolve => setTimeout(resolve, typeDuration));
	};
	for (let i = 0; i <= newText.length; i++) {
		textContainer.innerHTML = newText.substring(0, i) + '<span class="cursor"></span>';
		await new Promise(resolve => setTimeout(resolve, typeDuration));
	};
	setTimeout(typeText, newText.length * waitPerCharacterDuration);
};

function populateTestimonials() {
	for (let testimonial of testimonials) {
		let testimonialElement = document.importNode(testimonialTemplate.content, true).querySelector(".testimonial");
		testimonialElement.getElementsByClassName("testimonial__quote")[0].innerText = testimonial["quote"];
		testimonialElement.getElementsByClassName("testimonial__personInfo__name")[0].innerText = testimonial["name"];
		testimonialElement.getElementsByClassName("testimonial__personInfo__position")[0].innerText = testimonial["position"];
		testimonialsContainer.appendChild(testimonialElement);
	};
};

typeText();
populateTestimonials();