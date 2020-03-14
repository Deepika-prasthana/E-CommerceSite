import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-laptops-list',
  template: `
    <h3>Laptops List</h3>
    <ul class="items">
    <li (click)="onSelect(laptop)" *ngFor="let laptop of laptops">
    <span class="badge">{{laptop.id}}</span>{{laptop.name}}
    </li>
    </ul>
  `,
  styles: []
})
export class LaptopsListComponent implements OnInit {

  laptops = [
    { "id": 1, "name": "Apple" },
    { "id": 2, "name": "Microsoft" },
    { "id": 3, "name": "HP" },
    { "id": 4, "name": "Dell" },
    { "id": 5, "name": "Asus" },
  ]

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  onSelect(laptop) {
    this.route.navigate(['/laptops', laptop.id]);
  }

}
