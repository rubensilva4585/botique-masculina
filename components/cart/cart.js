import '../../styles/cart.css'
import {createProductList} from "./createProductList.js"
import {createCheckoutComponent} from "./createCheckoutComponent.js";
import {createPageTitle} from "../createPageTitle.js";

export function createCartGrid(){
    const containerEl = document.createElement('div')
    containerEl.classList.add('container')
    containerEl.appendChild(createPageTitle('Your Cart', 'Ready to Complete Your Order?'))

    const cartGridEl = document.createElement('div')
    cartGridEl.classList.add('checkout-grid')
    cartGridEl.appendChild(createProductList())
    cartGridEl.appendChild(createCheckoutComponent())
    containerEl.appendChild(cartGridEl)

    return containerEl
}