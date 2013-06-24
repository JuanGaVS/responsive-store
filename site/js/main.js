// JavaScript Document
var paginaActual = "#content-home";
var motos = 
    [
        {
            id : "01",
	    model : "Softail Fat Boy FLSTF",
	    description: "La Harley-Davidson Softail Fat Boy FLSTF de 2013 es una de las motocicletas de crucero por excelencia. Recordando los Chopper de hard tail de las décadas de los 60 y 70, después de casi cuarenta años, la motocicleta Harley-Davidson Fat Boy mantiene vivo ese legado. La FLSTF Fat Boy es la motocicleta “Fat Custom” original; relajada y lujosa con un perfil inconfundible en el camino. La Harley Fat Boy tiene un motor Twin Cam 103 Harley enfriado por aire con transmisión Cruise Drive de 6 velocidades, que proporciona mayor potencia al pasar, subir cuestas y para llevar pasajeros y equipaje Toma asiento en esta Harley o disfruta la experiencia de una de las motocicletas de crucero H-D de 2013. Además de esta motocicleta para crucero, conoce las otras motocicletas Harley Softail. También debes ver la Heritage Softail Classic, esta clásica motocicleta está lista para salir al camino. Si te gustan las Choppers, asegúrate de ver el modelo Fat Boy Special, otra de las motocicletas Custom Harley.",
	    image_url: "images/01.png",
	    price: "$17,729",
	    vendor: "Harley-Davidson"
        },
        {
            id : "02",
	    model : "Softail Slim FLS",
	    description: "La Softail Slim FLS de 2013 mezcla el rudo estilo Bobber minimalista de la década de los 40 con el minimalismo antiguo actualizado. El modelo Slim ofrece toneladas de actitud sin adornos, características gruesas que incluyen las ruedas con aros negros, la cubierta negra redonda del depurador de aire, los manillares estilo Hollywood y las horquillas delanteras gruesas cromadas, así como acabados minimalistas y rudos en toda la motocicleta. Su guardabarros trasero corto y el perfil trasero angosto añaden a la apariencia larga y esbelta del modelo Softail Slim un estilo Chopper. El motor Twin Cam de 103 cm³ proporciona al modelo Slim FLS la potencia que necesitas para conquistar las colinas o pasar y dejar atrás el tráfico. Las características y los acabados negros y rudos del modelo Softail FLS proporcionan una actitud sin complicaciones que recuerda los modelos Bobber clásicos de 1940: El motor, los aros, la cubierta del depurador de aire, el faro delantero y todo lo demás tienen acabados negros. La H-D Slim se desplaza con una admirable maniobrabilidad a velocidades bajas y altas y su diseño liviano hace que sea rápido y fácil colocarla en y levantarla del soporte de estacionamiento. El modelo Harley Slim es una excelente compra con su estilo muscular, minimalista y rendimiento potente empacados en una motocicleta a precio asequible. Y si esta motocicleta no es lo que buscas, mira las otras motocicletas Custom Harley-Davidson, como la Softail Blackline FXS, la Sportster Forty-Eight XL1200X, la Dyna Fat Bob FXDF o la nueva Sportster Seventy-Two XL1200V. Harley-Davidson es el fabricante líder de motocicletas estilo Fat Custom, Dark Custom y Bobber y seguramente encontrarás una que sea perfecta para ti.",
	    image_url: "images/02.png",
	    price: "$16,099",
	    vendor: "Harley-Davidson"
        },
	{
            id : "03",
	    model : "Sportster Iron 833 XL883N",
	    description: "La Harley-Davidson Sportster Iron 833 XL883N de 2013 es una increíble forma de comenzar a conducir una motocicleta personalizada. Desde el auténtico motor Harley de 883 cm³ hasta los guardabarros cortados y el tanque de combustible estilo “Peanut”, cada pieza de la Sportster Iron 883 Harley tiene el estilo que deseas en tus motocicletas personalizadas. Para lograr una combinación de estilo y valor, mira la H-D Iron 883. También conoce las otras motocicletas Harley Sportster Custom, como la motocicleta 1200 Low Custom y la Nightster que tiene la apariencia de una motocicleta añeja. Todas las demás motocicletas Sportster tienen su propia personalidad. Conoce más sobre cada motocicleta y su estilo distintivo. Las motocicletas Harley de 2013 tienen todo lo que buscas en las motocicletas Custom.",
	    image_url: "images/03.png",
	    price: "$7,999",
	    vendor: "Harley-Davidson"
        },
	{
            id : "04",
	    model : "Sportster 1200 Custom XL1200C",
	    description: "La Harley-Davidson Sportster 1200 Custom XL1200C de 2013 es una verdadera motocicleta Harley Sportster Custom, solamente un poco más gruesa y más Custom que las demás Sportster. El neumático grueso delantero envuelto alrededor de una rueda de 16 pulg. le proporciona una atractiva apariencia Custom y le ofrece una ágil maniobrabilidad. Los componentes de estilo, incluyendo la nueva iluminación trasera, las ruedas fundidas de cromo de 5 rayos y un manillar tirado hacia atrás de estilo antiguo, proporcionan a la motocicleta Sportster 1200 Custom el estilo único de H-D con las funciones de una motocicleta moderna. Un asiento para dos personas te proporciona el suficiente espacio para llevar un pasajero en tu viaje. En 2013, el modelo Sportster 1200 Custom tiene una disponibilidad extremadamente limitada, la Edición especial seriada del 110º Aniversario tiene elementos estilísticos y características Premium conmemorativos del Aniversario que lo hacen uno de nuestros mejores modelos y una verdadera obra de arte viva con acabados finamente forjados que se envejecen y transforman de una manera única en cada vehículo. Al igual que todas las motos H-D, la Harley Sportster 1200 Custom viene lista para modificarla y agregarle accesorios para que se adapte a tu cuerpo y estilo personal; con la personalización de fábrica H-D1™ opcional, puedes diseñar tu 1200 Custom perfecta, personalizada y pedir que se fabrique según tus especificaciones directamente de la fábrica. El motor Evolution 1200 cm³ con recubrimiento de polvo negro está montado sobre caucho y es enfriado por aire, con culatas y cilindros de aluminio para que la carga sea más liviana, también tiene inyección electrónica de combustible. Observa el modelo Sportster XL883L de 2013 y todas las demás motocicletas H-D Sportster Custom incluyendo la Iron 883.",
	    image_url: "images/04.png",
	    price: "$11,034",
	    vendor: "Harley-Davidson"
        },
	{
            id : "05",
	    model : "Dyna Street Bob FXDB",
	    description: "La Harley-Davidson Dyna Street Bob FXDB de 2013 es una motocicleta Bobber clásica. También en 2013, la Dyna Street Bob FXDB viene con el acabado opcional Hard Candy Custom, un acabado de pintura con hojuelas grandes de metal que recuerda el estilo icónico de las motos Custom de la década de los 70 y ofrece un color brillante visible a través de un acabado rico y profundo. Si estás buscando motocicletas Bobber, te gustará el asiento individual súper bajo estilo “Slammed” de la Street Bob. Este asiento no sólo proporciona una característica al estilo de la motocicleta, sino que también te brinda comodidad. La apariencia Bobber también se encuentra en el manillar estilo mini “Ape Hanger” de acero inoxidable estilo postguerra. Agrega eso al guardabarros Dyna sin adornos, junto con una buena parte del metal despojado de la motocicleta, y tendrás una imagen Bobber clásica de la motocicleta. La luz trasera estilo salchicha de la década de los 40 se suma al estilo de la motocicleta Bobber clásica. La apariencia clásica continúa con las ruedas negras Harley de rayos de acero de 19 pulg. de la Harley Street Bob FXDB. Y los aros con acabados negros hacen juego con el estilo negro del motor Twin Cam 96. Conoce más acerca de nuestras otras motocicletas, incluyendo: La Super Glide Custom Harley-Davidson, la motocicleta Wide Glide Chopper y la Fat Bob Dark Custom que da la sensación de una motocicleta grande. También ve las motocicletas Harley Touring y las motocicletas Harley CVO.",
	    image_url: "images/05.png",
	    price: "$13,729",
	    vendor: "Harley-Davidson"
        },
	{
            id : "06",
	    model : "Night Rod Special VRSCDX",
	    description: "La Harley-Davidson Night Rod Special VRSCDX de 2013 es una imponente motocicleta de alto rendimiento. Esta poderosa motocicleta de crucero tiene un manillar de baja elevación estilo Drag, diseñado ergonómicamente, que coloca al motociclista en una posición agresiva pero cómoda. El escape H-D Night Rod Special tiene silenciadores Harley dobles con tapas del extremo negras. Las pantallas del escape también se encuentran en el escape de la Harley VRSCDX. Este sistema de silenciadores para motocicleta demuestra que un escape de rendimiento también puede ser un hermoso juego de tubos. Además del hermoso escape Harley, la H-D Night Rod Special VRSCDX tiene un neumático trasero ultra ancho; exactamente lo que tú deseas en la parte trasera de una poderosa motocicleta de crucero. Observa las fotografías de esta potente motocicleta de crucero y descubre por qué se distingue del resto. También debes ver las demás motocicletas de potencia V-Rod y conocer más sobre las otras Harley, como la Softail Fat Boy Special, una de las otras motocicletas Harley Custom.",
	    image_url: "images/06.png",
	    price: "$13,729",
	    vendor: "Harley-Davidson"
        },
	{
            id : "07",
	    model : "Dyna Wide Glide FXDWG",
	    description: "La Harley-Davidson Dyna Wide Glide FXDWG de 2013 tiene un estilo clásico de la motocicleta Chopper. La Harley Dyna Wide Glide tiene un potente motor Twin Cam 103 Harley enfriado por aire con transmisión Cruise Drive de 6 velocidades que proporciona mayor potencia de rendimiento para pasar, subir cuestas y llevar pasajeros y carga.La parte delantera es una horquilla larga e inclinada con una rueda de 21 pulg., que proporciona a este modelo el estilo de la motocicleta Chopper clásica. Y en la parte trasera, la Harley Wide Glide tiene una placa de matrícula de montaje lateral que añade al estilo de la motocicleta Chopper Custom. ¿Deseas tener aún más estilo Custom de fábrica en tus motocicletas Chopper? Esta motocicleta también presenta un diseño de llama clásica opcional en el tanque de combustible. Selecciona las llamas de la motocicleta Harley-Davidson Wide Glide Chopper para tener una apariencia Custom de fábrica a un precio Harley asequible. Conoce más sobre la Harley Wide Glide y otras motocicletas para crucero, como la Super Glide Custom Harley-Davidson y la Fat Bob que brinda la sensación de una motocicleta grande. Para apreciar una clásica motocicleta Bobber observa la Street Bob. Mira todas las motocicletas Dyna y encuentra la motocicleta correcta para ti.",
	    image_url: "images/07.png",
	    price: "$14,999",
	    vendor: "Harley-Davidson"
        },
	{
            id : "08",
	    model : "Sportster SuperLow XL883L",
	    description: "La Harley-Davidson Sportster SuperLow XL883L de 2013 tiene todas las características de la motocicleta que deseas para fácil maniobrabilidad. Esta motocicleta fácil de conducir, ofrecida a un precio asequible, invita a conducirla. La SuperLow Harley presenta las siguientes características: Tanque Sportster, suspensión trasera de largo recorrido, altura baja del asiento y cabina cómoda para el motociclista. Y todos los tanques SuperLow Sportster tienen un acabado a mano y un auténtico estilo personalizado Harley-Davidson. Tómate el tiempo para conocer todas las características de estilo y manejo de la H-D SuperLow XL883L que la convierten en una auténtica Harley y que la diferencian de la experiencia de conducción de otras Sportster. Tómate un poco de tiempo conociendo las otras Sportster, incluyendo la Forty-Eight Dark Custom. La 1200 Low es otra de las motocicletas Custom y tiene características únicas. ¡Encuentra la Harley Sportster correcta para ti!",
	    image_url: "images/08.png",
	    price: "$8,624",
	    vendor: "Harley-Davidson"
        },
        {
            id : "09",
	    model : "Dyna Super Glide Custom FXDC",
	    description: "La Harley-Davidson Dyna Super Glide Custom FXDC de 2013 es una motocicleta con la potencia que necesitas y todo el cromo Harley que deseas. La motocicleta Super Glide Custom se mantiene fiel a su nombre con características únicas del estilo Custom de punta a punta. En 2013, el modelo Dyna FXDC tiene una disponibilidad extremadamente limitada, la Edición especial seriada del 110º Aniversario tiene elementos estilísticos y características Premium conmemorativos del Aniversario que lo hacen uno de nuestros mejores modelos y una verdadera obra de arte viva con acabados finamente forjados que se envejecen y transforman de una manera única en cada vehículo. Los indicadores montados en el tanque envueltos en cromo, el panel del tanque de combustible de cuero auténtico, la cubierta única de la caja de la batería, el manillar tirado hacia atrás de acero inoxidable sólido y el medallón del tanque de combustible que destila la icónica actitud H-D, juntos hacen que esta motocicleta sea única. El motor Twin Cam negro y cromado brinda potencia a esta motocicleta Dyna Harley. Para lograr una apariencia Custom, el motor tiene cubiertas cromadas de los balancines, aletas resaltadas en los cilindros y culatas de los cilindros revestidas. Con mucho cromo Harley, y un excelente precio, ésta es tu Harley Custom. Si estás interesado en las motocicletas Chopper también debes conocer la motocicleta Dyna Wide Glide Chopper. O si estás interesado en una motocicleta Bobber, la Dyna Street Bob tiene la apariencia clásica de la motocicleta estilo Bobber. Otra opción de motocicleta Big Twin Dark Custom es la Fat Bob. Está llena de la potencia del motor grande V-Twin y te proporciona la sensación de una motocicleta grande.",
	    image_url: "images/09.png",
	    price: "$13,929",
	    vendor: "Harley-Davidson"
	}
    ];

 function lee_json() {
	 console.log('lee');
            
				console.log('get');
				//$('#content-home').append('<div id="paging_products"></div>');
                for(var id=0; id<motos.length; id++) {
					console.log('foreach');
					$('#products').append(
					'<li class="product" >'+
'        	<h2 class="product-detail-home" >'+
            motos[id].model+
'            </h2>'+
'            <div class="image-background" >'+
'            	<div align="center" >'+
'                	<img src="'+motos[id].image_url+'" />'+
'                </div>'+
'            </div>'+
'            <div class="product-info" >'+
'            	<div class="price" >'+
'                	<span class="product-detail-name-home" >'+
						'Price: '+
'                    </span>'+
'                    <span class="product-detail-home" >'+
                    	motos[id].price+ 
'                    </span>'+
'                </div>'+
'                <div class="cod" >'+
'                	<span class="product-detail-name-home">'+
                    	'COD'+
'                    </span>'+
'                    <span class="product-detail-home" >'+
                    	motos[id].id+
 '                   </span>'+
'                </div>'+
'            </div>'+
'        </li>');
        if(id % 2 == 0 && id<motos.length-1){
			$('#products').append('        <li class="separator" >'+
'        </li>'
					);
		}

					   
                }
				
				//$('#paging_products').append('<div id="pager" class="page_navigation"></div>');
				
				$('#paging_products').pajinate({
					items_per_page : 3
				});
				
				
		
 }
		
		$(document).ready(function(){
			
			function hideAll(){
				$('#content-show_product').hide();
				$('#content-about_us').hide();
				$('#content-contact_us').hide();
				$('#content-home').hide();
			}
				hideAll();
				$('#content-home').show();
				
				$('#link-about').on('click', function( ) {
				//$('#link-about').hammer().on('tap', function(ev){
					hideAll();
					$( paginaActual ).fadeOut( "slow" );
					$('#content-about_us').fadeIn( "slow" );
					/*$('#content-about_us').transition({
  						perspective: '100px',
  						rotateY: '360deg'
					});*/
					paginaActual = "#content-about_us"; 			
				});
				
				$('#link-contact').on('click', function( ) {
				//$('#link-contact').hammer().on('tap', function(ev){
					hideAll();
					$( paginaActual ).fadeOut( "slow" );
					$('#content-contact_us').fadeIn( "slow" );
					/*$('#content-contact-us')
  						.transition({ x: -40 })
  						.transition({ y: 40 })
  						.transition({ x: 0 })
  						.transition({ y: 0 });*/
					paginaActual = "#content-contact_us"; 
				});
				
				$('#link-home').on('click', function( ) {
				//$('#link-home').hammer().on('tap', function(ev){
					hideAll();
					$( paginaActual ).fadeOut( "slow" );
					$('#content-home').fadeIn( "slow" );
					paginaActual = "#content-home"; 
					/*$('#content-home').transition({
  						perspective: '100px',
  						rotateY: '360deg'
					});*/
				});
				
				lee_json();
				
				
		});     
	
		
		