import {checkCouponAPI, checkOutAPI} from "../../services/ProductsAPI.js";
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
        <div id="statusMsgCoupon" class="status-msg"></div>
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
    const statusMsgCoupon= checkoutContainerEl.querySelector('#statusMsgCoupon')

    const cartSubTotal = checkoutContainerEl.querySelector('#cartSubTotal')
    const cartDiscount = checkoutContainerEl.querySelector('#cartDiscount')
    const cartTotal = checkoutContainerEl.querySelector('#cartTotal')
    const btnCheckout= checkoutContainerEl.querySelector('#btnCheckout')
    formCheckCoupon.addEventListener('submit',(e)=>{
        e.preventDefault()
        if(inCouponID.value){
            formCheckCoupon.disabled=true
            checkCouponAPI(inCouponID.value).then((response)=>{
                if(response.success){
                    statusMsgCoupon.classList.remove('invalid')
                    statusMsgCoupon.classList.add('valid')
                    statusMsgCoupon.textContent = response.message
                    cart.setCoupon(inCouponID.value)
                    cartDiscount.textContent = response.discount + '%'
                    cartTotal.textContent = (cart._getCartTotalPrice() *( 1 - parseInt(response.discount) / 100)).toFixed(2) + '$'
                }
                else{
                    cart.setCoupon("")
                    statusMsgCoupon.classList.remove('valid')
                    statusMsgCoupon.classList.add('invalid')
                    statusMsgCoupon.textContent = response.error
                    cartDiscount.textContent = '0%'
                    cartTotal.textContent = (cart._getCartTotalPrice()).toFixed(2) + '$'
                }
            })
        }
    })

    btnCheckout.addEventListener('click',()=>{
        checkOutAPI(cart).then((response)=>{
            if (response.success){
                alert(response.message)
                cart.clearCart()
                window.location.href = '/index.html'
            }
            else{
                cart.setCoupon("")
                alert(response.error)
            }
        })
    })

    document.addEventListener('CartChange',(e)=>{
        cartSubTotal.textContent = e.detail.totalPrice.toFixed(2) + '$'
        cart.coupon === "" ?
            cartTotal.textContent = e.detail.totalPrice.toFixed(2) + '$' :
            cartTotal.textContent = (e.detail.totalPrice * ( 1 - parseInt(cartDiscount.textContent.replace('$','')) / 100)).toFixed(2) + '$'
    })

    return checkoutContainerEl
}