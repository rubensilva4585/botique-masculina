import './reset.css'
import './style.css'
import { setNavBar } from './components/navbar/navbar'
import { setFooter } from './components/footer/footer'
import { createTeamGrid } from './components/contact/teamGrid'


setNavBar();

const main = document.querySelector('main');

const teamGrid = await createTeamGrid();
main.appendChild(teamGrid);


setFooter();