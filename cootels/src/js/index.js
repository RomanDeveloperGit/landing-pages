isWebp();

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