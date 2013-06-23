// JavaScript Document
 function lee_json() {
	 console.log('lee');
            $.getJSON("json/motocicletas.json", function(datos) {
				console.log('get');
                $.each(datos["motos"], function(idx,id) {
					
					$('#paging_products').append(
					'<div class="product" >'+
'        	<h2 class="product-detail-home" >'+
            id.model+
'            </h2>'+
'            <div class="image-background" >'+
'            	<div align="center" >'+
'                	<img src="'+id.image_url+'" />'+
'                </div>'+
'            </div>'+
'            <div class="product-info" >'+
'            	<div class="price" >'+
'                	<span class="product-detail-name-home" >'+
						'Price: '+
'                    </span>'+
'                    <span class="product-detail-home" >'+
                    	id.price+ 
'                    </span>'+
'                </div>'+
'                <div class="cod" >'+
'                	<span class="product-detail-name-home">'+
                    	'COD'+
'                    </span>'+
'                    <span class="product-detail-home" >'+
                    	id.id+
 '                   </span>'+
'                </div>'+
'            </div>'+
'        <div class="separator" ></div>'+
'        </div>'
        

					);
					   
                });
				
				$('#paging_products').append('<div id="pager" class="page_navigation"></div>');
				
            });
        }
		
		
		lee_json();
		
		console.log("Antes");
		
		$('#paging_products').pajinate({
					num_page_links_to_display : 5,
					items_per_page : 2	
				});
				
		console.log("Despues");
		
		
		