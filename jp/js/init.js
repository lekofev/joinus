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
		case 'リマを探索しよう':
			slide=1;
			$('a.explorando').addClass('activo')
		break;
		case 'ペルー料理の味わい':
			slide=2;
			$('a.degustando').addClass('activo')
		break;
		case '言語交換':
			slide=3;
			$('a.idiomas').addClass('activo')
		break;
		case '文化と博物館':
			slide=4;
			$('a.cultura').addClass('activo')
		break;
		case 'スポッツ':
			slide=5;
			$('a.deporte').addClass('activo')
		break;
		case 'カラオケ':
			slide=6;
			$('a.karaoke').addClass('activo')
		break;
		case 'リマでパーティーしよう':
			slide=7;
			$('a.partying').addClass('activo')
		break;
		case 'ボランティア活動':
			slide=8;
			$('a.voluntariado').addClass('activo')
		break;
		case '問い合わせ':
			slide=9;
			$('a.contacto').addClass('activo')
		break;
		case 'participar':
			slide=10;
		break;
		default:
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



		if(urlHash=='' || urlHash=='問い合わせ')
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
						location.hash='リマを探索しよう';
					break;
					case 2:
						location.hash='ペルー料理の味わい';
					break;
					case 3:
						location.hash='言語交換';
					break;
					case 4:
						location.hash='文化と博物館';
					break;
					case 5:
						location.hash='スポッツ';
					break;
					case 6:
						location.hash='カラオケ';
					break;
					case 7:
						location.hash='リマでパーティーしよう';
					break;
					case 8:
						location.hash='ボランティア活動';
					break;
					case 9:
						location.hash='問い合わせ';
					break;
					case 10:
						location.hash='participar';
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
						history.pushState(null, null, urlLimpia+'#リマを探索しよう');
					break;
					case 2:
						history.pushState(null, null, urlLimpia+'#ペルー料理の味わい');
					break;
					case 3:
						history.pushState(null, null, urlLimpia+'#言語交換');
					break;
					case 4:
						history.pushState(null, null, urlLimpia+'#文化と博物館');
					break;
					case 5:
						history.pushState(null, null, urlLimpia+'#スポッツ');
					break;
					case 6:
						history.pushState(null, null, urlLimpia+'#カラオケ');
					break;
					case 7:
						history.pushState(null, null, urlLimpia+'#リマでパーティーしよう');
					break;
					case 8:
						history.pushState(null, null, urlLimpia+'#ボランティア活動');
					break;
					case 9:
						history.pushState(null, null, urlLimpia+'#問い合わせ');
					break;
					case 10:
						history.pushState(null, null, urlLimpia+'#participar');
					break;

				}				
			}

		}//pushHistory




});// end jquery







