import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
//import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', loadChildren: './faculty/faculty.module#FacultyModule'},
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: '**', component:  PagenotfoundComponent}
];

@NgModule({
  declarations:[PagenotfoundComponent],
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule,PagenotfoundComponent]
})
export class AppRoutingModule { }
