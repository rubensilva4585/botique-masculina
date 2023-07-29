
import {getProductById} from "../../utils/getProductById.js";
import {cart} from "../../pageCart.js";
import {addProductToCartPage} from "./cartRow.js";
export function createProductList(){
    const productListEl = document.createElement('div')
    productListEl.classList.add('item-list')
    // productListEl.innerHTML=`
    // <div class="cart-column-names hidden">
    //         <span class="product-image"></span>
    //         <span class="product-name">Product</span>
    //         <span class="product-price">Price</span>
    //         <span class="product-quantity">Quantity</span>
    //         <span class="product-total">Total</span>
    //     </div>
    // `
    cart.products.map((product)=>{
        productListEl.appendChild(addProductToCartPage(getProductById(product.id),product.quantity))
    })
    return productListEl
}