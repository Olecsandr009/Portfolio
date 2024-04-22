
// Функція для провірки браузера на підтримке плагина для сборки gulp
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// Функція для адаптивного меню. Меню при зменшенні екрану складується в меню бургер
// import * as adaptiveMenu from "./modules/adaptiveMenu.js";

// adaptiveMenu.adaptiveMenu(); меню в стадії розробки

/*--=============================== BURGER ==================================--*/
/*--========================= Функція бургер меню ===========================--*/

// Інструкція:
// даємо силкам на меню дата атрибут [data-burger-link]
// даємо меню дата атрибут [data-burger]
// даємо кнопці (закрити) дата атрибут [data-burger-exit]
// всі значення дата атрибутів повинні бути однаковими
// import * as burger from "./modules/burger.js";

// burger.burger();

/*--============================== CHECKBOX =================================--*/
/*--=================== Функція для стилізації чекбоксов ====================--*/

// Інструкція:
// даємо лабелам дата атрибут [data-check-box-label]
// даємо інпутам дата атрибут [data-check-box-input]
// всі значення дата атрибутів повинні бути однаковими
// import * as checkBox from "./modules/check-box.js";

// checkBox.checkBox();

//	Функція для зміни типу інпута що призначений для введення паполя
// import * as lookPassword from "./modules/lookPassword.js";

// lookPassword.lookPassword();

/*--=============================== Popup ===================================--*/
/*--==================== Функція з логікою для попапів ======================--*/

// Функція для модального вікна
import "./modules/popup.js";

// Функція для лічильника кількості покупки
// import * as quantity from "./modules/quantity.js";

// quantity.quantity();

/*--================================ RADIO ==================================--*/
/*--================== Функція для стилізації радіо-кнопок ==================--*/

// Інструкція:
// даємо Input дата атрибут [data-input-radio]
// так само Label даємо дата атрибут [data-label-radio]
// і обгортці всіх Label даємо дата атрибут [data-form-radio-group]
// всі значення дата атрибутів повинні бути однаковими
// import * as radio from "./modules/radio.js";

// radio.radio();

// Функція для плавного зникнення і появлення блоку
// import * as slideToggle from "./modules/slideToggle.js";

// slideToggle.slideToggle();

// Функція для сполерів
// import * as spoler from "./modules/spoler.js";

// spoler.spoler();

// Функція для табів
// import * as tabs from "./modules/tabs.js";

// tabs.tabs();

// Бібліотека для слайдерів SWIPER
// import Swiper from 'swiper';

// const swiper = new Swiper( "class", {
// 	// Пагінація
// 	pagination: {
// 		// Елемент пагінації
// 		el: '.swiper-pagination',
// 		// Тип
// 		type: 'bullets',
// 		// Можна керувати кліками по пагінації
// 		clickable: true
// 	},
// 	// Відступи між слайдами
// 	spaceBetween: 60,
// 	// Кількість слайдів
// 	slidesPerView: 3,
// 	// Нескінченне гортання
// 	loop: true,
// 	// Авто гортання
// 	autoplay: {
// 		// Кількість мілісекунд
// 		delay: 2000
// 	},
// 	// Брейкпоінти
// 	breakpoints: {
// 	},
// } )

// Бібліотека для фільтрів

// const mixer = mixitup(".block-gallery__blocks", {
// 	animation: {
// 		enable: true,
// 		duration: 250,
// 		nudge: false,
// 		reverseOut: false,
// 		effects: "fade translateY(20%)"
//   }
// });

const linksList = document.querySelector("[data-links-list]")
const blocksList = document.querySelector("[data-blocks-list]")
const lengthPages = 3

if(linksList) {
    linksList.addEventListener("click", e => {
        if(e.target.closest("[data-link]")) {
            e.preventDefault()
            const currentLink = e.target.closest("[data-link]")

            openLink(linksList, currentLink.dataset.link)
            openBlock(blocksList, currentLink.dataset.link)
        }
    })
}

document.addEventListener("wheel", handleWheel);
let lastScrollTime = 0
const scrollDelay = 200

function handleWheel(event) {
    let now = new Date().getTime()
    const delta = Math.sign(event.deltaY)
    
    if(now - lastScrollTime > scrollDelay) {
        let currentLinkIndex = getCurrentLinkIndex(linksList)

        if (delta > 0) {
            const newLinkIndex = parseInt(currentLinkIndex) + 1 > parseInt(lengthPages) ? currentLinkIndex : ++currentLinkIndex
            openLink(linksList, newLinkIndex)
            openBlock(blocksList, newLinkIndex)
        } else {
            const newLinkIndex = parseInt(currentLinkIndex) - 1 < 1 ? currentLinkIndex : --currentLinkIndex
            openLink(linksList, newLinkIndex)
            openBlock(blocksList, newLinkIndex)
        }
    }

    lastScrollTime = now
}

function closeAll(list, dataAttr) {
    if(!list) return

    const links = list.querySelectorAll(dataAttr.toString())
    if(!links.length) return

    links.forEach(element => {
        element.classList.remove("active")
    })
}

function openLink(list, index) {
    if(!list) return

    const links = list.querySelectorAll("[data-link]")
    if(!links.length) return

    closeAll(list, "[data-link]")

    links.forEach(element => {
        if(parseInt(element.dataset.link) == parseInt(index)) {
            element.classList.add("active")
        }
    })
}

function openBlock(list, index) {
    if(!list) return

    const blocks = list.querySelectorAll("[data-block]")
    if(!blocks.length) return

    closeAll(list, "[data-block]")

    blocks.forEach(element => {
        if(parseInt(element.dataset.block) == parseInt(index)) {
            element.classList.add("active")
        }
    })
}

function getCurrentLinkIndex(list) {
    if(!list) return

    let currentLinkIndex = undefined

    const links = list.querySelectorAll("[data-link]")
    if(!links.length) return

    for(let i = 0; i < links.length; i++) {
        if(links[i].closest("[data-link].active")) {
            currentLinkIndex = links[i].dataset.link
        }
    }

    return currentLinkIndex
}

const theme = document.querySelector("[data-theme]")
const body = document.body

if(theme) {
    theme.addEventListener("click", e => {
        e.preventDefault()

        e.currentTarget.classList.toggle("active")
        body.classList.toggle("dark")
    })
}