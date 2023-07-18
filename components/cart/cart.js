import '../../styles/cart.css'
import {createProductList} from "./createProductList.js"
import {createCheckoutComponent} from "./createCheckoutComponent.js";

export function createCartGrid(){
    const cartGridEl = document.createElement('div')
    cartGridEl.classList.add('checkout-grid')
    cartGridEl.appendChild(createProductList())
    cartGridEl.appendChild(createCheckoutComponent())
    return cartGridEl
}