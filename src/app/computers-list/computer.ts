export class Computer {
    id: number;
    name: string;
    ModelNumber: string;
    HardDisk: string;
    OS: string;
    price: number;
    constructor(id: number, name: string, ModelNumber: string, HardDisk: string, OS: string, price: number) {
        this.id = id;
        this.name = name;
        this.ModelNumber = ModelNumber;
        this.HardDisk = HardDisk;
        this.OS = OS;
        this.price = price;
    }
}