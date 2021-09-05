const testimonials = [
	{
		"authorName": "Rishal Narayan",
		"authorPosition": "A Level Student",
		"quoteText": "The help Rokesh gave me with my personal statement was invaluable and extremely useful. Going through each paragraph and planning it together gave me a much better understanding of what a good personal statement consists of."
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