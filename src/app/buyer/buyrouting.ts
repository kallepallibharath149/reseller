import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerComponent } from './buyer.component';
import { CheckoutComponent } from '../checkout/checkout/checkout.component';


const routes: Routes = [
    {path:'', component: BuyerComponent },
  {path:'checkout', component: CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Buyrouting { }