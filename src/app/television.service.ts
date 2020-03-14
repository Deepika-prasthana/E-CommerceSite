import { Injectable } from '@angular/core';
import { Television } from './television-list/televisions';

@Injectable({
  providedIn: 'root'
})
export class TelevisionService {

  constructor() { }
  public getTelevisions() {
    let televisions: Television[];

    televisions = [
      new Television(1, 'sony', 'KD-49X8500F', '123.2cm(49)', 'LED', 'Bravia X8500F', 79999),
      new Television(2, 'Samsung', 'QA55L03RAKXXL', '138CM(55)', 'QLED', 'The Frame', 84999),
      new Television(3, 'L.G.', '43UM7290PTF', '108CM(43)', 'Ultra HD', 'series2', 35999),
      new Television(4, 'Mi', 'L43M5-AN', '108CM(43)', 'LED', '4A Pro', 21999),
      new Television(5, 'Reconnect', '32H3282S', '81.28CM(32)', 'HD', 'Series3', 9990)
    ]
    return televisions;
  }

  public getTelevision(id) {
    let televisions: Television[] = this.getTelevisions();
    return televisions.find(t => t.id == id);
  }

}
