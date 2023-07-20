import {addProductToCartPage} from '../cart/cartRow.js'

const productsGridEl = document.querySelector('.products-grid')
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
                  <i class="fas fa-xs fa-star"></i>
                  <i class="fas fa-xs fa-star"></i>
                  <i class="far fa-xs fa-star"></i>
                  <i class="far fa-xs fa-star"></i>
                  <i class="far fa-xs fa-star"></i>
                </div>
              </div>
            </div>
    `

    // const buttonAddCart = productCardEl.querySelector(".product-addcart")
    // buttonAddCart.addEventListener('onclick', ()=>{
    //     addProductToCart(product)
    // })
    return productCardEl
}


