import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-television-list',
  template: `
   <h3>Televisions List</h3>
   <ul class="items">
   <li (click)="onSelect(television)" *ngFor="let television of televisions">
   <span class="badge">{{television.id}}</span>{{television.name}}
   </li>
   </ul>

  `,
  styles: []
})
export class TelevisionListComponent implements OnInit {

  televisions = [
    { "id": 1, "name": "Sony" },
    { "id": 2, "name": "Samsung" },
    { "id": 3, "name": "L.G." },
    { "id": 4, "name": "Mi" },
    { "id": 5, "name": "Reconnect" },
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(television) {
    this.router.navigate(['/televisions', television.id]);
  }

}
