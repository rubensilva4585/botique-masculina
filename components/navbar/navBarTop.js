import { navbarButton } from './navbarButtons.js'
import { dispatchOpenMobileNavbarEvent } from '../../events/dispatchOpenMobileNavbarEvent.js'

export function navBarTop() {
    const divNavbar = document.createElement('div')
    divNavbar.classList.add('navbar', 'container')

    divNavbar.innerHTML = `
      <div class="navbar-logo">
        <img src="assets/img/logo.svg">
      </div>
    `

    const divNavbarLeft = document.createElement('div')
    divNavbarLeft.classList.add('navbar-menu') 
    
    divNavbarLeft.innerHTML = `
      <ul>
          <a href="/index.html">Shop</a>
          <a href="/aboutus.html">About</a>
          <a href="/contact.html">Contact</a>
      </ul>
    `
    checkActivePage(divNavbarLeft)

    divNavbar.appendChild(divNavbarLeft)
    divNavbar.appendChild(navbarButton())

    // botao abrir menu mobile
    const navMobileBtn = divNavbar.querySelector(".navMobileBtn")
    navMobileBtn.addEventListener('click', () => { dispatchOpenMobileNavbarEvent() });

    return divNavbar
}

// Mudar para active todos os links que tenham o href igual ao pathname
function checkActivePage(div) {
    let currentPath = window.location.pathname
    if (!currentPath.includes('.html')) {
        currentPath = '/index.html'
    }
  
    const links = div.querySelectorAll('a')
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active')
            link.setAttribute('href', '#')
        }
    })
  }