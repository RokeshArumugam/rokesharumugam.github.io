const testimonials = [
	{
		"authorName": "Rishal Narayan",
		"authorPosition": "A Level Student to Cambridge Medical Student",
		"quoteText": "The help Rokesh gave me with my personal statement was invaluable and extremely useful. Going through each paragraph and planning it together gave me a much better understanding of what a good personal statement consists of."
	},
	{
		"authorName": "Karthik Prabhu",
		"authorPosition": "A Level Student to Cambridge Medical Student",
		"quoteText": "When I initially decided to pursue a career in medicine, I was overwhelmed by the complex application process and the fierce competition for admission into medical schools. Fortunately, I got in touch with Rokesh, and I can confidently say that it was one of the best decisions I've ever made. The university-specific advice Rokesh gave me helped me navigate and gain acceptance by many medical schools. If you're looking for someone to help you with the medical school application process, I would highly recommend Rokesh!"
	},
	{
		"authorName": "Srinija Barri",
		"authorPosition": "A Level Student to Cambridge Medicine Offer-Holder",
		"quoteText": "The help Rokesh provided for both my personal statement and interview practice was incredibly useful. Although planning and writing a personal statement seemed daunting at first, he made the process a lot easier. From guiding me with planning, to providing invaluable, detailed feedback on every line of my drafts, he helped my personal statement become the best version it could be. His mock interviews also made sure I was ready to face the real thing! Thank you so much Rokesh!"
	},
	{
		"authorName": "Samyuktha Ramesh Dhayanand",
		"authorPosition": "A Level Student to Medical Student",
		"quoteText": "I am very appreciative of Rokesh's assistance with my personal statement because it was incredibly helpful. I valued how he carefully went over each paragraph and advised me on the necessary improvements and editing to make it the best possible final draft. It significantly improved my personal statement, in my opinion. Thank you so much."
	},
	{
		"authorName": "Jaysri Govindarajan",
		"authorPosition": "A Level Student to Medical Student",
		"quoteText": "Rokesh has been extremely helpful with my medicine application! He did not hold back on giving me invaluable advice. He has spent hours helping me create a plan for my personal statement, from outlining the qualities of a doctor to finding examples of these qualities in my own experiences. Thank you very much for all the help Rokesh!"
	},
	{
		"authorName": "Gabriella Kwei",
		"authorPosition": "Parent of A Level Student",
		"quoteText": "Rokesh was extremely helpful and personable - we found his advice to be informative and practical. The session exceeded expectations as it enabled my daughter to get tailored feedback. I would highly recommend Rokesh to prospective students."
	},
	{
		"authorName": "Davin Chandra",
		"authorPosition": "A Level Student",
		"quoteText": "Rokesh is really helpful and knowledgeable about the medical application process. He is very friendly and easily approachable, and provided me with apt and appropriate feedback. I highly recommend contacting him and seeking his expertise."
	}
];

populateTestimonials();

for (const elem of document.getElementsByClassName("section--otherServices__service--reducedAvailability")) {
	let bannerElem = document.createElement("span");
	bannerElem.classList.add("section--otherServices__banner");
	bannerElem.innerHTML = "Reduced availability. Please <a href='/contact/?suggestedId=ask'>email</a> first.";
	elem.appendChild(bannerElem)
};
