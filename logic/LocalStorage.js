import {getAllProductsAPI} from "../services/getProductsAPI.js";

export async function saveProductsOnLocalStorage(){
    let allProducts = await getAllProductsAPI()
    allProducts = allProducts.map((product)=>product.stringify())
    localStorage.setItem("storedProducts",JSON.stringify(allProducts))
}

export function getProductsFromLocalStorage(){
    let productsList = JSON.parse(localStorage.getItem("storedProducts"))
    productsList = productsList.map((product)=>JSON.parse(product))
    return productsList
}