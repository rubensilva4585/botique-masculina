export function navbarButton() {
    const navbarButtons = document.createElement('div')
    navbarButtons.classList.add('navbar-buttons') 
    navbarButtons.innerHTML = `
        <a href="cart.html" class="cartBtn">
          <div class="cartBtnPrice">
            <span>0.00€</span>
          </div>
          <div class="cartBtnItems">
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="numItems">0</span>
          </div>
        </a>
        <div class="navMobileBtn">
            <i class="fa-solid fa-bars"></i>
        </div>
    `

    // event atualizar carrinho
    const spanPrice = navbarButtons.querySelector(".cartBtnPrice span")
    const spanNumItems = navbarButtons.querySelector(".cartBtnItems .numItems")

    document.addEventListener('CartChange', (e) => {
        spanPrice.textContent = e.detail.totalPrice.toFixed(2) + "€"
        spanNumItems.textContent = e.detail.quantity
    });

    return navbarButtons
}













