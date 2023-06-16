import { User } from '../models/User.js';

export async function getRandomUserAPI() {
    let response = await fetch('https://randomuser.me/api/');
    let data = await response.json();
    const randomUser = new User(`${data.results[0].name.first} ${data.results[0].name.last}`, data.results[0].picture.large);
    return randomUser;
}