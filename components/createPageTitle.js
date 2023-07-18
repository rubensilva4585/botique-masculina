export function createPageTitle(title){
    const HeaderEl = document.createElement('div')
    HeaderEl.classList.add('products-header')

    const TitleEl =  document.createElement('h2')
    TitleEl.classList.add('text-uppercase')
    TitleEl.textContent= `${title}`
    HeaderEl.appendChild(TitleEl)

    return HeaderEl
}