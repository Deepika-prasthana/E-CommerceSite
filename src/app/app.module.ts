import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhoneserviceService } from './phoneservice.service';
import { TelevisionService } from './television.service';
import { ComputerService } from './computer.service';
import { LaptopService } from './laptop.service';
import { HttpClientModule } from '@angular/common/http';
import { shoppingReducer } from './store/reducers/shopping.reducer';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ShoppingCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ shop: shoppingReducer })
  ],
  providers: [PhoneserviceService,
    TelevisionService,
    ComputerService,
    LaptopService],
  bootstrap: [AppComponent]
})
export class AppModule { }

