isWebp();

const swiper = new Swiper( ".offer-swiper", {
	slidesPerView: 3,
	allowTouchMove: false, // временно, на телефоне включить
	pagination: {
		el: '.offer-swiper__pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.offer-swiper__button-next',
		prevEl: '.offer-swiper__button-prev',
	},
});