export class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    call() {
        return `名前は${this.name} 年齢は${this.age}`
    }
}