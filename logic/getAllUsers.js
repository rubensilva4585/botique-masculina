import { getRandomUserAPI } from '../services/getUserAPI'
import {getUsersFromLocalStorage, saveUsersOnLocalStorage} from "../localStorage/usersLocalStorage.js"

export async function getAllUsers() {
    if (localStorage.getItem("storedUsers") === null) {
        const allUsers = await getRandomUserAPI()
        saveUsersOnLocalStorage(allUsers)
        return allUsers
    } else {
        return getUsersFromLocalStorage()
    }
}