$(document).ready(function () {
	var altura = $('nav.menu').offset().top;

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > altura) {
			$('nav.menu').addClass('menu-fixed');
		} else {
			$('nav.menu').removeClass('menu-fixed');
		}
	});

});