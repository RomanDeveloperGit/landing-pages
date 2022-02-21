checkSupportWebp();

function setStatusMenu() {
	document.querySelector( ".menu-burger" ).classList.toggle( "menu-burger_actived" );
	document.querySelector( ".menu" ).classList.toggle( "menu_actived" );

	document.querySelector( "body" ).classList.toggle( "no-scroll" );
}

document.querySelector( ".menu-burger" ).onclick = function() {
	setStatusMenu();
};

document.querySelectorAll( ".menu__link" ).forEach( element => {
	element.addEventListener( "click", function() {
		if (getComputedStyle( document.querySelector( ".menu-burger" ) ).display != "none") setStatusMenu();
	});
});

document.querySelectorAll( ".slowScroll" ).forEach( element => {
	element.addEventListener( "click", function( event ) {
		event.preventDefault();
		
        let href = this.getAttribute( "href" ).substring( 1 );
        let scrollTarget = document.getElementById( href );
        let elementPosition = scrollTarget.getBoundingClientRect().top;

        window.scrollBy({
            top: elementPosition,
            behavior: 'smooth'
        });
	});
});

function popupListener() {
	document.querySelector( "body" ).classList.toggle( "no-scroll" );
	document.querySelector( ".popup-video" ).classList.toggle( "popup-video_actived" );

	let src = document.querySelector( ".popup-video__iframe" ).getAttribute( "src" );
	if (!document.querySelector( ".popup-video" ).classList.contains( "popup-video_actived" )) {
		document.querySelector( ".popup-video__iframe" ).setAttribute( "src", src );
	}
}

document.querySelector( ".popup-video__button" ).onclick = function() {
	popupListener();
};

document.querySelector( ".popup-video__close-button" ).onclick = function() {
	popupListener();
};