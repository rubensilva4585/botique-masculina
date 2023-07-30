import './reset.css'
import './style.css'
import './styles/contact.css';
import { setNavBar } from './components/navbar/navbar'
import { createContactBanner } from './components/contact/contactBanner'
import { createContactFormGrid } from './components/contact/contactGrid'
import { createTeamGrid } from './components/contact/teamGrid'
import { setFooter } from './components/footer/footer'
import { Cart } from './models/Cart'

setNavBar();

const cart = new Cart();
cart.loadFromLocalStorage();

createContactBanner();
createContactFormGrid();
createTeamGrid();

setFooter();