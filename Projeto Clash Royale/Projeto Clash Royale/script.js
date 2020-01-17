
			<!--rolar-->
			jQuery(document).ready(function($) {
			  $('.scroll').click(function(event) {
  			  event.preventDefault();
			  $('html,body').animate({scrollTop:$(this.hash).offset().top},800);
				});
			});
		
		
       
 			<!--abrir janela-->
			$(document).ready(function(e) {
       		 $('#fundo').hide(0);
			 $('.bloco').hide(0);
   		 		});
			function janela(quem){
			$('#fundo').fadeIn(1000);
			$('.bloco').hide(0);		
			$(quem).fadeIn(1000);
				}
			function fechar(){
			$('#fundo').fadeOut(1000);
			$('.bloco').fadeOut(1000);
		
	}
	