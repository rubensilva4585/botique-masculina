import { getRandomUserAPI } from '../services/getUserAPI'
import {getUsersFromLocalStorage, saveUsersOnLocalStorage} from "../localStorage/usersLocalStorage.js"

export async function getAllUsers(refresh = false) {
    if (localStorage.getItem("storedUsers") === null || refresh) {
        const allUsers = await getRandomUserAPI()
        saveUsersOnLocalStorage(await allUsers)
        return allUsers
    } else {
        return getUsersFromLocalStorage()
    }
}