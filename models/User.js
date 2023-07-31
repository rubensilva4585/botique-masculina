export class User {

    #name;
    #image;

    constructor(name = "NoName", image = "assets/img/unknownUser.jpg") {
        this.#name = name;
        this.#image = image;
    }

    get name() {
        return this.#name;
    }
    get image() {
        return this.#image;
    }

    stringify() {
        return JSON.stringify({
            name: this.#name, image: this.#image
        })
    }
}