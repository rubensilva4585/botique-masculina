import {checkCouponAPI, checkOutAPI} from "../../services/ProductsAPI.js";
import {cart} from "../../pageCart.js";
import {getCouponFromLocalStorage, saveCouponOnLocalStorage} from "../../localStorage/couponLocalStorage.js";
import {showReceiptModal} from "./receiptModal.js";

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
    const formCheckCoupon   = checkoutContainerEl.querySelector('#formCoupon')
    const inCouponID        = checkoutContainerEl.querySelector('#couponID')
    const statusMsgCoupon   = checkoutContainerEl.querySelector('#statusMsgCoupon')

    const cartSubTotal      = checkoutContainerEl.querySelector('#cartSubTotal')
    const cartDiscount      = checkoutContainerEl.querySelector('#cartDiscount')
    const cartTotal         = checkoutContainerEl.querySelector('#cartTotal')
    const btnCheckout       = checkoutContainerEl.querySelector('#btnCheckout')

    function updatePriceValues(){
        const cartTotalPrice = cart._getCartTotalPrice().toFixed(2);
        cartSubTotal.textContent = cartTotalPrice + '$'

        const prevCoupon = getCouponFromLocalStorage()

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
                    ? renderCheckCoupon(response.message, inCouponID.value, true, response.discount)
                    : renderCheckCoupon(response.error)
            })
        }
    })

    const renderCheckCoupon = (msg, coupon = "", valid = false, discount = 0 ) => {
        cart.setCoupon(coupon)
        saveCouponOnLocalStorage(coupon, discount)

        statusMsgCoupon.classList.toggle('invalid', !valid);
        statusMsgCoupon.classList.toggle('valid', valid);

        statusMsgCoupon.textContent = msg
        updatePriceValues()
    }

    btnCheckout.addEventListener('click',()=>{
        if (cart.products.length !== 0){
            checkOutAPI(cart).then((response) => {
                if (response.success){
                    showReceiptModal(cart, getCouponFromLocalStorage().discount, response.message)
                    cart.clearCart()
                    saveCouponOnLocalStorage()
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