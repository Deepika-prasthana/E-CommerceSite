export class Phones {
    id: number;
    name: string;
    price: number;
    RAM: string;
    battery: number;
    storage: string;
    colour: string;
    constructor(id: number, name: string, RAM: string, battery: number, storage: string, colour: string, price: number) {
        this.id = id;
        this.name = name;
        this.RAM = RAM;
        this.battery = battery;
        this.storage = storage;
        this.colour = colour;
        this.price = price;

    }
}