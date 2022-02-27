$( document ).ready( function() {
	isWebp();

	$( "body" ).on( "click", ".menu-burger, .menu_actived .menu__link_clickable", function() {
		$( ".menu" ).toggleClass( "menu_actived" );
		$( ".menu-burger" ).toggleClass( "menu-burger_actived" );

		$( "body" ).toggleClass( "body_no-scroll-y" );
	});

	$( ".menu__item_drop-down" ).click( function() {
		$( ".menu__link-arrow" ).toggleClass( "menu__link-arrow_actived" );
		$( ".categories-menu" ).toggleClass( "categories-menu_actived" );
	});

	$( ".slowScroll" ).click( function() {
		let href = $( this ).attr( "href" );
		if ($( href ).length) $( "html, body" ).animate( { scrollTop: $( href ).offset().top }, 500 );
	});

	$( ".tools-item__left-button" ).click( function() {
		$( this ).toggleClass( "tools-item__left-button_actived" );
	});

	$( ".staff__slider-box" ).slick({
		dots: true,
		autoplay: true,
		swipe: false,

		prevArrow: '<button class="slick-prev" type="button"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 26L2 14L14 2" stroke="#ffffff" stroke-opacity="0.28" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		nextArrow: '<button class="slick-next" type="button"><svg width="16" height="28" viewBox="0 0 16 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 26L14 14L2 2" stroke="#ffffff" stroke-opacity="0.28" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
	
		responsive: [
			{
				breakpoint: 993,
				settings: {
					dots: true,
					autoplay: true,
					swipe: true,
				}
			},
			{
				breakpoint: 401,
				settings: {
					dots: false,
					arrows: true,
					autoplay: true,
					swipe: true,
					fade: true
				}
			},
		]
	});
});