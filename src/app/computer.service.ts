import { Injectable } from '@angular/core';
import { Computer } from './computers-list/computer';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {

  constructor() { }

  public getComputers() {

    let computers: Computer[];

    computers = [
      new Computer(1, 'Dell', '3480', '1TB', 'windows 10 Home', 64990),
      new Computer(2, 'Lenovo', 'A/On 330 201GM', '1TB', 'Window 8', 22999),
      new Computer(3, 'Samsung', 'LC27F59FDWXXL', '20GB', 'windows 10', 25000),
      new Computer(4, 'Acer', 'VERITON', '1TB', 'Windows 10 Pro', 49786),
      new Computer(5, 'Apple', 'MRT42HNIA', '4GB', 'Mac OS Mojave', 139900)
    ]
    return computers;
  }

  public getComputer(id) {
    let computers: Computer[] = this.getComputers();
    return computers.find(c => c.id == id);

  }
}
