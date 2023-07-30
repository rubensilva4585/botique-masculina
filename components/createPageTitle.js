export function createPageTitle(title, subtitle){
    const HeaderEl = document.createElement('div')
    HeaderEl.classList.add('div-title')

    const TitleEl =  document.createElement('h2')
    TitleEl.textContent= `${title}`
    HeaderEl.appendChild(TitleEl)

    if(subtitle){
        const SubtitleEl =  document.createElement('p')
        SubtitleEl.textContent= `${subtitle}`
        HeaderEl.appendChild(SubtitleEl)
    }

    return HeaderEl
}