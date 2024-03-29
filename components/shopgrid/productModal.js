import '../../styles/productModal.css'
import { cart } from "../../pageMain.js";
import { inputKeyIsNumber } from "../../utils/inputKeyIsNumber.js";
import { starsContainerEl } from "./productCard.js";
import { validInputNumber } from "../../utils/validInputNumber.js";

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
                        ${starsContainerEl(product.rating)}
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

    productModal.querySelector(".modal-close")
        .addEventListener('click', () => productModal.remove())

    const btnAdd        = productModal.querySelector("#btn_add")
    const btnRmv        = productModal.querySelector("#btn_rmv")
    const qntInput      = productModal.querySelector("#product-quantity-input")
    const btnAddCart    = productModal.querySelector("#btn-addCart")

    const productInCart = cart.products.find((productInCart) => productInCart.id === product.id)

    productInCart
        && parseInt(productInCart.quantity) === parseInt(product.quantity)
        && (btnAdd.disabled     = true,
            btnRmv.disabled     = true,
            qntInput.disabled   = true,
            btnAddCart.disabled = true)

    btnAdd.addEventListener('click', ()=> {
        qntInput.value++;
        handleChangeInput()
    })

    btnRmv.addEventListener('click', ()=> {
        if(qntInput.value > 1){
            qntInput.value--;
            handleChangeInput()
        }
    })

    qntInput.addEventListener('keydown',(e)=>{
        if(inputKeyIsNumber(e.keyCode))
            return
            
        e.preventDefault()
    })
    
    qntInput.addEventListener('input', handleChangeInput)

    function handleChangeInput(){''
        validInputNumber(qntInput.value)
            && (qntInput.value = '1')

        productInCart
            ? !product.checkStock(parseInt(qntInput.value) + parseInt(productInCart.quantity))
                && (qntInput.value = Math.abs(product.quantity - productInCart.quantity))
            : !product.checkStock(qntInput.value) 
                && (qntInput.value = product.quantity)
    }

    btnAddCart.addEventListener('click', ()=> {
        cart.addProduct(product, qntInput.value)
        productModal.remove();
    })

    body.appendChild(productModal);
}