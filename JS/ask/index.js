const testimonials = [
	{
		"authorName": "Rishal Narayan",
		"authorPosition": "A Level Student",
		"quoteText": "The help Rokesh gave me with my personal statement was invaluable and extremely useful. Going through each paragraph and planning it together gave me a much better understanding of what a good personal statement consists of."
	},
	{
		"authorName": "Gabriella Kwei",
		"authorPosition": "Parent of A Level Student",
		"quoteText": "Rokesh was extremely helpful and personable - we found his advice to be informative and practical. The session exceeded expectations as it enabled my daughter to get tailored feedback. I would have been happy to pay £50 for Rokesh's advice and would highly recommend him to prospective students."
	}
];
const testimonialTemplate = document.getElementById("testimonialTemplate");
const testimonialsContainer = document.getElementsByClassName("section--testimonials")[0];

function populateTestimonials() {
	for (let testimonial of testimonials) {
		let testimonialElement = document.importNode(testimonialTemplate.content, true).querySelector(".testimonial");
		for (let [key, val] of Object.entries(testimonial)) {
			testimonialElement.getElementsByClassName("testimonial__" + key)[0].innerText = val;
		};
		testimonialsContainer.appendChild(testimonialElement);
	};
};

populateTestimonials();