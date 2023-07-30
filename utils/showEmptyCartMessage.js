import {cart} from "../pageCart.js";

export function showEmptyCartMessage(){
    cart.products.length === 0 &&
        (document.querySelector('.empty-cart').textContent = 'Your cart is empty')
}