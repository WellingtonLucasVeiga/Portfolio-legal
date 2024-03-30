var mobileButton = document.getElementById('menu-button')
var mobileNav = document.getElementById('nav-menu-mobile')

function openMenu() {

    mobileNav.classList.toggle('opened')

}

mobileButton.addEventListener('click', openMenu)

function closeMenu() {
    mobileNav.classList.remove('opened')

}

var menuMobileLink = document.getElementsByClassName('mobileLink')

Array.from(menuMobileLink).forEach((menuMobileLink) => {

    menuMobileLink.addEventListener('click', closeMenu)

});



// Modo Escuro 

function trocarBackground(classe) {

    Array.from(classe).forEach((x) => {
        x.classList.toggle('modo-escuro-cards')
    })
}

function changeTheme() {

    var buttonTheme = document.getElementById('material')
    var aboutInner = document.querySelector('#about-main-inner-content')
    var aboutHeader = document.querySelector('#about-header')
    var backgroundLink = document.querySelectorAll('#nav-menu li a')
    var textColor = document.getElementById('text-colorful')

    // Trocar cor
    document.body.classList.toggle('modo-escuro')
    trocarBackground(document.getElementsByClassName('dark-background'))
    trocarBackground(document.getElementsByClassName('darkLink'))
    trocarBackground(document.getElementsByClassName('dark-color'))
    trocarBackground(document.querySelectorAll('#presentation-desc > * '))
    trocarBackground(document.querySelectorAll('#about-card #about-creator-name, #about-card a'))
    trocarBackground(document.querySelectorAll('.contacts-inner > div > *'))
    var githubImg = document.getElementById('githubImg')
    githubImg.style.filter = 'invert(1)'
    var mainDesc = (document.querySelectorAll('#main-desc > h1'))
    trocarBackground(mainDesc)

    //Animação botão
    buttonTheme.style.transform = 'rotate(360deg)'
    buttonTheme.style.color = 'white'
    buttonTheme.style.willChange = 'transform';
    
    //Propriedades customizadas
    aboutInner.style.setProperty('--background-about', '#0e4d7d')
    aboutHeader.style.setProperty('--background-header', '#0d82ef')
    textColor.style.color = '#47d939'
    Array.from(backgroundLink).forEach((x) => {
        x.style.setProperty('--background-link', 'white')
    })

    //Voltar ao padrão
    Array.from(mainDesc).forEach((x) => {
        if (x.className != 'modo-escuro-cards') {
            aboutInner.style.setProperty('--background-about', '#71C1FF')
            aboutHeader.style.setProperty('--background-header', '#6cecff')
            textColor.style.color = '#286E22'
            buttonTheme.style.transform = 'rotate(-360deg)'
            buttonTheme.style.color = '#494949'
            githubImg.style.filter = 'invert(0)'

            Array.from(backgroundLink).forEach((x) => {
                x.style.setProperty('--background-link', 'black')
            })
        }
    })

    
    
}