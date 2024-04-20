const linksList = document.querySelector("[data-links-list]")
const blocksList = document.querySelector("[data-blocks-list]")
const lengthPages = 3

if(linksList) {
    linksList.addEventListener("click", e => {
        if(e.target.closest("[data-link]")) {
            e.preventDefault()

            openLink(linksList, e.target.dataset.link)
            openBlock(blocksList, e.target.dataset.link)
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
            newLinkIndex = parseInt(currentLinkIndex) + 1 > lengthPages 
            ? currentLinkIndex 
            : ++currentLinkIndex
            openLink(linksList, newLinkIndex)
            openBlock(blocksList, newLinkIndex)
        } else {
            newLinkIndex = parseInt(currentLinkIndex) - 1 < 1
            ? currentLinkIndex
            : --currentLinkIndex
            openLink(linksList, newLinkIndex)
            openBlock(blocksList, newLinkIndex)
        }
    }

    lastScrollTime = now
}

// addEventListener("scroll", e => {
//     let currentScrollPos = window.scrollY;
//     let currentLink = getCurrentLinkIndex(linksList)

//     if(startScrollValue < currentScrollPos) {
//         openLink(linksList, currentLink++)
//         openBlock(blocksList, currentLink++)
//     } else {
//         openLink(linksList, currentLink--)
//         openBlock(blocksList, currentLink--)
//     }

//     startScrollValue = currentScrollPos
// })

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