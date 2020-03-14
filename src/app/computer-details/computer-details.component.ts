import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputerService } from '../computer.service';
import { Computer } from '../computers-list/computer';
import { shoppingItem } from '../store/models/shopping-item.model';
import { Store } from '@ngrx/store';
import { Appstate } from '../store/models/app-state.model';
import { AddItemAction } from '../store/actions/shopping.action';

@Component({
  selector: 'app-computer-details',
  template: `
   <h3 align='center'>The Details of <b>{{computer.name}}</b> are:</h3>
   <ul>
   <li>Name : {{computer.name}}</li>
   <li>Model Number : {{computer.ModelNumber}}</li>
   <li>Hard Disk : {{computer.HardDisk}}</li>
   <li>OS : {{computer.OS}}</li>
   <li>Price : {{computer.price}}</li>
   </ul>
   <nav>
   <a routerLink="/cart" routerLinkActive="active" (click)="addItem()">Add to Cart</a>
   </nav>
  `,
  styles: []
})
export class ComputerDetailsComponent implements OnInit {

  computer: Computer;
  public computerId;
  addShoppingItem: shoppingItem = { id: null, name: '' };
  constructor(private store: Store<Appstate>, private ActivatedRoute: ActivatedRoute, private route: Router, private computerser: ComputerService) { }

  ngOnInit(): void {

    this.computerId = this.ActivatedRoute.paramMap.subscribe(params => {
      this.computerId = params.get('id');
      let computers = this.computerser.getComputers();
      this.computer = computers.find(c => c.id == this.computerId);
    })
  }

  addItem() {
    this.addShoppingItem.id = this.computerId;
    this.addShoppingItem.name = this.computer.name;
    this.store.dispatch(new AddItemAction(this.addShoppingItem));
  }

}
