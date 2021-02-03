// carrousel

$('.owl-carousel').owlCarousel({
	dots: false,
	center: false,
	items: 3,
	loop: false,
	margin: 0,
	nav: true,
	responsive:{
		0: {
			items: 1,
			nav: true,
			rewind: true
		},
		769:{
			items: 3,
			nav: true,
			rewind: true
		}
	}
});