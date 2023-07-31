import './reset.css'
import './style.css'

import { setNavBar } from './components/navbar/navbar' 
import { createGalleryGrid } from './components/aboutus/gallery'
import { createAboutUs } from './components/aboutus/aboutus'
import { setFooter } from "./components/footer/footer";
import { Cart } from "./models/Cart.js";

setNavBar()

export const cart = new Cart()
cart.loadFromLocalStorage()

const main = document.querySelector('main')
main.appendChild(createAboutUs())
main.appendChild(createGalleryGrid())

setFooter()