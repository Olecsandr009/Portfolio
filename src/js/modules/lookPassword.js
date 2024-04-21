// const formPasswordIcon = document.querySelectorAll( '.form-password__icon' );
// const passwordInputs   = document.querySelectorAll( '.form-password__input' );
// const formSvg          = document.querySelectorAll( '.form-password__svg' );
// const inputs           = document.querySelectorAll( 'input' );

// if( formPasswordIcon.length > 0 ) {
// 	for( let i = 0; i < formPasswordIcon.length; i++ ) {
// 		formPasswordIcon[i].addEventListener( 'click', function(e) {
// 			if( e.currentTarget == document.getElementById( 'form-input_1' ) ) {
// 				formPasswordIcon[i].classList.toggle( 'activeForm' );
// 				formSvg[i].classList.toggle( 'activeSvg' );
// 				if( formSvg[i].classList.contains( 'activeSvg' ) ) {
// 					document.getElementById( 'form_1' ).setAttribute( 'type', 'text' );
// 				} else {
// 					document.getElementById( 'form_1' ).setAttribute( 'type', 'password' );
// 				}
// 				e.preventDefault();
// 			} else if( e.currentTarget == document.getElementById( 'form-input_2' ) ) {
// 				formPasswordIcon[i].classList.toggle( 'activeForm' );
// 				formSvg[i].classList.toggle( 'activeSvg' );
// 				if( formSvg[i].classList.contains( 'activeSvg' ) ) {
// 					document.getElementById( 'form_2' ).setAttribute( 'type', 'text' );
// 				} else {
// 					document.getElementById( 'form_2' ).setAttribute( 'type', 'password' );
// 				}				e.preventDefault();
// 			} else if( e.currentTarget == document.getElementById( 'form-input_3' ) ) {
// 				formPasswordIcon[i].classList.toggle( 'activeForm' );
// 				formSvg[i].classList.toggle( 'activeSvg' );
// 				if( formSvg[i].classList.contains( 'activeSvg' ) ) {
// 					document.getElementById( 'form_3' ).setAttribute( 'type', 'text' );
// 				} else {
// 					document.getElementById( 'form_3' ).setAttribute( 'type', 'password' );
// 				}
// 				e.preventDefault();
// 			}
// 		} )
// 	}
// }

export function lookPassword() {

	const viewPasswordInput = document.querySelectorAll( "[data-view-password-input]" );
	const viewPasswordButton = document.querySelectorAll( "[data-view-password-button]" );
	const viewPasswordInputType = document.querySelectorAll( "[data-view-password-input].viewPasswordInput" );

	if( viewPasswordButton ) {
		for( let i = 0; i < viewPasswordButton.length; i++ ) {
			viewPasswordButton[i].addEventListener( 'click', e => {
				e.currentTarget.classList.toggle( "view-password" );
				e.preventDefault();

				if( 
					viewPasswordButton[i].dataset.viewPasswordButton 
					=== viewPasswordInput[i].dataset.viewPasswordInput 
				) {

					for( let a = 0; a < viewPasswordInput.length; a++ ) {
						viewPasswordInput[a].classList.toggle( "view-password-input" );
					}

				}
			} )
		}
	}

	addEventListener( "click", e => {

		for( let i = 0; i < viewPasswordInput.length; i++ ) {

			if( viewPasswordInput[i].classList.contains( "view-password-input" ) ) {
				viewPasswordInput[i].setAttribute( 'type', 'text' );
			} else {
				viewPasswordInput[i].setAttribute( 'type', 'password' );
			}

		}
	} )

}