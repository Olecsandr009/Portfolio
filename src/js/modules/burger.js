export function burger() {
	const burgerLink = document.querySelectorAll('[data-burger-link]');
	const burger = document.querySelectorAll('[data-burger]');
	const burgerExit = document.querySelectorAll('[data-burger-exit]');
	const body = document.body;

	if (burgerLink.length > 0) {
		// Проходим по всім силкам щоб ловить кліки
		for (let a = 0; a < burgerLink.length; a++) {
			// Ловим кліки по силкам
			burgerLink[a].addEventListener('click', e => {
				e.preventDefault();
				// Після кліку ще раз проходим по всім силкам і знімаємо (якщо є)
				// класи active а точніше закриваєм всі відкриті силки
				for (let i = 0; i < burgerLink.length; i++) {
					burgerLink[i].classList.remove("active");
				}

				// Після того як ми закрили всі силки проходимо по всім бургер меню 
				// і закриваємо їх
				for (let i = 0; i < burger.length; i++) {
					burger[i].classList.remove("open");
				}

				// Даємо силці по якій тільки що клікнули активний клас
				e.target.classList.add("active");
				body.style.overflowY = "hidden";

				// Шукаємо бургер меню яке відповідає нажатій (ативній) силці
				if (burger.length > 0) {
					for (let i = 0; i < burger.length; i++) {
						if (burgerLink[a].dataset.burgerLink === burger[i].dataset.burger) {
							setTimeout( () => {
								burger[i].classList.add("open");
							}, 200 )
						}
					}
				}
			})
		}
	}

	if (burgerExit.length > 0) {
		for (let i = 0; i < burgerExit.length; i++) {
			// Ловимо клік по кнопкам (закрити)
			burgerExit[i].addEventListener("click", e => {
				e.preventDefault();
				
				// Закриваємо меню і забираємо клас активності
				// і включаємо скролл
				for (let a = 0; a < burger.length; a++) {
					if (burgerExit[i].dataset.burgerExit === burger[a].dataset.burger) {
						burger[a].classList.remove("open");
					}
				}
				for (let a = 0; a < burgerLink.length; a++) {
					if (burgerExit[i].dataset.burgerExit === burgerLink[a].dataset.burgerLink) {
						burgerLink[a].classList.remove("active");
					}
				}
				body.style.overflowY = "";
			})
		}
	}

	addEventListener("click", e => {
		if (burger.length > 0) {
			for (let i = 0; i < burger.length; i++) {
				// Дивимся чи наше бургер меню відкрите
				if (burger[i].classList.contains("open")) {
					// Створюємо пустий масив для силок які належать
					// нашому бургер меню
					let currentBurgerLink = [];

					// Змінна вказує чи ми клікали по силці чи ні
					let exitBurger = false;

					for (let a = 0; a < burgerLink.length; a++) {
						// Шукаємо силки які належать бургер меню і 
						// записуємо в відповідний масив
						if (burger[i].dataset.burger === burgerLink[a].dataset.burgerLink) {
							currentBurgerLink.push(burgerLink[a]);
						}
					}

					for (let d = 0; d < currentBurgerLink.length; d++) {
						// Дивимся якщо клік відбувся по силці 
						// яка належить меню якщо так ми записуємо
						// в змінну (так)
						if( e.target === currentBurgerLink[d] ) {
							exitBurger = true;
						}
					}

					// Перевіряєми чи ми не клікали по меню і силкам
					if (!e.target.closest(".open") && !exitBurger) {
						// Якщо ми всетаки не клікали по меню і силкам
						// ми закриваємо меню і активний клас з силок
						// і включаємо скролл
						for (let b = 0; b < burgerLink.length; b++) {
							burgerLink[b].classList.remove("active");
						}
						
						for (let c = 0; c < burger.length; c++) {
							burger[c].classList.remove("open");
						}
						body.style.overflowY = "";
					}
				}
			}
		}
	})
}