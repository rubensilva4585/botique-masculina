import {} from "./Product.js"

export class Cart {
    constructor(products, coupon = ""){
            this.products = products
            this.coupon = coupon
    }
}