export function quantity() {
	const quantityMin = document.querySelector( '[data-quantity-min]' );
	const quantityNum =	document.querySelector( '[data-quantity-num]' );
	const quantityMax =	document.querySelector( '[data-quantity-max]' );
	
	if( quantityMin ) {
		quantityMin.addEventListener( 'click', e => {
			quantityNum.innerText = --quantityNum.innerText
			e.preventDefault();
		} )
	}
	
	if( quantityMax ) {
		quantityMax.addEventListener( 'click', e => {
			quantityNum.innerText = ++quantityNum.innerText
			e.preventDefault();
		} )
	}
}