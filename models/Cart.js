import {} from "./Product.js"
import {dispatchCartChangeEvent} from "../events/dispatchCartChangeEvent.js";
import {getProductById} from "../utils/getProductById.js"

export class Cart {
    constructor(products = [], coupon = ""){
            this.products = products
            this.coupon = coupon
    }

    addProduct(id, quantity){
        const productInCart = this.products.find((productInCart)=> productInCart.id === id)
        if(productInCart)
            productInCart.quantity = parseInt(quantity) + parseInt(productInCart.quantity)
        else
            this.products.push({id, quantity})

        dispatchCartChangeEvent(this._getTotalQuantity(), this._getCartTotalPrice())
        this.saveOnLocalStorage()
    }

    removeProduct(id){
        const index = this.products.findIndex(product => product.id === id)
        if( index !== -1)
            this.products.splice(index, 1);

        dispatchCartChangeEvent(this._getTotalQuantity(), this._getCartTotalPrice())
        this.saveOnLocalStorage()
    }

    clearCart(){
        this.products = []
        this.coupon = ""
        dispatchCartChangeEvent(this._getTotalQuantity(), this._getCartTotalPrice())
        this.saveOnLocalStorage()
    }

    updateQuantity(id, quantity){
        this.products[this.products.findIndex(product => product.id === id)].quantity = quantity
        dispatchCartChangeEvent(this._getTotalQuantity(), this._getCartTotalPrice())
        this.saveOnLocalStorage()
    }


    _getTotalQuantity(){
        let quantity = 0
        for(const product of this.products){
            quantity += parseInt(product.quantity)
        }
        return quantity
    }

    _getCartTotalPrice(){
        let totalPrice= 0
        for(const product of this.products){
            totalPrice += parseFloat(getProductById(product.id).price)*parseInt(product.quantity)
        }
        return totalPrice
    }
    saveOnLocalStorage(){
        localStorage.setItem('cart',JSON.stringify(this))
    }

    getFromLocalStorage(){
        const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))
        if (cartLocalStorage){
            const {products, coupon} = cartLocalStorage
            this.coupon=coupon
            this.products=products
            dispatchCartChangeEvent(this._getTotalQuantity(), this._getCartTotalPrice())
        }
    }
}