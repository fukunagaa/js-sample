import {Animal} from './Animal';

export class Dog extends Animal {
    constructor(name, age, character) {
        super(name, age);
        this.character = character;
    }

    howling() {
        return `${this.character}`;
    }
}