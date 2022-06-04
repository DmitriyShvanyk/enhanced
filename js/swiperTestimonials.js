;(function () {

	"use strict";

	// swiper testimonials
	const swiperTestimonials = new Swiper('.testimonials__swiper', {
		preloadImages: false,
		lazy: true,
		loop: true,
		autoHeight: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

})();