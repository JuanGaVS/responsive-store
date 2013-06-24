// JavaScript Document
 function lee_json() {
	 console.log('lee');
            $.getJSON("json/motocicletas.json", function(datos) {
				console.log('get');
				//$('#content-home').append('<div id="paging_products"></div>');
                $.each(datos["motos"], function(idx,id) {
					
					$('#products').append(
					'<li class="product" >'+
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
'        </li>'+
        
'        <li class="separator" >'+
'        </li>'
					);
					   
                });
				
				//$('#paging_products').append('<div id="pager" class="page_navigation"></div>');
				
				$('#paging_products').pajinate({
					items_per_page : 4
				});
				
				
			 
        }
		);
 }
		
lee_json();
		
		