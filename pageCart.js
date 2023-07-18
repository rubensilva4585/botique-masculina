import './reset.css'
import './style.css'

import { setNavBar } from './components/navbar/navbar'
import {createCartGrid} from './components/cart/cart'
import {createPageTitle} from "./components/createPageTitle.js"
import {addProductToCartPage} from "./components/cart/cartRow.js"
import {getProductsFromLocalStorage} from "./logic/LocalStorage.js";
import {Cart} from "./models/Cart.js";

setNavBar()

const containerEl = document.createElement('div')
containerEl.classList.add('container')
document.querySelector('main').appendChild(containerEl)
containerEl.appendChild(createPageTitle('Your Cart'))
containerEl.appendChild(createCartGrid())


//testes do cart
let allProducts = getProductsFromLocalStorage()
console.log(allProducts)

let cart = new Cart([{id: allProducts[0].id, quantity: allProducts[0].quantity},{id: allProducts[1].id, quantity: allProducts[1].quantity}])
console.log(cart)
const productsInCart = containerEl.querySelector('.item-list')
productsInCart.appendChild(addProductToCartPage(allProducts[0]))
productsInCart.appendChild(addProductToCartPage(allProducts[2]))