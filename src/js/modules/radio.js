export function radio() {
	// Label по якому відбувається клік
	const labelRadio = document.querySelectorAll("[data-label-radio]");
	// Input який міститься дочірнім елементом Label
	const inputRadio = document.querySelectorAll("[data-input-radio]");

	if (inputRadio) {
		for (let i = 0; i < inputRadio.length; i++) {
			// Фіксуємо клік по Input
			inputRadio[i].addEventListener("click", e => {

				// Знаходимо батьківський Label
				const currentLabel = e.target.closest("label");

				// Знаходимо батьківський Div в якому містяться всі Label
				const currentLabelGroup = currentLabel.closest("[data-form-radio-group]");

				if (labelRadio) {
					for (let a = 0; a < labelRadio.length; a++) {
						// Виконуємо обхід в середині Div який ми нашли і знімаємо всі класи checked
						if (labelRadio[a].dataset.labelRadio === currentLabelGroup.dataset.formRadioGroup) {
							labelRadio[a].classList.remove("checked");
						}
					}
				}

				// Добавляємо клас checked батьківському Label, Inputa по якому ми клікнули
				currentLabel.classList.add("checked");

			})
		}
	}
}