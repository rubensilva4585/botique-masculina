
import {getProductById} from "../../utils/getProductById.js";
import {cart} from "../../pageCart.js";
import {addProductToCartPage} from "./cartRow.js";

export function createProductList(){
    const productListEl = document.createElement('div')
    productListEl.classList.add('item-list')

    const lblEmptyCart = document.createElement('div')
    lblEmptyCart.classList.add('empty-cart')
    productListEl.appendChild(lblEmptyCart)

    cart.products.map((product)=>{
        productListEl.appendChild(addProductToCartPage(getProductById(product.id),product.quantity))
    })

    return productListEl
}