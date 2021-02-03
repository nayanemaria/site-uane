$('.owl-carousel').owlCarousel({
	dots: false,
	center: true,
	items: 3,
	loop: false,
	margin: 0,
	nav: false,
	responsive:{
		0: {
			items: 1,
			nav: true,
			rewind: true
		},
		769:{
			items: 3,
			nav: true
		}
	}
});
