import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaptopService } from '../laptop.service';
import { Laptop } from '../laptops-list/laptop';
import { shoppingItem } from '../store/models/shopping-item.model';
import { Appstate } from '../store/models/app-state.model';
import { Store } from '@ngrx/store';
import { AddItemAction } from '../store/actions/shopping.action';

@Component({
  selector: 'app-laptop-details',
  template: `
   <h3 align='center'>The Details of <b>{{laptop.name}}</b> are:</h3>
   <ul>
   <li>{{laptop.name}}</li>
   <li>{{laptop.ModelNumber}}</li>
   <li>{{laptop.HardDisk}}</li>
   <li>{{laptop.OS}}</li>
   <li>{{laptop.price}}</li>
   </ul>
   <nav>
   <a routerLink="/cart" routerLinkActive="active" (click)="addItem()">Add to Cart</a>
   </nav>
  `,
  styles: []
})
export class LaptopDetailsComponent implements OnInit {

  laptop: Laptop;
  public laptopId;
  addshoppingItem: shoppingItem = { id: null, name: '' };
  constructor(private store: Store<Appstate>, private ActivatedRoute: ActivatedRoute, private router: Router, private laptopser: LaptopService) { }

  ngOnInit(): void {

    this.laptopId = this.ActivatedRoute.paramMap.subscribe(params => {
      this.laptopId = params.get('id');
      let laptops = this.laptopser.getLaptops();
      this.laptop = laptops.find(l => l.id == this.laptopId);
    })
  }
  addItem() {
    this.addshoppingItem.id = this.laptopId;
    this.addshoppingItem.name = this.laptop.name;
    this.store.dispatch(new AddItemAction(this.addshoppingItem));
  }

}
