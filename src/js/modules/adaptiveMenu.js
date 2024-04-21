addEventListener( 'DOMContentLoaded', function(e) {
	const nextAll = element => {
		const nextElement = [];

		while( element.nextElementSibling ) {
			nextElement.push( element.nextElementSibling );
			element = element.nextElementSibling;
		}

		return nextElement;
	}

	const root = document.documentElement;
	const moreMargin = getComputedStyle( root ).getPropertyValue( '--more-margin' );
	const li = document.querySelectorAll( 'ul.navigation__list > li' );
	const parent = document.querySelector( '.navigation__list' );
	const blockEnd = document.querySelector( '.navigation__block' );
	let widthWindow = window.innerWidth;

	function minWidthRemove() {
		let innerWidth = parent.offsetWidth;

		let widthAllLi = 0;

		for(  let i = 0; i < li.length; i++ ) {
			widthAllLi += (li[i].offsetWidth + parseInt( moreMargin ));

			if( widthAllLi > innerWidth ) {
				let nextElements = nextAll( li[i - 1] );

				// console.log( nextElements );

				let elementReverse = nextElements.reverse()

				elementReverse.forEach( (el) => {
					el.remove();
					blockEnd.prepend( el )
				} )

				// console.log( li )
				break;
			}
		}
		
	}
	function maxWidthAdd() {
		let afterLi = document.querySelectorAll( "ul.navigation__list > li" )
		let innerWidth = parent.offsetWidth;
		let widthAllLi = 0;
		let widthTwoBlockLi = 0;

		// console.log( afterLi )

		let liTwoBlock = document.querySelectorAll( 'ul.navigation__block > li' );


		for(  let i = 0; i < afterLi.length; i++ ) {
			widthAllLi += (li[i].offsetWidth + parseInt( moreMargin ));
		}

		for( let i = 0; i < liTwoBlock.length; i++ ) {
			widthTwoBlockLi += (liTwoBlock[i].offsetWidth + parseInt( moreMargin ));
			let allWidthLi = widthAllLi + widthTwoBlockLi;

			if(allWidthLi < innerWidth) {
				liTwoBlock[i].remove();
				parent.append( liTwoBlock[i] );

				break;
			}
		}

		
	}

	addEventListener( 'resize', (e) => {
		( window.innerWidth > widthWindow )? maxWidthAdd() : minWidthRemove();
		widthWindow = window.innerWidth;
	 } )
} )