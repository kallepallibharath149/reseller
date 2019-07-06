import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerComponent } from './seller.component';
import { Sellrouting } from './sellrouting';

@NgModule({
  declarations: [SellerComponent],
  imports: [
    CommonModule,Sellrouting
  ],
  
})
export class SellerModule { }
