import './reset.css'
import './style.css'

import { setNavBar } from './components/navbar/navbar'
import {createCartGrid} from './components/cart/cart'
import {Cart} from "./models/Cart.js";

setNavBar()

export const cart = new Cart()
cart.loadFromLocalStorage()

document.querySelector('main').appendChild(createCartGrid())