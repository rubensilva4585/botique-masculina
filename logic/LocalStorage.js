export async function saveProductsOnLocalStorage(allProducts){
    allProducts = allProducts.map((product)=>product.stringify())
    localStorage.setItem("storedProducts",JSON.stringify(allProducts))
}

export function getProductsFromLocalStorage(){
    let storedProducts = JSON.parse(localStorage.getItem("storedProducts"))
    storedProducts = storedProducts.map((product)=>JSON.parse(product))
    return storedProducts
}