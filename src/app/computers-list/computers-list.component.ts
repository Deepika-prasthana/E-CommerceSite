import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-computers-list',
  template: `
    <h3>Computers List</h3>
    <ul class="items">
    <li (click)="onSelect(computer)" *ngFor="let computer of computers">
    <span class="badge">{{computer.id}}</span>{{computer.name}}
    </li>
    </ul>
  `,
  styles: []
})
export class ComputersListComponent implements OnInit {

  computers = [
    { "id": 1, "name": "Dell" },
    { "id": 2, "name": "Lenovo" },
    { "id": 3, "name": "Samsung" },
    { "id": 4, "name": "Acer" },
    { "id": 5, "name": "Apple" },
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(computer) {
    this.router.navigate(['/computers', computer.id]);
  }

}
