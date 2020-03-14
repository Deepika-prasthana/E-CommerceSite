export class Television {
    id: number;
    name: string;
    ModelName: string;
    displaySize: string;
    type: string;
    series: string;
    price: number;
    constructor(id: number, name: string, ModelName: string, displaySize: string, type: string, series: string, price: number) {
        this.id = id;
        this.name = name;
        this.ModelName = ModelName;
        this.displaySize = displaySize;
        this.type = type;
        this.series = series;
        this.price = price;
    }
}