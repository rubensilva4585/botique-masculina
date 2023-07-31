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


    let prevCoupon = {code:'', discount:''}

    function updatePriceValues(){
        const cartTotalPrice = cart._getCartTotalPrice().toFixed(2);
        cartSubTotal.textContent = cartTotalPrice + '$'

        prevCoupon = JSON.parse(localStorage.getItem('validCoupon'))  
        prevCoupon.code && prevCoupon.discount
            ? (inCouponID.value = prevCoupon.code,
                cartDiscount.textContent = `${prevCoupon.discount}%`,
                cartTotal.textContent = (cartTotalPrice *( 1 - parseInt(prevCoupon.discount) / 100)).toFixed(2) + '$')
            : (cartDiscount.textContent = '0%',
                cartTotal.textContent = cartTotalPrice + '$')
    }
    updatePriceValues()

    formCheckCoupon.addEventListener('submit',(e)=>{
        e.preventDefault()
        if(inCouponID.value){
            formCheckCoupon.disabled=true
            checkCouponAPI(inCouponID.value).then((response)=>{
                if(!response)
                    return

                response.success
                    ? renderCheckCupon(response.message, inCouponID.value, true, response.discount)
                    : renderCheckCupon(response.error)
            })
        }
    })

    const renderCheckCupon = (msg, cupon = "", valid = false, discount = 0 ) => {
        cart.setCoupon(cupon)
        localStorage.setItem('validCoupon', JSON.stringify({code: cupon, discount: discount}))

        statusMsgCoupon.classList.toggle('invalid', !valid);
        statusMsgCoupon.classList.toggle('valid', valid);

        statusMsgCoupon.textContent = msg
        updatePriceValues()
    }

    btnCheckout.addEventListener('click',(e)=>{
        if (cart.products.length !== 0){
            checkOutAPI(cart).then((response) => {
                if (response.success){
                    alert(response.message)
                    cart.clearCart()
                    localStorage.setItem('validCoupon', JSON.stringify({code: '', discount: '' }))
                    window.location.href = '/index.html'
                }
                else{
                    cart.setCoupon("")
                    alert(response.error)
                }
            })
            return
        }
        alert('Your cart is empty!')
    })

    document.addEventListener('CartChange', updatePriceValues)

    return checkoutContainerEl
}