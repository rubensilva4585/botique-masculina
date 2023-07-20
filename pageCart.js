import './reset.css'
import './style.css'

import { setNavBar } from './components/navbar/navbar'
import {createCartGrid} from './components/cart/cart'
import {createPageTitle} from "./components/createPageTitle.js"
import {Cart} from "./models/Cart.js";

setNavBar()

export const cart = new Cart()
cart.getFromLocalStorage()

document.querySelector('main').appendChild(createCartGrid())



// //testes do cart
// let allProducts = getProductsFromLocalStorage()
// console.log(allProducts)
//
//
// cart.coupon="TPSI0922"
// cart.addProduct(allProducts[0].id, allProducts[0].quantity)
// cart.addProduct(allProducts[1].id, allProducts[1].quantity)
// cart.saveOnLocalStorage()
//
// //testar check coupon
// console.log(await checkCouponAPI(cart.coupon))

