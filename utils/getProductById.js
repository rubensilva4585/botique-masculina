import { getProductsFromLocalStorage } from "../localStorage/productsLocalStorage.js";

export function getProductById(id){
    const allProducts = getProductsFromLocalStorage()
    return allProducts.find(product => product.id === id)
}