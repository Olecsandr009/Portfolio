export function checkBox() {
	// Лабел який буде стилізуватися под чекбокс
	const checkBoxLabel = document.querySelectorAll( '[data-check-box-label]' );
	// Інпут по якому буде відбуватися клік
	const checkBoxInput = document.querySelectorAll( '[data-check-box-input]' );

	if( checkBoxInput ) {
		for( let i = 0; i < checkBoxInput.length; i++ ) {
			// Слухаємо кліки по інпуту
			checkBoxInput[i].addEventListener( 'change', e => {
				console.log( "click" )
				for( let a = 0; a < checkBoxLabel.length; a++ ) {
					// Шукаємо відповідний лабел
					if( checkBoxInput[i].dataset.checkBoxInput === checkBoxLabel[a].dataset.checkBoxLabel ) {
						// Тоглим клас чекед
						checkBoxLabel[a].classList.toggle( "checked" );
					}
				}
			} )
		}
	}
}