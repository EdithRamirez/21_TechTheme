$(document).ready(function() { 
	$(window).on('scroll', function() {
		//si llega a la posicion 420 agrega la clase de nav-gris al menu y aparece enlace para ir arriba
		if( $(window).scrollTop() > 450) {
			console.log("cambio color de menu");
			$('nav').addClass('nav-gris');
			$('#activo').fadeIn(500);
		} else {
			$('nav').removeClass('nav-gris');
			$('#activo').fadeOut(500);
		}
	});
});