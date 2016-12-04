$(document).ready(function() { 

	var position = $('#inicio').position().top;
	
	$(window).on('scroll', function() {
		//si llega a la posicion 420 agrega la clase de nav-gris al menu y aparece enlace para ir arriba
		if( $(window).scrollTop() > position) {
			console.log(position);
			$('nav').addClass('nav-gris');
			$('#activo').fadeIn(500);
		} else {
			$('nav').removeClass('nav-gris');
			$('#activo').fadeOut(500);
		}
	});

	/*cerrar menu*/
	$('.navbar-collapse a').click(function(){
		$(".navbar-collapse").collapse('hide');
	});

});