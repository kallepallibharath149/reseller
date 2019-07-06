import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerComponent } from './buyer.component';
import { Buyrouting } from './buyrouting';
import { CheckoutComponent } from '../checkout/checkout/checkout.component';

@NgModule({
  declarations: [BuyerComponent,CheckoutComponent],
  imports: [
    CommonModule,Buyrouting
  ]
  })
export class BuyerModule { }
