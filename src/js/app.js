
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
const linksList = document.querySelectorAll("[data-links-list]")
const blocksList = document.querySelectorAll("[data-blocks-list]")
const lengthPages = 4

if(linksList.length) {
    linksList.forEach(element => {
        element.addEventListener("click", e => {
            if(e.target.closest("[data-link]")) {
                e.preventDefault()
                const currentLink = e.target.closest("[data-link]")
                
                openLinks(currentLink.dataset.link)
                openBlock(blocksList, currentLink.dataset.link)
            }
        })
    })
}

document.addEventListener("wheel", handleWheel);
let lastScrollTime = 0
let lastTouchTime = 0
const scrollDelay = 200
let startTouchY

document.addEventListener("touchstart", e => {
    startTouchY = e.touches[0].clientY
}, false)

document.addEventListener("touchmove", e => {
    e.preventDefault();
}, false)

document.addEventListener("touchend", e => {
    let now = new Date().getTime()

    let endY = e.changedTouches[0].clientY;
    let deltaY = startTouchY - endY;

    if((now - lastTouchTime) > scrollDelay) {
        let currentLinkIndex = getCurrentLinkIndex()

        if (deltaY > 0) {
            const newLinkIndex = parseInt(currentLinkIndex) + 1 > parseInt(lengthPages) ? currentLinkIndex : ++currentLinkIndex
            openLinks(newLinkIndex)
            openBlock(blocksList, newLinkIndex)
        } else {
            let newLinkIndex = currentLinkIndex;

            if(parseInt(currentLinkIndex) - 1 < 1) {
                newLinkIndex = currentLinkIndex
            } else {
                newLinkIndex = parseInt(currentLinkIndex) - 1
            }

            openLinks(newLinkIndex)
            openBlock(blocksList, newLinkIndex)
        }
    }

    lastTouchTime = now
})

function handleWheel(event) {
    let now = new Date().getTime()
    const delta = Math.sign(event.deltaY)
    
    if((now - lastScrollTime) > scrollDelay) {
        let currentLinkIndex = getCurrentLinkIndex()
        
        if (delta > 0) {
            const newLinkIndex = parseInt(currentLinkIndex) + 1 > parseInt(lengthPages) ? currentLinkIndex : ++currentLinkIndex
            openLinks(newLinkIndex)
            openBlock(blocksList, newLinkIndex)
        } else {
            let newLinkIndex = currentLinkIndex;

            if(parseInt(currentLinkIndex) - 1 < 1) {
                newLinkIndex = currentLinkIndex
            } else {
                newLinkIndex = parseInt(currentLinkIndex) - 1
            }

            openLinks(newLinkIndex)
            openBlock(blocksList, newLinkIndex)
        }
    }

    lastScrollTime = now
}

function openLinks(index) {
    const links = document.querySelectorAll("[data-link]")
    if(!links.length) return

    closeAll("[data-link]")

    links.forEach(element => {
        if(parseInt(element.dataset.link) == parseInt(index)) {
            element.classList.add("active")
        }
    })
}

function closeAll(dataAttr) {
    const links = document.querySelectorAll(dataAttr.toString())
    if(!links.length) return

    links.forEach(element => {
        element.classList.remove("active")
    })
}

function openLink(list, index) {
    if(!list) return

    const links = list.querySelectorAll("[data-link]")
    if(!links.length) return

    closeAll("[data-link]")

    links.forEach(element => {
        if(parseInt(element.dataset.link) == parseInt(index)) {
            element.classList.add("active")
        }
    })
}

function openBlock(list, index) {
    if(!list.length) return

    list.forEach(element => {
        const blocks = element.querySelectorAll("[data-block]")
        if(!blocks.length) return
        
        closeAll("[data-block]")
        
        blocks.forEach(element => {
            if(parseInt(element.dataset.block) == parseInt(index)) {
                element.classList.add("active")
            }
        })
    })
}

function getCurrentLinkIndex() {
    let currentLinkIndex = undefined

    for(let i = 0; i < linksList.length; i++) {
        const link = linksList[i].querySelector("[data-link].active")

        if(link) currentLinkIndex = link.dataset.link
    }

    return currentLinkIndex
}

const theme = document.querySelectorAll("[data-theme]")
const body = document.body

if(theme.length) {
    theme.forEach(element => {
        element.addEventListener("click", e => {
            e.preventDefault()
            
            e.currentTarget.classList.toggle("active")
            body.classList.toggle("dark")
        })
    })
}