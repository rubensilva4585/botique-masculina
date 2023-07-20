import '../../styles/navbar.css'
import { dispatchOpenMobileNavbarEvent } from '../../events/dispatchOpenMobileNavbarEvent.js'
import { navbarButton } from './navbarButtons.js'


export function setNavBar() {
    const body = document.querySelector('body')
    body.appendChild(navBarMobile())

    const header = document.querySelector('header')
    header.innerHTML = ` 
      <div class="top-info">
        <i class="fa-solid fa-tags"></i>
        <span>40% off all products. Use code: TPSI0922</span>
      </div>
    `

    header.appendChild(navBarTop())
    header.style.backgroundColor = "white";
}


// render navbar Top
function navBarTop() {
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


// render navbar Mobile
function navBarMobile() {
    const div = document.createElement('div')
    div.innerHTML = `<div class="mobile-nav-backfilter"></div>`
    
    const divMobileNavbar = document.createElement('div')
    divMobileNavbar.classList.add('mobile-navmenu')

    divMobileNavbar.innerHTML += `
        <div class="mobile-navmenu-exit">
            <i class="fa-xl fa-solid fa-xmark"></i>
        </div>
        <ul>
            <a href="/index.html">Shop<i class="fa-solid fa-angle-right"></i></a>
            <a href="/aboutus.html">About<i class="fa-solid fa-angle-right"></i></a>
            <a href="/contact.html">Contact<i class="fa-solid fa-angle-right"></i></a>
        </ul>
    ` 
    checkActivePage(divMobileNavbar)
    div.appendChild(divMobileNavbar)

    // botao fechar menu
    const backfilter = div.querySelector(".mobile-nav-backfilter")
    const exit = divMobileNavbar.querySelector(".mobile-navmenu-exit")
    exit.addEventListener('click', () => {
        divMobileNavbar.classList.remove("shownavmenu")
        backfilter.classList.remove("showbackfilter")
    });

    // event abrir menu
    document.addEventListener('openMobileNavbar', (e) => {
        divMobileNavbar.classList.add("shownavmenu");
        backfilter.classList.add("showbackfilter")
    });

    return div
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


/// NAO APAGAR

{/* <div class="mobile-nav-backfilter"></div>
<div class="mobile-navmenu">
  <div class="mobile-navmenu-exit">
    <i class="fa-xl fa-solid fa-xmark"></i>
  </div>
  <ul>
    <a href="#" class="active">Shop<i class="fa-solid fa-angle-right"></i></a>
    <a href="aboutus.html">About<i class="fa-solid fa-angle-right"></i></a>
    <a href="contact.html">Contact<i class="fa-solid fa-angle-right"></i></a>
  </ul>
</div>     

  
<header>
  <div class="top-info">
    <i class="fa-solid fa-tags"></i>
    <span>40% off all products. Use code: TPSI0922</span>
  </div>

  <div class="navbar container">
      <div class="navbar-logo">
        <img src="assets/img/logo.svg">
      </div>

      <div class="navbar-menu">
        <ul>
          <a href="#" class="active">Shop</a>
          <a href="aboutus.html">About</a>
          <a href="contact.html">Contact</a>
        </ul>
      </div>

      <div class="navbar-buttons">
        <div class="cartBtn">
          <div class="cartBtnPrice">
            <span>0.00€</span>
          </div>
          <div class="cartBtnItems">
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="numItems">0</span>
          </div>
        </div>

        <div class="navMobileBtn">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>    
  </div>
</header>   */}





{/* <div class="mobile-nav-backfilter"></div>
    <div class="mobile-navmenu">
      <div class="mobile-navmenu-exit">
        <i class="fa-xl fa-solid fa-xmark"></i>
      </div>
      <ul>
        <a href="#" class="active">Shop<i class="fa-solid fa-angle-right"></i></a>
        <a href="aboutus.html">About<i class="fa-solid fa-angle-right"></i></a>
        <a href="contact.html">Contact<i class="fa-solid fa-angle-right"></i></a>
      </ul>
    </div>     
    
      
    <header>
      <div class="navbar">
        <div class="nav-left">
          <div class="logo">
            <img src="assets/img/logo.svg">
          </div>
          <ul>
            <a href="#" class="active">Shop</a>
            <a href="aboutus.html">About</a>
            <a href="contact.html">Contact</a>
          </ul>
        </div>
      
      
        <div class="nav-right">
          <a href="cart.html" class="cart-btn">
            <img src="assets/img/cart.svg">
            <span>0</span>
          </a>
      
          <div class="navMobileBtn">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      
      </div>
      </header>  */}
