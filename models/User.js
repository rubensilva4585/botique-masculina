export class User {

    #name;
    #image;

    constructor(name, age) {
        this.#name = name;
        this.#image = age;
    }

    get name() {
        return this.#name;
    }
    get image() {
        return this.#image;
    }
}