let imagesContainer;
let images;
let dotsContainer;
let dots;
let carouselTimeoutDuration
let carouselTimeout;

function startCarousel() {
	carouselTimeout = setTimeout(nextImage, carouselTimeoutDuration);
};
function stopCarousel() {
	clearTimeout(carouselTimeout);
};

function getCurrentIndex() {
	return images.findIndex((elem) => elem.className.includes("section--carousel__image--current"))
};

function changeImage(currentIndex, targetIndex) {
	targetIndex = ((targetIndex % images.length) + images.length) % images.length;
	if (currentIndex == targetIndex) return;

	images[currentIndex].classList.remove("section--carousel__image--current");
	images[targetIndex].classList.add("section--carousel__image--current");
	dots[currentIndex].classList.remove("section--carousel__dot--current");
	dots[targetIndex].classList.add("section--carousel__dot--current");
	stopCarousel();
	startCarousel();
};
function previousImage() {
	let currentIndex = getCurrentIndex();
	changeImage(currentIndex, currentIndex - 1);
};
function nextImage() {
	let currentIndex = getCurrentIndex();
	changeImage(currentIndex, currentIndex + 1);
};


if (document.getElementsByClassName("section--carousel")[0]) {
	imagesContainer = document.getElementsByClassName("section--carousel__imagesContainer")[0];
	images = Array.from(imagesContainer.getElementsByClassName("section--carousel__image"));
	dotsContainer = document.getElementsByClassName("section--carousel__dotsContainer")[0];
	dots = Array.from(dotsContainer.getElementsByClassName("section--carousel__dot"));
	carouselTimeoutDuration = getComputedStyle(
		document.getElementsByClassName("section--carousel")[0]
	).getPropertyValue("--image-wait-duration").replace("ms", "");

	document.getElementsByClassName("section--carousel__button--left")[0].addEventListener("click", (evt) => {
		previousImage();
	});
	document.getElementsByClassName("section--carousel__button--right")[0].addEventListener("click", (evt) => {
		nextImage();
	});
	document.querySelectorAll(".section--carousel__dot").forEach((elem) => {
		elem.addEventListener("click", (evt) => {
			changeImage(getCurrentIndex(), dots.indexOf(evt.target));
		});
	});

	dots[0].classList.add("section--carousel__dot--current");
	startCarousel();
};