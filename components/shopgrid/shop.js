import '../../styles/shop.css'

export function createShopGrid(){

    const productsGridEl = document.createElement('div')
    productsGridEl.classList.add('products-grid')

    return productsGridEl
}