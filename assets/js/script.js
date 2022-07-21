
$(function () {
	
    /* Alert boton enviar*/
    $('#enviarcorreo').click(function(){
    alert("El correo fue enviado correctamente.");
    });
    
    /*tooltip*/
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
});


/*Cambio de color navbar*/
$(window).scroll(function(){
  if ($("#navbar").offset().top > 700) {
      $("#navbar").addClass("bg-info");
  } else {
      $("#navbar").removeClass("bg-info");
  }
});

/*Libreria Typed.js*/
var typed = new Typed('.type', {
  strings: [
  'El Desierto', 
  'Isla de Pascua',
  'La Patagonia',
],
  typeSpeed: 40,
  backSpeed: 40,
  backDelay: 3800,
  loop: true,
});

