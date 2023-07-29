import '../../styles/productModal.css'
import {cart} from "../../pageMain.js";
import {inputKeyIsNumber} from "../../utils/inputKeyIsNumber.js";
export function showProductModal(product){
    const body = document.querySelector('body')

    const productModal = document.createElement('div')
    productModal.classList.add('product-modal')
    productModal.innerHTML=`
        <div class="modal-content">
            <div class="modal-product-image">
                <a href="#">
                <img src=${product.image} alt="product image" />
                </a>
            </div>
            <div class="modal-product-info">
                <div>
                    <h5 class="product-name">${product.name}</h5>
                    <div class="product-rating">
                        <i class="fas fa-xs fa-star"></i>
                        <i class="fas fa-xs fa-star"></i>
                        <i class="far fa-xs fa-star"></i>
                        <i class="far fa-xs fa-star"></i>
                        <i class="far fa-xs fa-star"></i>
                    </div>
                    <h5 class="product-description">${product.description}</h5>
                </div>
                <div class="priceAndAddCart">   
                    <h6 class="product-price">$${product.price}</h6>
                    <div class="buttons-addcart">
                        <div class="product-quantity-container">
                            <button id="btn_rmv" class="btn" type="button">-</button>
                            <input id="product-quantity-input" type="number" min="1" max="100" value=1>
                            <button id="btn_add" class="btn" type="button">+</button>
                        </div>
                        <button id="btn-addCart" class="btn-addCart" type="button">Add Cart</button>
                    </div>
                </div>
            </div>

            <div class="modal-close">
                <i class="fas fa-times"></i>
            </div>
        </div>
    `

    const buttonCloseModal = productModal.querySelector(".modal-close")
    buttonCloseModal.addEventListener('click', ()=> {
        productModal.remove();
    })

    const btnAdd = productModal.querySelector("#btn_add")
    const btnRmv = productModal.querySelector("#btn_rmv")
    const qntInput = productModal.querySelector("#product-quantity-input")

    btnAdd.addEventListener('click', ()=> {
        qntInput.value++;
    })

    btnRmv.addEventListener('click', ()=> {
        if(qntInput.value > 1){
            qntInput.value--;
        }
    })

    const btnAddCart = productModal.querySelector("#btn-addCart")
    btnAddCart.addEventListener('click', ()=> {
        cart.addProduct(product, qntInput.value)
        productModal.remove();
    })

    qntInput.addEventListener('keydown',(e)=>{
        if(!inputKeyIsNumber(e.keyCode))
            e.preventDefault()
    })

    body.appendChild(productModal);
}