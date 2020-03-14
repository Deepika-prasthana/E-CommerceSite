import { Injectable } from '@angular/core';
import { Phones } from './phones-list/Phones';

@Injectable({
  providedIn: 'root'
})
export class PhoneserviceService {
  constructor() { }

  public getphones() {
    let phones: Phones[];

    phones = [
      new Phones(1, 'Iphone 11', '8GB', 3110, '128GB', 'black', 50000),
      new Phones(2, 'Redmi Note 8 Pro', '8GB', 4500, '64GB', 'Gamma Green', 15000),
      new Phones(3, 'Real Me x ', '8GB', 3765, '128GB', 'Space Blue', 19999),
      new Phones(4, 'Vivo v15', '6GB', 4000, '64GB', 'Aqua Blue', 19990),
      new Phones(5, 'Oppo A5', '3GB', 5000, '64GB', 'Mirror Black', 11490),
      new Phones(6, 'Redmi Note 5 Pro', '6GB', 4000, '64GB', 'Rose Gold', 13999),
      new Phones(7, 'OnePlus 7', '6GB', 3700, '128GB', 'Mirror Blue', 32999),
      new Phones(8, 'Nokia 6.1 Plus', '6GB', 3060, '64GB', 'Red', 12499)
    ]
    return phones;
  }
  public getphone(id) {
    let phones: Phones[] = this.getphones();
    return phones.find(p => p.id = id);
  }
}
