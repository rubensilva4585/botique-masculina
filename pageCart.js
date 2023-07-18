import './reset.css'
import './style.css'

import { setNavBar } from './components/navbar/navbar'
import {createCartGrid} from './components/cart/cart'
import {createPageTitle} from "./components/createPageTitle.js"
import {addProductToCartPage} from "./components/cart/cartRow.js"
import {getProductsFromLocalStorage} from "./logic/LocalStorage.js";

setNavBar()

const containerEl = document.createElement('div')
containerEl.classList.add('container')
document.querySelector('main').appendChild(containerEl)
containerEl.appendChild(createPageTitle('Your Cart'))
containerEl.appendChild(createCartGrid())

//testar cartRow
let allProducts = getProductsFromLocalStorage()
console.log(allProducts)
const productsInCart = containerEl.querySelector('.item-list')
productsInCart.appendChild(addProductToCartPage(allProducts[0]))
productsInCart.appendChild(addProductToCartPage(allProducts[2]))