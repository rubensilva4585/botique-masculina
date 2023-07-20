import './reset.css'
import './style.css'

import { setNavBar } from './components/navbar/navbar'
import { setFooter } from "./components/footer/footer.js";
import {createShopGrid} from './components/shopgrid/shop'
import {createProductCard} from "./components/shopgrid/productCard.js";
import {getAllProducts} from "./logic/getAllProducts.js";

setNavBar()

document.querySelector('main').appendChild(createShopGrid())

const productsGridEl = document.querySelector('.products-grid')
getAllProducts(true).then((allProducts)=>{
    allProducts.map((product)=>{
        productsGridEl.appendChild(createProductCard(product))
    })
})

setFooter()