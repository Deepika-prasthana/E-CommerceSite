import { Injectable } from '@angular/core';
import { Laptop } from './laptops-list/laptop';

@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor() { }

  public getLaptops() {
    let laptops: Laptop[];

    laptops = [
      new Laptop(1, 'Apple', 'MQD32HN/A A1466', '8GB', 'Mac OS sierra', 64990),
      new Laptop(2, 'MicroSoft', 'MI866', '16GB', 'windows 10', 137990),
      new Laptop(3, 'HP', '14q-cs0023TU', '8GB', 'Windows 10 Home', 32490),
      new Laptop(4, 'Dell', '3480', '4GB', 'Linux', 26990),
      new Laptop(5, 'Asus', 'G531GT-BQo24T', '8GB', 'Windows 10', 67990),

    ]

    return laptops;

  }

  public getLaptop(id) {
    let laptops: Laptop[] = this.getLaptops();
    return laptops.find(l => l.id == id);
  }
}
