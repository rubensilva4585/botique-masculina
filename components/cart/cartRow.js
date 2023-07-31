import {cart} from "../../pageCart.js";
import {inputKeyIsNumber} from "../../utils/inputKeyIsNumber.js";
import {Product} from "../../models/Product.js";
import {showEmptyCartMessage} from "./showEmptyCartMessage.js";
import {validInputNumber} from "../../utils/validInputNumber.js";

export function addProductToCartPage(product, quantity){
    product = new Product(product)
    const productRowEl = document.createElement('div')
    productRowEl.classList.add('product')
    productRowEl.innerHTML=`
      <div class="product-left">
        <div class="product-image">
          <img src="${product.image}" alt="product image">
        </div>
        <div class="product-details">
          <div class="product-name">${product.name}</div>
          <div class="product-price">$${product.price}</div>
        </div>
      </div>
      <div class="product-right">
        <div class="product-quantity-container">
          <button id="btn_rmv" class="btn" type="button">-</button>
          <input id="product-quantity-input" type="number" min="1" max="100" value=${quantity}>
          <button id="btn_add" class="btn" type="button">+</button>
        </div>
        <button id="btn-delete" class="btn-delete" type="button"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    `
    const btnDel = productRowEl.querySelector("#btn-delete")
    const btnAdd = productRowEl.querySelector("#btn_add")
    const btnRmv = productRowEl.querySelector("#btn_rmv")
    const cartQntInput = productRowEl.querySelector("#product-quantity-input")

    btnAdd.addEventListener('click', ()=> {
        cartQntInput.value++
        handleChangeInputCart()
    })

    btnRmv.addEventListener('click', ()=> {
        if(cartQntInput.value > 1){
            cartQntInput.value--
            handleChangeInputCart()
        }
    })

    cartQntInput.addEventListener('keydown',(e)=>{
        !inputKeyIsNumber(e.keyCode)
            && e.preventDefault()
    })

    cartQntInput.addEventListener('input', handleChangeInputCart)
    function handleChangeInputCart(){
        validInputNumber(cartQntInput.value)
            && (cartQntInput.value='1')
        !product.checkStock(cartQntInput.value)
            && (cartQntInput.value = product.quantity)
        cart.updateQuantity(product.id, cartQntInput.value)
    }

    btnDel.addEventListener('click', ()=>{
        cart.removeProduct(product.id)
        showEmptyCartMessage()
        productRowEl.remove()
    })

    return productRowEl
}