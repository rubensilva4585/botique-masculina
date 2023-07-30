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
        cartSubTotal.textContent = cart._getCartTotalPrice().toFixed(2) + '$'
        cart.coupon === "" ?
            cartTotal.textContent = cart._getCartTotalPrice().toFixed(2) + '$'
            :
            (localStorage.getItem('validCoupon') !== null && (prevCoupon = JSON.parse(localStorage.getItem('validCoupon'))),
                prevCoupon.code!=='' && prevCoupon.discount!=='' ? (inCouponID.value = prevCoupon.code,
                        cartDiscount.textContent = `${prevCoupon.discount}%`,
                        cartTotal.textContent = (cart._getCartTotalPrice() *( 1 - parseInt(cartDiscount.textContent) / 100)).toFixed(2) + '$' )
                    : (inCouponID.value = '', cartDiscount.textContent = '0%'))
    }
    updatePriceValues()

    formCheckCoupon.addEventListener('submit',(e)=>{
        e.preventDefault()
        if(inCouponID.value){
            formCheckCoupon.disabled=true
            checkCouponAPI(inCouponID.value).then((response)=>{
                if(!response){
                    return
                }
                if(response.success){
                    statusMsgCoupon.classList.remove('invalid')
                    statusMsgCoupon.classList.add('valid')
                    statusMsgCoupon.textContent = response.message
                    cart.setCoupon(inCouponID.value)
                    cartDiscount.textContent = response.discount + '%'
                    cartTotal.textContent = (cart._getCartTotalPrice() *( 1 - parseInt(response.discount) / 100)).toFixed(2) + '$'
                    localStorage.setItem('validCoupon',JSON.stringify({code: inCouponID.value, discount: response.discount }))
                }
                else{
                    cart.setCoupon("")
                    localStorage.setItem('validCoupon',JSON.stringify({code: '', discount: '' }))
                    statusMsgCoupon.classList.remove('valid')
                    statusMsgCoupon.classList.add('invalid')
                    statusMsgCoupon.textContent = response.error
                    cartDiscount.textContent = '0%'
                    cartTotal.textContent = (cart._getCartTotalPrice()).toFixed(2) + '$'
                }
            })
        }
    })

    btnCheckout.addEventListener('click',(e)=>{
        if (cart.products.length!==0){
        checkOutAPI(cart).then((response)=>{
            if (response.success){
                alert(response.message)
                cart.clearCart()
                localStorage.setItem('validCoupon',JSON.stringify({code: '', discount: '' }))
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

    document.addEventListener('CartChange',(e)=>{
        updatePriceValues()
    })

    return checkoutContainerEl
}