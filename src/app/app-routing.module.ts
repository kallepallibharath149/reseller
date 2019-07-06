import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

const routes: Routes = [{path:'buyer', loadChildren:'./buyer/buyer.module#BuyerModule'},
{path:'seller', loadChildren:'./seller/seller.module#SellerModule'},
{path:'transporter', loadChildren:'./transporter/transporter.module#TransporterModule'},
{path:'admin', loadChildren:'./admin/admin.module#AdminModule'}
  ];
 
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
