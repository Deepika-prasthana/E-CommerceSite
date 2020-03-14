import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phones } from '../phones-list/Phones';
import { PhoneserviceService } from '../phoneservice.service';
import { shoppingItem } from '../store/models/shopping-item.model';
import { Store } from '@ngrx/store';
import { Appstate } from '../store/models/app-state.model';
import { AddItemAction } from '../store/actions/shopping.action';

@Component({
  selector: 'app-phone-list',
  template: `
  <h3 align='center'>The Details of <b>{{phone.name}}</b> are:</h3>
  <ul>
  <li>Phone ID : {{phone.id}}</li>
  <li>Name : {{phone.name}} </li>
  <li>RAM : {{phone.RAM}}</li>
  <li>Battery : {{phone.battery}}</li>
  <li>Storage : {{phone.storage}}</li>
  <li>Colour : {{phone.colour}}</li>
  <li>Price : {{phone.price}}</li>
 </ul>
 <nav>
 <a routerLink="/cart" routerLinkActive="active" (click)="addItem()">Add to Cart</a>
 </nav>
  `,
  styles: []
})
export class PhoneListComponent implements OnInit {
  phone: Phones;
  public phoneid;
  addShoppingItem: shoppingItem = { id: null, name: '' };
  constructor(private store: Store<Appstate>, private ActivatedRoute: ActivatedRoute, private route: Router, private phoneser: PhoneserviceService) { }

  ngOnInit(): void {
    let id = this.ActivatedRoute.paramMap.subscribe(param => {
      console.log(param);
      this.phoneid = param.get('id');
      let phones = this.phoneser.getphones();
      this.phone = phones.find(p => p.id == this.phoneid);
    })
    this.phoneid = id;
  }

  addItem() {
    this.addShoppingItem.id = this.phoneid;
    this.addShoppingItem.name = this.phone.name;
    this.store.dispatch(new AddItemAction(this.addShoppingItem));
  }

}
