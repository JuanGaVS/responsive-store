// JavaScript Document
 function lee_json() {
	 console.log('lee');
            $.getJSON("json/motocicletas.json", function(datos) {
				console.log('get');
                $.each(datos["motos"], function(idx,id,model) {
                    alert("Numero primo  1: " + idx);
					 alert("Numero primo  2: " + id);
					 alert("Numero primo  3: " + id.model);
					   
                });
            });
        }
		
		
		lee_json();