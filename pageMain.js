import './reset.css'
import './style.css'

import { setNavBar } from './components/navbar/navbar'
import { setFooter } from "./components/footer/footer.js";
import {createShopGrid} from './components/shopgrid/shop'
import {saveProductsOnLocalStorage} from "./logic/LocalStorage.js";
import {getAllProductsAPI} from "./services/getProductsAPI.js";
import {createProductCard} from "./components/shopgrid/productCard.js";

setNavBar()

document.querySelector('main').appendChild(createShopGrid())

const productsGridEl = document.querySelector('.products-grid')
let allProducts = await getAllProductsAPI()
await saveProductsOnLocalStorage(allProducts)
await allProducts.map((product)=>{
    productsGridEl.appendChild(createProductCard(product))
})

setFooter()