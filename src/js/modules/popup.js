const body = document.body;
const popupLink = document.querySelectorAll( '[data-popup-link]' );
const popup = document.querySelectorAll( '[data-popup]' );
const popupExit = document.querySelectorAll( '[data-popup-exit]' );
const popupShadow = document.querySelectorAll( '[data-popup-shadow]' );

const time = 600;
// const padding = window.innerWidth - body.clientWidth;

console.log(popup)
if( popupLink.length > 0 ) {
	for( let i = 0; i < popupLink.length; i++ ) {
		popupLink[i].addEventListener( 'click', function(e) {
			const clickEl = e.currentTarget;
			const indexEl = e.currentTarget.dataset.popupLink
			if( document.querySelectorAll( '.open-popup' ).length == 0 ) {
				openPopup( clickEl );
				openShadow(indexEl)
				e.preventDefault();
			} else {
				for( let i = 0; i < document.querySelectorAll( '.open-popup' ).length; i++ ) {
					exitPopup( document.querySelectorAll( '.open-popup' )[i] );
				}
				setTimeout(() => { openPopup( clickEl ) }, time);
				e.preventDefault();
			}
		})
	}
}

if( popupExit.length > 0 ) {
	for( let i = 0; i < popupExit.length; i++ ) {
		popupExit[i].addEventListener( 'click', function(e) {
			const clickEl = e.currentTarget;
			exitPopup( clickEl );
			exitShadow();
			e.preventDefault();
		});
	}
}

if( popupShadow.length > 0 ) {
	for( let i = 0; i < popupShadow.length; i++ ) {
		popupShadow[i].addEventListener( 'click', function(e) {
			exitPopups();
			exitShadow();
			e.preventDefault();
		});
	}
}

function openShadow( index ) {
	if(popupShadow.length) {
		popupShadow.forEach(element => {
			if(parseInt(element.dataset.popupShadow) == parseInt(index)) {
				element.classList.add("active")
			}
		})
	}
}

function openPopup( el ) {
	el.classList.add( 'active-link' );
	// body.style.overflow = 'hidden';
	// body.style.paddingRight = `${padding}px`;
	for( let y = 0; y < popup.length; y++ ) {
		if( popup.length > 0 ) {
			if( popup[y].dataset.popup == el.dataset.popupLink ) {
				popup[y].classList.add( 'open-popup' );
			}
		}
	}
}

function exitPopup( el ) {
	el.closest( '[data-popup]' ).classList.remove( 'open-popup' );
	// body.style.overflow = '';
	// body.style.paddingRight = '';
	for( let y = 0; y < popupLink.length; y++ ) {
		if( popupLink[y].dataset.popupLink == el.closest( '[data-popup]' ).dataset.popup ) {
			popupLink[y].classList.remove( 'active-link' );
		}
	}
}

function exitPopups() {
	if(popupLink.length && popup.length) {
		popupLink.forEach(element => {
			element.classList.remove("active-link")
		})

		popup.forEach(element => {
			element.classList.remove("open-popup")
		})
	}
}

function exitShadow() {
	if(popupShadow.length) {
		popupShadow.forEach(element => {
			element.classList.remove("active")
		})
	}
}