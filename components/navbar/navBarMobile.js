export function navBarMobile() {
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

