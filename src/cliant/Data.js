export class Data {
    constructor() {
        this.data = new Map(
            [
                ["key1", "value1"],
                ["key2", "value2"]
            ]
        );
    }

    set(key, value) {
        this.data.set(key, value);
    }

    getData() {
        return this.data;
    }
}