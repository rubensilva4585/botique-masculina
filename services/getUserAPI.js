import { User } from '../models/User.js';

export async function getRandomUserAPI() {
    try {
        const userArray = [];
        let response = await fetch('https://randomuser.me/api/?results=2');
        let data = await response.json();
        data.results.map((user) => {
            const randomUser = new User(`${user.name.first} ${user.name.last}`, user.picture.large);
            userArray.push(randomUser);
        });
        console.log(userArray);
        return userArray;
    }
    catch (error) {
        console.log('There was an error getting a random user')
    }
}