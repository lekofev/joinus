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
			seleccionarActividad(slide)
		break;
		case 'ペルー料理の味わい':
			slide=2;
			$('a.degustando').addClass('activo')
			seleccionarActividad(slide)
		break;
		case '言語交換':
			slide=3;
			$('a.idiomas').addClass('activo')
			seleccionarActividad(slide)
		break;
		case '文化と博物館':
			slide=4;
			$('a.cultura').addClass('activo')
			seleccionarActividad(slide)
		break;
		case 'スポッツ':
			slide=5;
			$('a.deporte').addClass('activo')
			seleccionarActividad(slide)
		break;
		case 'カラオケ':
			slide=6;
			$('a.karaoke').addClass('activo')
			seleccionarActividad(slide)
		break;
		case 'リマでパーティーしよう':
			slide=7;
			$('a.partying').addClass('activo')
			seleccionarActividad(slide)
		break;
		case 'ボランティア活動':
			slide=8;
			$('a.voluntariado').addClass('activo')
			seleccionarActividad(slide)
		break;
		case '問い合わせ':
			slide=9;
			$('a.contacto').addClass('activo')
			seleccionarActividad(slide)
		break;
		case 'joinus':
			slide=10;
		break;
		default:
		break;
	}



			  

	$('.secciones_cycle').cycle({ 
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

		$('.secciones_cycle').css('visibility','visible')

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

				slide=parseInt($(this).attr('data-page'))

				if(slide!=10)
				{
					$('a.botones').removeClass('activo')
					$(this).addClass('activo')
				}

				if(slide==9 || slide==10)
				{
					$('.btn_participar').hide()
				}
				else
				{
					$('.btn_participar').show()	
				}

				$('.secciones_cycle').cycle(slide)
				pushHistory(slide)
				seleccionarActividad(slide)
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

		function seleccionarActividad(n)
		{
				switch(n)
				{
					case 0:
					break;
					case 1:
						$('#actividad').attr('value','Explorar lima')
					break;
					case 2:
						$('#actividad').attr('value','Degustar')
					break;
					case 3:
						$('#actividad').attr('value','Idiomas')
					break;
					case 4:
						$('#actividad').attr('value','Cultura')
					break;
					case 5:
						$('#actividad').attr('value','Deporte')
					break;
					case 6:
						$('#actividad').attr('value','Karaoke')
					break;
					case 7:
						$('#actividad').attr('value','Fiesta en lima')
					break;
					case 8:
						$('#actividad').attr('value','Voluntariado')
					break;
					case 9:
						$('#actividad').attr('value','-----')
					break;
					case 10:
					break;
				}
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
						location.hash='joinus';
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
						history.pushState(null, null, urlLimpia+'#joinus');
					break;

				}				
			}

		}//pushHistory



	$(".btn_enviar").click(function(){
			if($(".form").valid() == true){
				$.post("../form.php", $(".form").serialize(), function(data){
				// console.log(data)				
					if(lt_ie9)
					{
						$('.msj_enviado').show()				
					}
					else
					{
						$('.msj_enviado').fadeIn()
					}
				});// end $.post 
			}else{
				return false;			
			} // end $("#formulario-registro").valid 	
	});	//end #btn-continuar.click
		
		
		
	

	var solotexto='\'\\@+-*/°!"#$%&/()=?¡¨*[];:_^`~¬\\,.-{}+1234567890¡¢£¤¥¦§¨©ª«¬®¯°±²³µ¶·¸¹º»¼½¾¿ÀÂÃÄÅÆÇÈÊËÌÎÏÐÒÔÕÖ×ØÙÛÜÝÞßàâãäåæçèêëìîïðòôõö÷øùûüýþÿŒœŠšŸƒ–—‘’‚“”„†‡•…‰€™´¨¨';
	var solonumero=' \'\\@ñÑ+-*/°!"#$%&/()=?¡¨*[];:_^`~¬\\,.-{}´+abcdefghijklmnopqrstuvwxyz¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿŒœŠšŸƒ–—‘’‚“”„†‡•…‰€™¿¡';
	var soloemail='\'\\¿¡ñÑ+*/°!"#$%&/()=?¡¨*[];:^`~¬\\,{}´+¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿŒœŠšŸƒ‘’‚“”„†‡•…‰€™';
	
	
	$("#nombre, #apellidoPaterno, #apellidoMaterno").alpha({allow:" "},{ichars:solotexto});
	$("#telefono").numeric({ichars:'ñÑ+-*/°!"#$%&/()=?¡¨*[];:_^`~¬\\,.-{}´+¨ç¿ ¡'});
	$("#email").alphanumeric({ichars:soloemail},{allow:'@_--.'});


		
            jQuery.validator.addMethod("nombre_valido", function(value, element) {
				if(
					value == " " || 
					value == "Nombre" || 
					value == "Nombres" || 
					value == "Apellido Paterno" || 
					value == "Apellido Materno" || 
					value == "Apellido Materno" ||
					value == "Dirección" ||
					value == "Dni" ||  
					value == "Nombre" || 
					value == "Provincia" || 
					value == "Distrito" || 
					value == "Departamento" || 
					value == "Día" || 
					value == "Mes" || 
					value == "Año" ||
					value == "A&ntilde;o" || 
					value == "Operador" || 
					value == "Modelo" || 
					value == "Tipo de documento" ||
					value == "000000000" ||
					value == "00000000" ||
					value == "0000000" ||
					value == "Correo Electrónico" ||
					value == "Número de Contacto" ||
					value == "Número Celular" ||
					value == "DNI" ||
					value == "Sexo"	||
					value == "sexo"	||
					value == "Fecha de Nacimiento" ||
					value == "Operador Telefónico"	||
					value == "Especificar Modelo"
				)
				{
					return false;
				}else{
					return true;
				}
			}, "");





	$(".form").validate({
				rules:{
					fecha_principal: {
						required: true,		
					},
					nombre: {
						required: true,
						rangelength: [2,40],
						nombre_valido:true			
					},
					email: {
						required: true,
						email: true,
						rangelength: [2,200]
					},
					telefono: {
						required: true,
						digits: true,
						rangelength: [7,9]
					}
		
				},//End rules 
				messages: {
					fecha_principal:'参加可能な日を教えてください',	
					nombre:'お名前を記入して下さい',
					email: 'メールアドレスを記入して下さい',
					telefono:'連絡番号を入力してください'
    			}
			});	// End Validate


	    
	    $( "#fecha_principal, #fecha_alternativa, #fecha_alternativa2" ).datepicker({
			showOn: "button",
			buttonImage: "images/calendar.gif",
			buttonImageOnly: true,
			dayNamesMin: [ "日", "月", "火", "水", "木", "金", "土" ],
			monthNames:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
	    });


});// end jquery







