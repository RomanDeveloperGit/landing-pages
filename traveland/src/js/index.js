isWebp();

const swiper = new Swiper( ".offer-swiper", {
	slidesPerView: 1,
	allowTouchMove: true,

	pagination: {
		el: '.offer-swiper__pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.offer-swiper__button-next',
		prevEl: '.offer-swiper__button-prev',
	},

	breakpoints: {
		869: {
			slidesPerView: 3,
			allowTouchMove: false,
		},
		601: {
			slidesPerView: 2,
			allowTouchMove: false,
		}
	}
});

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