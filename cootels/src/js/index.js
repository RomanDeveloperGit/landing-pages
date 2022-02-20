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
        let elementPosition = scrollTarget.getBoundingClientRect().top - 35;

        window.scrollBy({
            top: elementPosition,
            behavior: 'smooth'
        });
	});
});

document.querySelectorAll( ".accordion-item" ).forEach( itemElement => {
	itemElement.addEventListener( "click", () => {
		document.querySelectorAll( ".accordion-item" ).forEach( _itemElement => {
			_itemElement.classList.remove( "accordion-item_actived" );
		});

		itemElement.classList.add( "accordion-item_actived" );
	});
});

const swiper = new Swiper( ".swiper", {
	slidesPerView: 1,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	}
});