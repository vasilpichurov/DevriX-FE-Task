const hamburgerMenu = document.querySelector('.js-hamburger-menu')
const navMobile = document.querySelector('.js-nav-mobile')
const navMobileCloseBtn = document.querySelector('.js-nav-mobile-close')

hamburgerMenu.addEventListener('click', ()=>{
    navMobile.classList.add('nav-mobile--open')
    navMobile.classList.remove('nav-mobile--closed')
})

navMobileCloseBtn.addEventListener('click', ()=>{
    navMobile.classList.remove('nav-mobile--open')
    navMobile.classList.add('nav-mobile--closed')
})