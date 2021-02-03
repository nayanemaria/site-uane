$(document).ready(function(){

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
			$(".spinner").css('background-color', '#fff');
			$(".horizontal").css('background-color', '#fff');
			$(".diagonal.part-1").css('background-color', '#fff');
			$(".diagonal.part-2").css('background-color', '#fff');
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