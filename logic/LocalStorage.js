const value = "storedProducts";

export function saveProductsOnLocalStorage(allProducts) {
    allProducts = allProducts.map((product) => product.stringify())
    localStorage.setItem(value, JSON.stringify(allProducts))
}

export function getProductsFromLocalStorage() {
    let storedProducts = JSON.parse(localStorage.getItem(value))
    storedProducts = storedProducts.map((product) => JSON.parse(product))
    return storedProducts
}

const value2 = "storedUsers";

export function saveUsersOnLocalStorage(allUsers) {
    allUsers = allUsers.map((user) => user.stringify())
    localStorage.setItem(value2, JSON.stringify(allUsers))
}

export function getUsersFromLocalStorage() {
    let storedUsers = JSON.parse(localStorage.getItem(value2))
    storedUsers = storedUsers.map((user) => JSON.parse(user))
    return storedUsers
}