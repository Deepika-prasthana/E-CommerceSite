import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TelevisionService } from '../television.service';
import { Television } from '../television-list/televisions';
import { shoppingItem } from '../store/models/shopping-item.model';
import { Store } from '@ngrx/store';
import { Appstate } from '../store/models/app-state.model';
import { AddItemAction } from '../store/actions/shopping.action';

@Component({
  selector: 'app-television-details',
  template: `
  <h3 align='center'>The Details of <b>{{television.name}}</b> are:</h3>
   <ul>
   <li>Name : {{television.name}}</li>
   <li>Model : {{television.ModelName}}</li>
   <li>Display Size : {{television.displaySize}}</li>
   <li>Type : {{television.type}}</li>
   <li>Series : {{television.series}}</li>
   <li>Price : {{television.price}}</li>
   </ul> <nav>
   <a routerLink="/cart" routerLinkActive="active" (click)="addItem()">Add to Cart</a>
   </nav>
   
  `,
  styles: []
})
export class TelevisionDetailsComponent implements OnInit {


  television: Television;
  public TelevisionId;
  addShoppingItem: shoppingItem = { id: null, name: '' };
  constructor(private store: Store<Appstate>, private ActivatedRoute: ActivatedRoute, private Route: Router, private televisionser: TelevisionService) { }

  ngOnInit(): void {

    this.TelevisionId = this.ActivatedRoute.paramMap.subscribe(params => {
      this.TelevisionId = params.get('id');
      let televisions = this.televisionser.getTelevisions();
      this.television = televisions.find(t => t.id == this.TelevisionId);
    });
  }

  addItem() {
    this.addShoppingItem.id = this.TelevisionId;
    this.addShoppingItem.name = this.television.name;
    this.store.dispatch(new AddItemAction(this.addShoppingItem));
  }

}
