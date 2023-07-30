import {showProductModal} from './productModal.js'

const productsGridEl = document.querySelector('.products-grid')

export const starsContainerEl =(rating)=>{
    const container = document.createElement('div')
    for (let i = 0; i < 5; i++) {
        container.innerHTML += i <= parseInt(rating) ? '<i class="fas fa-xs fa-star"></i>' : '<i class="far fa-xs fa-star"></i>'
    }
    return container.innerHTML
}

export function createProductCard(product){
    const productCardEl = document.createElement('div')


    productCardEl.classList.add('product-card')
    productCardEl.innerHTML=`
      <div class="product-image">
        <a href="#">
          <img src=${product.image} alt="product image" />
        </a>
        <button class="product-addcart">
          <i class="fa-solid fa-cart-plus"></i>
        </button>
      </div>
      <div class="product-info">
        <h5 class="product-name">${product.name}</h5>
        <div class="product-pricenrating">
          <h6 class="product-price">$${product.price}</h6>
          <div class="product-rating">
              ${starsContainerEl(product.rating)}
           </div>
        </div>
      </div>
    `

    // const buttonAddCart = productCardEl.querySelector(".product-addcart")
    productCardEl.addEventListener('click', ()=> {
        // alert(product.name);
        showProductModal(product)
    })
    return productCardEl
}