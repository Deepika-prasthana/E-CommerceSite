import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shoppingItem } from '../store/models/shopping-item.model';
import { Store } from '@ngrx/store';
import { Appstate } from '../store/models/app-state.model';

@Component({
  selector: 'app-shopping-cart',
  template: `
  <h2 align="center">Shopping List</h2>
  <ul class="items">
  <li *ngFor="let shopping of shopcart$ | async">
  {{shopping.name}}
  </li>
  </ul>
  `,
  styles: []
})
export class ShoppingCartComponent implements OnInit {

  shopcart$: Observable<Array<shoppingItem>>;
  addshoppingItem: shoppingItem = { id: null, name: '' };

  constructor(private store: Store<Appstate>) { }

  ngOnInit(): void {
    this.shopcart$ = this.store.select(store => store.shop);
  }

}
