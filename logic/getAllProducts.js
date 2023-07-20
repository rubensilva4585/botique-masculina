import { getAllProductsAPI } from "../services/getProductsAPI.js"
import { saveProductsOnLocalStorage, getProductsFromLocalStorage } from "./LocalStorage.js"

export async function getAllProducts(refresh = false)
{
    if (localStorage.getItem("storedProducts") === null || refresh){
        const allProducts = await getAllProductsAPI()
        saveProductsOnLocalStorage(await allProducts)
        return allProducts
    } else {
        return getProductsFromLocalStorage()
    }
}