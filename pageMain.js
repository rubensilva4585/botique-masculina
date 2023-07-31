import './reset.css'
import './style.css'

import { setNavBar } from './components/navbar/navbar'
import { setFooter } from "./components/footer/footer.js";
import { createShopGrid } from './components/shopgrid/shop'
import { Cart } from "./models/Cart.js";

setNavBar()

export const cart = new Cart()
cart.loadFromLocalStorage()

document.querySelector('main').appendChild(createShopGrid())

setFooter()