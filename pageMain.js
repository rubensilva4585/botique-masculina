import './reset.css'
import './style.css'

import { setNavBar } from './components/navbar/navbar'
import { setFooter } from "./components/footer/footer.js";
import {createShopGrid} from './components/shopgrid/shop'
import {createProductCard} from "./components/shopgrid/productCard.js";
import {getAllProducts} from "./logic/getAllProducts.js";
import {Cart} from "./models/Cart.js";

setNavBar()
console.log('CONA')
export const cart = new Cart()
cart.getFromLocalStorage()
console.log(cart)

document.querySelector('main').appendChild(createShopGrid())

const productsGridEl = document.querySelector('.products-grid')
getAllProducts(true).then((allProducts)=>{
    allProducts.map((product)=>{
        productsGridEl.appendChild(createProductCard(product))
    })
})

setFooter()