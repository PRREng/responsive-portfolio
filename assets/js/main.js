// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Menu Show
// Avlidate if constant exists
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
        console.log('clicked')
    })
}

// Menu Hidden
// Validate if constant exists
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// SHADOW HEADER
const shadowHeader = () => {
    const header = document.getElementById('header')
    // When the shadow is greater than 50 viewport height, add the shadow-header class to the header
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)

// EMAIL JS


// SHOW shadow UP

// shadow SECTIONS ACTIVE LINK


// DARK LIGHT THEME


// shadow REVEAL ANIMATION