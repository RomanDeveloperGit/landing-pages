$( document ).ready( function() {
	isWebp();

	$( ".header__menu-toggler_on, .header-menu__button-close" ).on( "click", function() {
		$( ".header-menu" ).toggleClass( "header-menu_actived" );
	});

	$( ".slowScroll" ).click( function() {
		let href = $( this ).attr( "href" );
		if ($( href ).length) $( "html, body" ).animate( { scrollTop: $( href ).offset().top }, 500 );
	});
});