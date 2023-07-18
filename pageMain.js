import './reset.css'
import './style.css'

import { setNavBar } from './components/navbar/navbar'
import {createShopGrid} from './components/shopgrid/shop'
import {saveProductsOnLocalStorage} from "./logic/LocalStorage.js";
import {getAllProductsAPI} from "./services/getProductsAPI.js";
import {createProductCard} from "./components/shopgrid/productCard.js";
import {createPageTitle} from "./components/createPageTitle.js";

setNavBar()

const containerEl = document.createElement('div')
containerEl.classList.add('container')
document.querySelector('main').appendChild(containerEl)
containerEl.appendChild(createPageTitle('Our Products'))
containerEl.appendChild(createShopGrid())

const productsGridEl = document.querySelector('.products-grid')

let allProducts = await getAllProductsAPI()

await saveProductsOnLocalStorage(allProducts)



await allProducts.map((product)=>{
    productsGridEl.appendChild(createProductCard(product))
})
