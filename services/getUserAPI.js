import { User } from '../models/User.js';

export async function getRandomUserAPI() {
    try {
        let response = await fetch('https://randomuser.me/api/?results=2');
        let data = await response.json();
        return data.results.map((user) => new User(`${user.name.first} ${user.name.last}`, user.picture.large));
    }
    catch (error) {
        console.log('There was an error getting a random user')
    }
}