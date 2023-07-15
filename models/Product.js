export class Product{
    #id
    #name
    #description
    #image
    #price
    #quantity

    constructor(id, name, description, image, price, quantity){
        this.#id=id
        this.#name=name
        this.#description=description
        this.#image=image
        this.#price=price
        this.#quantity=quantity
    }

    getID(){
        return this.#id
    }

    getName(){
        return this.#name
    }

    getDescription(){
        return this.#description
    }

    getImage(){
        return  this.#image
    }

    getPrice(){
        return this.#price
    }

    getQuantity(){
        return this.#quantity
    }

    setQuantity(orderedQnt){
        if(orderedQnt<=0)
            return "Can't purchase that amount."
        if(this.#quantity-orderedQnt<0)
            return "Quantity exceeds the stock."
        this.#quantity-=orderedQnt
    }
}