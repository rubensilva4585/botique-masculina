export function setNavBar() {
    const body = document.querySelector('body')
    body.appendChild(navBarMobile())

    const header = document.querySelector('header')
    header.appendChild(navBarTop())

    header.style.backgroundColor = "white";
}


// render navbar Top
function navBarTop() {
    const divNavbar = document.createElement('div')
    divNavbar.classList.add('navbar', 'container')

    const divNavbarLeft = document.createElement('div')
    divNavbarLeft.classList.add('nav-left') 

    divNavbarLeft.innerHTML = `
      <div class="logo">
          <img src="assets/img/logo.svg">
      </div>
      <ul>
          <a href="/index.html">Shop</a>
          <a href="/aboutus.html">About</a>
          <a href="/contact.html">Contact</a>
      </ul>
    `
    checkActivePage(divNavbarLeft)

    const divNavbarRight = document.createElement('div')
    divNavbarRight.classList.add('nav-right') 
    divNavbarRight.innerHTML = `
        <a href="cart.html" class="cart-btn">
            <img src="assets/img/cart.svg">
            <span>0</span>
        </a>
        <div class="navMobileBtn">
            <i class="fa-solid fa-bars"></i>
        </div>
    `

    divNavbar.appendChild(divNavbarLeft)
    divNavbar.appendChild(divNavbarRight)

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



/// EVENTO ABRIR MOBILE
const dispatchOpenMobileNavbarEvent = () => {
    const event = new CustomEvent('openMobileNavbar', {
        detail: {
          info: 'Pressionado botao para abrir mobile navbar',
        }
    })
    document.dispatchEvent(event)
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
