$('.home').on('click', function( ) {
	$('#content-categories').hide( );
	$('#content-about').hide( );
	$('#content-contact-us').hide( );
	$('#content-home').show( );
	$('#content-home').transition({
  		perspective: '100px',
  		rotate3d: '1,1,0,360deg'
	});
});

$('.categories').on('click', function( ) {
	$('#content-home').hide( );
	$('#content-about').hide( );
	$('#content-contact-us').hide( );
	$('#content-categories').show( );
	$('#content-categories').transition({
  		perspective: '100px',
  		rotateX: '360deg'
	});
});

$('.about').on('click', function( ) {
    $('#content-home').hide( );
	$('#content-categories').hide( );
	$('#content-contact-us').hide( );
	$('#content-about').show( );
	$('#content-about').transition({
  		perspective: '100px',
  		rotateY: '360deg'
	});
});

$('.contact-us').on('click', function( ) {
    $('#content-home').hide( );
	$('#content-categories').hide( );
	$('#content-about').hide( );
	$('#content-contact-us').show( );
	$('#content-contact-us')
  		.transition({ x: -40 })
  		.transition({ y: 40 })
  		.transition({ x: 0 })
  		.transition({ y: 0 });
});
