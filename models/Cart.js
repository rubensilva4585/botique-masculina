import {Product} from "./Product.js"
import {dispatchCartChangeEvent} from "../events/dispatchCartChangeEvent.js";
import {getProductById} from "../utils/getProductById.js"

export class Cart {
    constructor(products = [], coupon = ""){
            this.products = products
            this.coupon = coupon
    }

    setCoupon(coupon){
        this.coupon = coupon
        this.saveOnLocalStorage()
    }
    addProduct(product, quantityToAdd){
        product = new Product(getProductById(product.id))
        const productInCart = this.products.find((productInCart)=> productInCart.id === product.id)
        productInCart
            ? (product.checkStock(parseInt(quantityToAdd) + parseInt(productInCart.quantity))
                && (this.updateQuantity(productInCart.id,parseInt(quantityToAdd) + parseInt(productInCart.quantity))))
            : product.checkStock(quantityToAdd) && (this.products.push({id: product.id, quantity: quantityToAdd}))

        dispatchCartChangeEvent(this._getTotalQuantity(), this._getCartTotalPrice())
        this.saveOnLocalStorage()
    }

    removeProduct(id){
        const index = this.products.findIndex(product => product.id === id)
        index !== -1
            && (this.products.splice(index, 1))

        dispatchCartChangeEvent(this._getTotalQuantity(), this._getCartTotalPrice())
        this.saveOnLocalStorage()
    }

    clearCart(){
        this.products = []
        this.coupon = ""
        dispatchCartChangeEvent(this._getTotalQuantity(), this._getCartTotalPrice())
        this.saveOnLocalStorage()
    }

    updateQuantity(id, newQuantity){
        this.products[this.products.findIndex(productInCart => productInCart.id === id)].quantity = newQuantity
        dispatchCartChangeEvent(this._getTotalQuantity(),this._getCartTotalPrice())
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

    loadFromLocalStorage(){
        const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))
        if (cartLocalStorage){
            const {products, coupon} = cartLocalStorage
            this.coupon=coupon
            this.products=products
            dispatchCartChangeEvent(this._getTotalQuantity(), this._getCartTotalPrice())
        }
    }
}