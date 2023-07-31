import { createTeamCard } from './teamCard';
import { createPageTitle } from "../createPageTitle";
import { getAllUsers } from '../../logic/getAllUsers';

export async function createTeamGrid() {
  const teamGrid = document.createElement('div');
  teamGrid.classList.add('container');

  const teamHeader = document.createElement('div');
  teamHeader.classList.add('team-header');

  const teamContent = document.createElement('div');
  teamContent.classList.add('team');

  teamHeader.appendChild(createPageTitle('Our Team', 'Driven by Excellence'));
  teamGrid.appendChild(teamHeader);
  teamGrid.appendChild(teamContent);

  getAllUsers().then((userArray) => userArray.map((user, index) => {
    const teamCard = createTeamCard(user, 
      index == 0 
      ? 'Sales Representative' 
      : 'Customer Support Specialist');
      
    teamContent.appendChild(teamCard);
  }))

  document.querySelector("main").append(teamGrid);
}