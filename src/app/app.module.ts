import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { ServicService } from './servic.service';
import { SellerModule } from './seller/seller.module';



@NgModule({
  declarations: [AppComponent
 
  ],
  imports: [
    BrowserModule,LoginModule,
    AppRoutingModule
  ],
  providers: [ ServicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
