export function addProductToCartPage(product){
    console.log(product.price)
    const productRowEl = document.createElement('div')
    productRowEl.classList.add('product')
    productRowEl.innerHTML=`
    <div class="product-image"><img src="${product.image}" alt="product image"></div>
          <div class="product-name">${product.name}</div>
          <div class="product-price">$${product.price}</div>
          <div class="product-quantity-container">
            <button class="btn" type="button">-</button>
            <input id=product-quantity-input type="number" min="1" max="100">
            <button class="btn" type="button">+</button>
          </div>
          <div class="product-total hidden"></div>
    `
    const productQuantityEl = productRowEl.querySelector('#product-quantity-input')
    const totalProductPrice = productRowEl.querySelector('.product-total')
    productQuantityEl.addEventListener('input', ()=>{
        totalProductPrice.text = parseInt(product.price)*parseInt(productQuantityEl.text)
    })

    return productRowEl
}