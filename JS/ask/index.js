const testimonials = [
	{
		"authorName": "Rishal Narayan",
		"authorPosition": "A Level Student",
		"quoteText": "The help Rokesh gave me with my personal statement was invaluable and extremely useful. Going through each paragraph and planning it together gave me a much better understanding of what a good personal statement consists of."
	},
	{
		"authorName": "Gabriella Kwei",
		"authorPosition": "Parent of A Level Student",
		"quoteText": "Rokesh was extremely helpful and personable - we found his advice to be informative and practical. The session exceeded expectations as it enabled my daughter to get tailored feedback. I would highly recommend Rokesh to prospective students."
	},
	{
		"authorName": "Samyuktha Ramesh Dhayanand",
		"authorPosition": "A Level Student",
		"quoteText": "I am very appreciative of Rokesh's assistance with my personal statement because it was incredibly helpful. I valued how he carefully went over each paragraph and advised me on the necessary improvements and editing to make it the best possible final draft. It significantly improved my personal statement, in my opinion. Thank you so much."
	},
	{
		"authorName": "Jaysri Govindarajan",
		"authorPosition": "A Level Student",
		"quoteText": "Rokesh has been extremely helpful with my medicine application! He did not hold back on giving me invaluable advice. He has spent hours helping me create a plan for my personal statement, from outlining the qualities of a doctor to finding examples of these qualities in my own experiences. Thank you very much for all the help Rokesh!"
	}
];

populateTestimonials();

for (const elem of document.getElementsByClassName("section--otherServices__service--reducedAvailability")) {
	let bannerElem = document.createElement("span");
	bannerElem.classList.add("section--otherServices__banner");
	bannerElem.innerHTML = "Reduced availability. Please <a href='/contact/?suggestedId=ask'>email</a> first.";
	elem.appendChild(bannerElem)
};