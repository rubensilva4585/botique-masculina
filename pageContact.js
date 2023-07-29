import './reset.css'
import './style.css'
import { setNavBar } from './components/navbar/navbar'
import { createContactFormGrid } from './components/contact/contactGrid'
import { createTeamGrid } from './components/contact/teamGrid'
import { setFooter } from './components/footer/footer'
import { Cart } from './models/Cart'

setNavBar();

const cart = new Cart();
cart.loadFromLocalStorage();

createContactFormGrid();
createTeamGrid();

setFooter();