import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phones-list',
  template: `
  <h3>Phones List</h3>
  <ul class="items">
    <li (click)="onSelect(phone)" *ngFor="let phone of phones">
    <span class="badge">{{phone.id}}</span>{{phone.name}}
    </li>
  </ul>
  `,
  styles: []
})
export class PhonesListComponent implements OnInit {

  phones = [
    { "id": 1, "name": "Iphone 11" },
    { "id": 2, "name": "Mi Note 8 Pro" },
    { "id": 3, "name": "RealMe X" },
    { "id": 4, "name": "vivo s15" },
    { "id": 5, "name": "oppo A5" },
    { "id": 6, "name": "Mi note 5 pro" },
    { "id": 7, "name": "OnePlus 7" },
    { "id": 8, "name": "Nokia6.1Plus" },
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(phone) {
    this.router.navigate(['/phones', phone.id]);
  }
}
