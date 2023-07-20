import {getProductsFromLocalStorage} from "../logic/LocalStorage.js";

export function getProductById(id){
    const allProducts = getProductsFromLocalStorage()
    return allProducts.find(product => product.id === id)
}