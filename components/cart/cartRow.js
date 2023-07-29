import {cart} from "../../pageCart.js";
import {inputKeyIsNumber} from "../../utils/inputKeyIsNumber.js";
import {Product} from "../../models/Product.js";

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
    const qntInput = productRowEl.querySelector("#product-quantity-input")

    btnAdd.addEventListener('click', ()=> {
        qntInput.value++
        handleChangeInput()
    })

    btnRmv.addEventListener('click', ()=> {
        if(qntInput.value > 1){
            qntInput.value--
            handleChangeInput()
        }
    })

    qntInput.addEventListener('keydown',(e)=>{
        if(!inputKeyIsNumber(e.keyCode))
            e.preventDefault()
    })

    qntInput.addEventListener('input', handleChangeInput)
    function handleChangeInput(){
        isNaN(qntInput.value) || qntInput.value==="" && (qntInput.value='1')
        product.checkStock(qntInput.value) ? cart.updateQuantity(product, qntInput.value) : qntInput.value--
    }

    btnDel.addEventListener('click', ()=>{
        cart.removeProduct(product.id)
        productRowEl.remove()
    })

    return productRowEl
}