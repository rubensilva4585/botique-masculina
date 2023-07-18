export class Product{
    #id
    #name
    #description
    #image
    #price
    #quantity

    constructor({id, name, description, image, price, quantity}){
        this.#id=id
        this.#name=name
        this.#description=description
        this.#image=image
        this.#price=price
        this.#quantity=quantity
    }

    get id(){
        return this.#id
    }

    get name(){
        return this.#name
    }

    get description(){
        return this.#description
    }

    get image(){
        return  this.#image
    }

    get price(){
        return this.#price
    }

    get quantity(){
        return this.#quantity
    }

    set quantity(orderedQnt){
        if(orderedQnt<=0)
            return "Can't purchase that amount."
        if(this.#quantity-orderedQnt<0)
            return "Quantity exceeds the stock."
        this.#quantity-=orderedQnt
    }

    stringify() {
        return JSON.stringify({
            id: this.#id, name: this.#name, description: this.#description, image: this.#image, price: this.#price, quantity: this.#quantity
    })}
}