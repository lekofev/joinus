/**
*
* @fileoverview Libreria con funciones de utilidad
* @author Nombre_programador
* @date Fecha_inicio
* @version 1.0
*/

$(document).ready(function(){
	


	var lt_ie9=false;
	var msie=false;
	var url=document.URL;
	var urlHash;
	var urlLimpia;
	var slide=0;

	urlHash=location.hash;
	urlHash=urlHash.substring(1,urlHash.length)

	var urlLimpia=url;
	while(urlLimpia.search('#')!=-1)
	{
		urlLimpia=urlLimpia.substring(0,urlLimpia.length-1)
	}


	if(jQuery.browser.msie && jQuery.browser.version<9.0)
	{
		lt_ie9=true;
	}	

	if(jQuery.browser.msie)
	{
		msie=true;
	}		


	switch(urlHash)
	{
		case '':
			slide=0;
		break;
		case 'exploring-lima':
			slide=1;
			$('a.explorando').addClass('activo')
		break;
		case 'savoring-peruvian-food':
			slide=2;
			$('a.degustando').addClass('activo')
		break;
		case 'language':
			slide=3;
			$('a.idiomas').addClass('activo')
		break;
		case 'culture':
			slide=4;
			$('a.cultura').addClass('activo')
		break;
		case 'sports':
			slide=5;
			$('a.deporte').addClass('activo')
		break;
		case 'karaoke':
			slide=6;
			$('a.karaoke').addClass('activo')
		break;
		case 'partying-lima':
			slide=7;
			$('a.partying').addClass('activo')
		break;
		case 'volunteering':
			slide=8;
			$('a.voluntariado').addClass('activo')
		break;
		case 'contact':
			slide=9;
			$('a.contacto').addClass('activo')
		break;
		case 'participate':
			slide=10;
		break;
		default:
			prealoder()
		break;
	}



			  

	$('.secciones').cycle({ 
			fx: 'fade',
			timeout:0,
			speed:1000,
			// slideResize: true,
			// containerResize: true,
			// width: '100%',
			// height: '100%',
			startingSlide: slide,
			fit: 1,
			before:function(curr, next, opts){
			},			
			end:function(){
				}
		})


		var tl_esferas=new TimelineMax({
			paused:true,
			onComplete:function(){
			}
		})

		$('.secciones').css('visibility','visible')

		tl_esferas.add(
			[
				TweenMax.fromTo($('.esfera_l'),0.3,
					{
						right:'385px',
						ease:Linear.easeNone						
					},
					{
						right:'158px',
						ease:Linear.easeNone
					}
				),
				TweenMax.fromTo($('.esfera_r'),0.3,
					{
						right:'158px',
						ease:Linear.easeNone						
					},
					{
						right:'385px',
						ease:Linear.easeNone
					}
				)
			],null, "start", null
		)

		$('.btn_deseo_participar').on('mouseover',function(){
			tl_esferas.play()
		})
		$('.btn_deseo_participar').on('mouseout',function(){
			tl_esferas.reverse()
		})

		$('a.botones').each(function(){
			$(this).on('click', function(e){	
				e.preventDefault();
				
				$('.btn_participar').show()

				$('a.botones').removeClass('activo')
				$(this).addClass('activo')
				slide=parseInt($(this).attr('data-page'))

				if(slide==9 || slide==10)
				{
					$('.btn_participar').hide()
				}
				else
				{
					$('.btn_participar').show()	
				}

				$('.secciones').cycle(slide)
				pushHistory(slide)
			})

		})



		if(urlHash=='' || urlHash=='participar')
		{
			$('.btn_participar').hide()
		}
		else
		{
			$('.btn_participar').show()	
		}



		function pushHistory(n)
		{	
			if(msie)
			{
				switch(n)
				{
					case 0:
						location.hash='';
					break;
					case 1:
						location.hash='exploring-lima';
					break;
					case 2:
						location.hash='savoring-peruvian-food';
					break;
					case 3:
						location.hash='language';
					break;
					case 4:
						location.hash='culture';
					break;
					case 5:
						location.hash='sports';
					break;
					case 6:
						location.hash='karaoke';
					break;
					case 7:
						location.hash='partying-lima';
					break;
					case 8:
						location.hash='volunteering';
					break;
					case 9:
						location.hash='contact';
					break;
					case 10:
						location.hash='participate';
					break;
				}
			}
			else
			{
				switch(n)
				{
					case 0:
						history.pushState(null, null, urlLimpia+'');
					break;
					case 1:
						history.pushState(null, null, urlLimpia+'#exploring-lima');
					break;
					case 2:
						history.pushState(null, null, urlLimpia+'#savoring-peruvian-food');
					break;
					case 3:
						history.pushState(null, null, urlLimpia+'#language');
					break;
					case 4:
						history.pushState(null, null, urlLimpia+'#culture');
					break;
					case 5:
						history.pushState(null, null, urlLimpia+'#sports');
					break;
					case 6:
						history.pushState(null, null, urlLimpia+'#karaoke');
					break;
					case 7:
						history.pushState(null, null, urlLimpia+'#partying-lima');
					break;
					case 8:
						history.pushState(null, null, urlLimpia+'#volunteering');
					break;
					case 9:
						history.pushState(null, null, urlLimpia+'#contact');
					break;
					case 10:
						history.pushState(null, null, urlLimpia+'#participate');
					break;

				}				
			}

		}//pushHistory




});// end jquery







