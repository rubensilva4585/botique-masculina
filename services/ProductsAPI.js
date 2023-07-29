import {Product} from "../models/Product.js"

const urlApi = "http://127.0.0.1:3333";

export async function getAllProductsAPI() {
        try {
                let response = await fetch(urlApi + '/products')
                let data = await response.json()
                return data.map((product) => new Product(product))
        }
        catch (error){
                if (response.status===500){
                        alert(error.message)
                        throw new Error('We are sorry. There was an internal server error, please try reloading the page.')
                }
        }
        let response = await fetch(urlApi + '/products')

        console.log(await response)
        let data = await response.json()
        return data.map((product) => new Product(product))
}

export async function checkCouponAPI(coupon){
        try {
                const response = await fetch(urlApi + '/check-coupon', {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json",
                        },
                       body: JSON.stringify({couponCode: coupon})
                });
                return response.json()
        }
        catch (error){
                console.log('There was an error checking your coupon.')
                throw error;
        }
}

export async function checkOutAPI(cart){
        try {
                const response = await fetch(urlApi + '/checkout', {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json",
                        },
                        body: JSON.stringify(cart)
                });
                return response.json()
        }
        catch (error){
                console.log('There was an error checking your coupon.')
                throw error;
        }
}

