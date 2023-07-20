import '../../styles/shop.css'
import {createPageTitle} from "./../createPageTitle.js";
import {shopGridFilters} from "./shopGridFilters.js";

export function createShopGrid(){
    const productsGridContainerEl = document.createElement('div')
    productsGridContainerEl.classList.add('container')
    productsGridContainerEl.appendChild(createPageTitle('Our Products'))

    productsGridContainerEl.appendChild(shopGridFilters())

    const productsGridEl = document.createElement('div')
    productsGridEl.classList.add('products-grid')
    productsGridContainerEl.appendChild(productsGridEl)

    return productsGridContainerEl
}