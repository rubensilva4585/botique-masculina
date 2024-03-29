import { getAllProductsAPI } from "../services/ProductsAPI.js"
import { saveProductsOnLocalStorage, getProductsFromLocalStorage } from "../localStorage/productsLocalStorage.js"

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