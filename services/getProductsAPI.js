import {Product} from "../models/Product.js";

export async function getAllProductsAPI() {
        try {
                let response = await fetch('http://127.0.0.1:3333/products')
                let data = await response.json()
                return data.map((product) => new Product(product))
        }
        catch (error){
                console.log('There was an error getting products')
                throw error;
        }
}

