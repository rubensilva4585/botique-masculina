const value = "storedUsers"

export function saveUsersOnLocalStorage(allUsers) {
    allUsers = allUsers.map((user) => user.stringify())
    localStorage.setItem(value, JSON.stringify(allUsers))
}

export function getUsersFromLocalStorage() {
    let storedUsers = JSON.parse(localStorage.getItem(value))
    storedUsers = storedUsers.map((user) => JSON.parse(user))
    return storedUsers
}