const body        = document.body;
const popupLink   = document.querySelectorAll( '.popup__link' );
const popup       = document.querySelectorAll( '.popup' );
const exitButton  = document.querySelectorAll( '.popup__exit' );
const popupShadow = document.querySelectorAll( '.popup__shadow' );

if( popupLink.length > 0 ) {
	for( let i = 0; i < popupLink.length; i++ ) {
		popupLink[i].addEventListener( 'click', function(e) {
			if( e.currentTarget == document.getElementById( 1 ) ) {
				if( document.querySelectorAll( '.active-link' ).length == 0 && document.querySelectorAll( '.open-popup' ).length ==0 ) {
					document.getElementById( 1 ).classList.add( 'active-link' );
					document.querySelector( '.sign-in' ).classList.add( 'open-popup' );
					e.preventDefault();
				} else {
					exitPopup( e );
					document.getElementById( 1 ).classList.add( 'active-link' );
					document.querySelector( '.sign-in' ).classList.add( 'open-popup' );
					e.preventDefault();
				}
			} else if( e.currentTarget == document.getElementById( 2 ) ) {
				if( document.querySelectorAll( '.active-link' ).length == 0 && document.querySelectorAll( '.open-popup' ).length == 0 ) {
					document.getElementById( 2 ).classList.add( 'active-link' );
					document.querySelector( '.register' ).classList.add( 'open-popup' );
					e.preventDefault();
				} else {
					exitPopup( e );
					document.getElementById( 2 ).classList.add( 'active-link' );
					document.querySelector( '.register' ).classList.add( 'open-popup' );
					e.preventDefault();
				}
			} else if( e.currentTarget == document.getElementById( 3 ) ) {
				if( document.querySelectorAll( '.active-link' ).length == 0 && document.querySelectorAll( '.open-popup' ).length == 0 ) {
					document.getElementById( 3 ).classList.add( 'active-link' );
					document.querySelector( '.register' ).classList.add( 'open-popup' );
					e.preventDefault();
				} else {
					exitPopup( e );
					document.getElementById( 3 ).classList.add( 'active-link' );
					document.querySelector( '.register' ).classList.add( 'open-popup' );
					e.preventDefault();
				}
			} else if( e.currentTarget == document.getElementById( 4 ) ) {
				if( document.querySelectorAll( '.active-link' ).length == 0 && document.querySelectorAll( '.open-popup' ).length == 0 ) {
					document.getElementById( 4 ).classList.add( 'active-link' );
					document.querySelector( '.sign-in' ).classList.add( 'open-popup' );
					e.preventDefault();
				} else {
					exitPopup( e );
					document.getElementById( 4 ).classList.add( 'active-link' );
					document.querySelector( '.sign-in' ).classList.add( 'open-popup' );
					e.preventDefault();
				}
			} else if( e.currentTarget == document.getElementById( 5 ) ) {
				if( document.querySelectorAll( '.active-link' ).length == 0 && document.querySelectorAll( '.open-popup' ).length ==0 ) {
					document.getElementById( 5 ).classList.add( 'active-link' );
					document.querySelector( '.sign-in' ).classList.add( 'open-popup' );
					e.preventDefault();
				} else {
					exitPopup( e );
					document.getElementById( 5 ).classList.add( 'active-link' );
					document.querySelector( '.sign-in' ).classList.add( 'open-popup' );
					e.preventDefault();
				}
			} else if( e.currentTarget == document.getElementById( 6 ) ) {
				if( document.querySelectorAll( '.active-link' ).length == 0 && document.querySelectorAll( '.open-popup' ).length == 0 ) {
					document.getElementById( 6 ).classList.add( 'active-link' );
					document.querySelector( '.register' ).classList.add( 'open-popup' );
					e.preventDefault();
				} else {
					exitPopup( e );
					document.getElementById( 6 ).classList.add( 'active-link' );
					document.querySelector( '.register' ).classList.add( 'open-popup' );
					e.preventDefault();
				}
			}
		})
	}
}

if( exitButton.length > 0 ) {
	for( let i = 0; i < exitButton.length; i++ ) {
		exitButton[i].addEventListener( 'click', exitPopup );
	}
}

if( popupShadow.length > 0 ) {
	for( let i = 0; i < popupShadow.length; i++ ) {
		popupShadow[i].addEventListener( 'click', exitPopup );
	}
}

function exitPopup( e ) {
	document.querySelector( '.active-link' ).classList.remove( 'active-link' );
	document.querySelector( '.open-popup' ).classList.remove( 'open-popup' );
}

console.log( popupLink );

const formPasswordIcon = document.querySelectorAll( '.form-password__icon' );
const passwordInputs   = document.querySelectorAll( '.form-password__input' );
const formSvg          = document.querySelectorAll( '.form-password__svg' );
const inputs           = document.querySelectorAll( 'input' );

if( formPasswordIcon.length > 0 ) {
	for( let i = 0; i < formPasswordIcon.length; i++ ) {
		formPasswordIcon[i].addEventListener( 'click', function(e) {
			if( e.currentTarget == document.getElementById( 'form-input_1' ) ) {
				formPasswordIcon[i].classList.toggle( 'activeForm' );
				formSvg[i].classList.toggle( 'activeSvg' );
				if( formSvg[i].classList.contains( 'activeSvg' ) ) {
					document.getElementById( 'form_1' ).setAttribute( 'type', 'text' );
				} else {
					document.getElementById( 'form_1' ).setAttribute( 'type', 'password' );
				}
				e.preventDefault();
			} else if( e.currentTarget == document.getElementById( 'form-input_2' ) ) {
				formPasswordIcon[i].classList.toggle( 'activeForm' );
				formSvg[i].classList.toggle( 'activeSvg' );
				if( formSvg[i].classList.contains( 'activeSvg' ) ) {
					document.getElementById( 'form_2' ).setAttribute( 'type', 'text' );
				} else {
					document.getElementById( 'form_2' ).setAttribute( 'type', 'password' );
				}				e.preventDefault();
			} else if( e.currentTarget == document.getElementById( 'form-input_3' ) ) {
				formPasswordIcon[i].classList.toggle( 'activeForm' );
				formSvg[i].classList.toggle( 'activeSvg' );
				if( formSvg[i].classList.contains( 'activeSvg' ) ) {
					document.getElementById( 'form_3' ).setAttribute( 'type', 'text' );
				} else {
					document.getElementById( 'form_3' ).setAttribute( 'type', 'password' );
				}
				e.preventDefault();
			}
		} )
	}
}


const burgerLink     = document.querySelectorAll( '.burger__linkActive' );
const burger         = document.querySelectorAll( '.burger' );
const burgerBodyExit = document.querySelectorAll( '.burger__body-exit' );

if( burgerLink.length > 0 ) {
	burgerLink[0].addEventListener( 'click', addOpen )
}

if( burgerBodyExit.length > 0 ) {
	burgerBodyExit[0].addEventListener( 'click', addExit )
}

function addOpen(e) {
	burgerLink[0].classList.add( "active__link" );
	burger[0].classList.add( "open__burger" )
	body.style.overflowY = "hidden";
	e.preventDefault();
}

function addExit(e) {
	burgerLink[0].classList.remove( "active__link" );
	burger[0].classList.remove( "open__burger" );
	body.style.overflowY = "";
	e.preventDefault();
}

const swiper = new Swiper('.team__swiper', {
	// Optional parameters

	loop: true,

	// autoHeight: true,
	autoWidth: false,

	// Navigation arrows
	navigation: {
	  nextEl: '.team__button-next',
	  prevEl: '.team__button-prev',
	},

	breakpoints: {

		1240: {
			slidesPerView: 4	
		},

		768: {
			slidesPerView: 3
		},

		478: {
			slidesPerView: 2
		},

		320: {
			slidesPerView: 1
		}
	},

	// slidesPerView: 1
  
});

const swiper2 = new Swiper('.comments__slider', {
	// Optional parameters

	loop: true,

	// autoHeight: true,
	autoWidth: false,

	// Navigation arrows
	navigation: {
	  nextEl: '.comments__button-next',
	  prevEl: '.comments__button-prev',
	},

	slidesPerView: 1,
	// crossFade: true
	
	effect: 'fade',

	fadeEffect: {
		crossFade: true
	},

	// centeredSlides: true
  
});

import mixitup from '/modules/mixitup';

let mixer = mixitup('.container', {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});