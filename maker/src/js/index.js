checkSupportWebp();

function popupListener() {
	document.querySelector( "body" ).classList.toggle( "no-scroll" );
	document.querySelector( ".popup-video" ).classList.toggle( "popup-video_actived" );

	let src = document.querySelector( ".popup-video__iframe" ).getAttribute( "src" );
	if (!document.querySelector( ".popup-video" ).classList.contains( "popup-video_actived" )) {
		document.querySelector( ".popup-video__iframe" ).setAttribute( "src", src );
	}
}

document.querySelector( ".popup-video__button" ).addEventListener( "click", function() {
	popupListener();
});

document.querySelector( ".popup-video__close-button" ).addEventListener( "click", function() {
	popupListener();
});