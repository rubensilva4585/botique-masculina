import { Product } from "../models/Product.js";

const value = "storedProducts"

export function saveProductsOnLocalStorage(allProducts) {
    allProducts = allProducts.map((product) => product.stringify())
    localStorage.setItem(value, JSON.stringify(allProducts))
}

export function getProductsFromLocalStorage() {
    let storedProducts = JSON.parse(localStorage.getItem(value))
    storedProducts = storedProducts.map((product) => new Product(JSON.parse(product)))
    return storedProducts
}