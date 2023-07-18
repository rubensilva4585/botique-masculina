// class Cart {
//     constructor(cart) {
//         this.cart = cart
//     }
//
//     static getInstance(cart) {
//         if (!this.instance) {
//             this.instance = new Cart(cart)
//         }
//
//         return this.instance;
//     }
// }

import {} from "./Product.js"
// Class that holds a collection of players and properties and functions for the group
class Cart {
    constructor(){
        this.cart = []
    }
    // create a new player and save it in the collection
    addProductToCart(product){
        this.cart.push({product:getID()})
        return p
    }
    getCart(){
        return this.cart
    }
    // this could include summary stats like average score, etc. For simplicy, just the count for now
    get numberOfPlayers(){
        return this.players.length
    }
}

let cart1 = Cart.getInstance('mysqldb1')
let cart2 = Cart.getInstance('mysqldb2')

//the connections are the same
console.log("cart1: "+cart1.cart)
console.log("cart2: "+cart2.cart)
