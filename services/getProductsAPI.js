import {Product} from "../models/Product.js";

export async function getAllProductsAPI() {
        let response = await fetch('http://127.0.0.1:3333/products')
        let data = await response.json()
        console.log(data)
        let allProducts = data.map((product) => new Product(
            product.id,
            product.name,
            product.description,
            product.image,
            product.price,
            product.quantity
        ));
        console.log(allProducts)

}

// export async function getAllProductsAPI() {
//     try {
//         let response = await fetch('http://127.0.0.1:3333/products')
//         let data = await response.json()
//         let allProducts = data.map(()=>new Product({data}))
//         console.log(allProducts)
//     }
//     catch (error){
//         console.log('There was an error getting products')
//     }
// }