import '../../styles/productModal.css'
import '../../styles/receiptModal.css'
import {getProductById} from "../../utils/getProductById.js"

export function showReceiptModal(cart, discount, message){
    const receiptModal = document.createElement('div')
    receiptModal.classList.add('product-modal')

    const receiptModalContent = document.createElement('div')
    receiptModalContent.classList.add('receipt-modal-content')
    receiptModal.appendChild(receiptModalContent)

    const receiptTitle = document.createElement('div')
    receiptTitle.textContent = message
    receiptTitle.classList.add('modal-title')
    receiptModalContent.appendChild(receiptTitle)

    const productSection = document.createElement('div')
    productSection.classList.add('product-section')
    receiptModalContent.appendChild(productSection)

    cart.products.map((productInCart)=>{
        const product = getProductById(productInCart.id)
        const productRowReceipt = document.createElement('div')
        productRowReceipt.classList.add('product')
        productRowReceipt.innerHTML = `
          <div class="product-left">
            <div class="product-image">
              <img src="${product.image}" alt="product image">
            </div>
            <div class="product-details">
              <div class="product-name">${product.name}</div>
              <div class="product-price">$${product.price} p/un.</div>
            </div>
          </div>
          <div class="product-right">
            <div class="receipt-product-quantity">x${productInCart.quantity} un</div>
            <div class="receipt-product-price">$${product.price*productInCart.quantity}</div>
          </div>
        `
        productSection.appendChild(productRowReceipt)
    })


    const detailSection = document.createElement('div')
    detailSection.innerHTML=`
      <div class="container order-total-container">
        <div class="order-total-text">
          <p>Sub-total</p>
          <p>Discount</p>
          <p>Total</p>
        </div>
        <div class="order-total-values">
          <p id="cartSubTotal">${cart._getCartTotalPrice().toFixed(2)}$</p>
          <p id="cartDiscount">${discount}%</p>
          <p id="cartTotal">${(cart._getCartTotalPrice() * ( 1 - parseInt(discount) / 100 )).toFixed(2)} $</p>
        </div>
      </div>
    `

    receiptModalContent.appendChild(detailSection)

    const receiptNote = document.createElement('div')
    receiptNote.textContent = 'We are now processing your order.'
    receiptNote.classList.add('modal-note')
    receiptModalContent.appendChild(receiptNote)

    const closeModalBtn = document.createElement('div')
    closeModalBtn.classList.add('modal-close')
    closeModalBtn.innerHTML = `<i class="fas fa-times"></i>`
    receiptModalContent.appendChild(closeModalBtn)

    closeModalBtn.addEventListener('click', ()=>{
        receiptModal.remove()
        window.location.href = '/index.html'
    })
    document.querySelector('body').appendChild(receiptModal);
}