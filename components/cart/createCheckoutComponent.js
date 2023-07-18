export function createCheckoutComponent(){
    const checkoutContainerEl = document.createElement('div')
    checkoutContainerEl.classList.add('payment-info')
    checkoutContainerEl.innerHTML=`
    <div class="check-coupon-container">
          <form action="">
            <input class="input-coupon" type="text" placeholder="Coupon code here">
            <button class="btn" type="submit">Check</button>
          </form>
        </div>
        <div class="container order-total-container">
          <div class="order-total-text">
            <p>Sub-total</p>
            <p>Discount</p>
            <p>Total</p>
          </div>
          <div class="order-total-values">
            <p>€</p>
            <p>%</p>
            <p>€</p>
          </div>
        </div>
    `

    return checkoutContainerEl
}