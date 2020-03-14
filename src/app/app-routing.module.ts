import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhonesListComponent } from './phones-list/phones-list.component';
import { TelevisionListComponent } from './television-list/television-list.component';
import { ComputersListComponent } from './computers-list/computers-list.component';
import { LaptopsListComponent } from './laptops-list/laptops-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { TelevisionDetailsComponent } from './television-details/television-details.component';
import { ComputerDetailsComponent } from './computer-details/computer-details.component';
import { LaptopDetailsComponent } from './laptop-details/laptop-details.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


const routes: Routes = [
  { path: '', redirectTo: '/phones', pathMatch: 'full' },

  { path: 'phones', component: PhonesListComponent },

  { path: 'phones/:id', component: PhoneListComponent },

  { path: 'televisions', component: TelevisionListComponent },

  { path: 'televisions/:id', component: TelevisionDetailsComponent },

  { path: 'computers', component: ComputersListComponent },

  { path: 'computers/:id', component: ComputerDetailsComponent },

  { path: 'laptops', component: LaptopsListComponent },

  { path: 'laptops/:id', component: LaptopDetailsComponent },

  { path: 'cart', component: ShoppingCartComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PhonesListComponent,
  TelevisionListComponent,
  ComputersListComponent,
  LaptopsListComponent,
  PageNotFoundComponent,
  PhoneListComponent,
  TelevisionDetailsComponent,
  ComputerDetailsComponent,
  LaptopDetailsComponent]
