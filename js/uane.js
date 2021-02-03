// slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

	var tela = $(window).width();

	if (n > slides.length) {
		slideIndex = 1
	}    
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" ativo", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " ativo";

	if (1189) {
		slideIndex++;
		if (slideIndex > slides.length) {
			slideIndex = 1
		}
		setTimeout(showSlides, 8000);
	}
}

$(document).ready(function(){
	rolagemPag();
	$('#dot').on('click', function(e){
		e.preventDefault();
		$(this).addClass('ativo');
	});


	//menu fixo ao rolar

	function rolagemPag() {
		var rolagem = $(window).scrollTop();
		if (rolagem > 90) {
			$(".menu-topo").addClass("menu-fixed").addClass("logoPos");
			$( ".nav-menu > ul > li > a" ).addClass("link-rolagem");
			$(".spinner").css('background-color', '#fff');
			$(".horizontal").css('background-color', '#fff');
			$(".diagonal.part-1").css('background-color', '#fff');
			$(".diagonal.part-2").css('background-color', '#fff');
			document.getElementById("logo").src = "img/logo-branca-desktop.png";
		} else {
			$(".menu-topo").removeClass("menu-fixed").removeClass("logoPos");
			$( ".nav-menu > ul > li > a" ).removeClass("link-rolagem").addClass("link-estavel");
			$(".spinner").css('background-color', '#435d04');
			$(".horizontal").css('background-color', '#435d04');
			$(".diagonal.part-1").css('background-color', '#435d04');
			$(".diagonal.part-2").css('background-color', '#435d04');
			document.getElementById("logo").src = "img/logo-verde-desktop.png";
		}
	}

	
	$(window).scroll(function(){
		rolagemPag();
	});


	//animacao do footer
	$('#button').click(function() {
		$(".expediente").animate({
			width: "toggle",
			height: "toggle"
		}, 500);

		$("#button i").toggleClass("down");
	});

});

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

