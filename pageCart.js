import './reset.css'
import './style.css'

import { setNavBar } from './components/navbar/navbar'
import {createCartGrid} from './components/cart/cart'
import {Cart} from "./models/Cart.js";
import {showEmptyCartMessage} from "./utils/showEmptyCartMessage.js";
import {setFooter} from "./components/footer/footer.js";

setNavBar()

export const cart = new Cart()
cart.loadFromLocalStorage()

document.querySelector('main').appendChild(createCartGrid())

showEmptyCartMessage()

setFooter()