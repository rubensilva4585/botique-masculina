import {Product} from "../models/Product.js"

const urlApi = "http://127.0.0.1:3333"

export async function getAllProductsAPI() {
        try {
                let response = await fetch(urlApi + '/products')
                let data = await response.json()
                return data.map((product) => new Product(product))
        }
        catch (error){
                alert(error.message)
        }
}

export async function checkCouponAPI(coupon){
        try {
                const response = (await fetch(urlApi + '/check-coupon', {
                        method: "POST",
                        headers: {
                                "Content-Type": "application/json",
                        },
                        body: JSON.stringify({couponCode: coupon})
                }))
                return response.json()
        }
        catch (error){
                alert(error.message)
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
                })
                return response.json()
        }
        catch (error){
                alert(error.message)
        }
}

