import {checkCouponAPI} from "../../services/ProductsAPI.js";
import {cart} from "../../pageCart.js";

export function createCheckoutComponent(){
    const checkoutContainerEl = document.createElement('div')
    checkoutContainerEl.classList.add('payment-info')
    checkoutContainerEl.innerHTML=`
    <div class="check-coupon-container">
          <form id="formCoupon" action="">
            <input id="couponID" class="input-coupon" type="text" placeholder="Coupon code here">
            <button id="btnCheckCoupon" class="btn" type="submit">Check</button>
          </form>
        </div>
        <div id="statusMsg" class="status-msg"></div>
        <div class="container order-total-container">
          <div class="order-total-text">
            <p>Sub-total</p>
            <p>Discount</p>
            <p>Total</p>
          </div>
          <div class="order-total-values">
            <p id="cartSubTotal">${cart._getCartTotalPrice().toFixed(2)}$</p>
            <p id="cartDiscount">0%</p>
            <p id="cartTotal">${cart._getCartTotalPrice().toFixed(2)}$</p>
          </div>
        </div>
           <button id="btnCheckout" class="checkout-btn" type="submit">Checkout</button>
    `
    const formCheckCoupon= checkoutContainerEl.querySelector('#formCoupon')
    const inCouponID= checkoutContainerEl.querySelector('#couponID')
    const statusMsg= checkoutContainerEl.querySelector('#statusMsg')

    // const cartSubTotal = checkoutContainerEl.querySelector('#cartSubTotal')
    const cartDiscount = checkoutContainerEl.querySelector('#cartDiscount')
    const cartTotal = checkoutContainerEl.querySelector('#cartTotal')
    const btnCheckout= checkoutContainerEl.querySelector('#btnCheckout')
    formCheckCoupon.addEventListener('submit',(e)=>{
        e.preventDefault()
        if(inCouponID.value){
            formCheckCoupon.disabled=true
            checkCouponAPI(inCouponID.value).then((response)=>{
                if(response.success){
                    statusMsg.classList.remove('invalid')
                    statusMsg.classList.add('valid')
                    statusMsg.textContent = response.message
                    cart.coupon = inCouponID.value
                    cartDiscount.textContent = response.discount + '%'
                }
                else{
                    statusMsg.classList.remove('valid')
                    statusMsg.classList.add('invalid')
                    statusMsg.textContent = response.error
                    cartDiscount.textContent = '0%'
                }
            })
        }

    })

    return checkoutContainerEl
}