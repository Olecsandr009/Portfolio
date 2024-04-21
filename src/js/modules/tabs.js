export function tabs() {
	const tabLink = document.querySelectorAll("[data-tab-link]");
	const tab = document.querySelectorAll("[data-tab]");

	if (tabLink.length) {
		for (let i = 0; i < tabLink.length; i++) {

			// Ловим клік по силці
			tabLink[i].addEventListener("click", e => {

				// Записуємо індекс групи і індекс таба
				let [groupLinkIndex, tabLinkIndex] = tabLink[i].dataset.tabLink.split(",");


				// Закриваємо всі таби групи
				closeAllTab(groupLinkIndex);

				// Даємо клас нажатій силці
				tabLink[i].classList.add("activeTabLink");

				for (let a = 0; a < tab.length; a++) {

					// Записуємо дані таба
					const [tabGroupIndex, tabIndex] = tab[a].dataset.tab.split(",");

					// Звіряєм дані з даними силки
					if (tabLinkIndex === tabIndex && groupLinkIndex === tabGroupIndex) {

						// Даємо табу клас
						tab[a].classList.add("activeTab");
					}
				}
			})
		}
	}

	// Функція для закриття відкритих табів табів
	function closeAllTab(groupIndex) {
		for (let i = 0; i < tabLink.length; i++) {
			tabLink[i].dataset.tabLink.split(",")[0] === groupIndex ? tabLink[i].classList.remove("activeTabLink") : undefined;
		}
		for (let i = 0; i < tab.length; i++) {
			tab[i].dataset.tab.split(",")[0] === groupIndex ? tab[i].classList.remove("activeTab") : undefined;
		}
	}
}