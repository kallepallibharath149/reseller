import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { LoginService } from './login/login.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { NgxSpinnerModule} from "ngx-spinner";
//import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { Ng2LoadingSpinnerModule } from 'ng2-loading-spinner'
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { GoogleService } from './services/google.service';
import { SidebarService } from './services/sidebar.service';

@NgModule({
  declarations: [
    AppComponent,LoginComponent
  ],
  imports: [
    BrowserModule,NgbModule,HttpClientModule,
    AppRoutingModule,CommonModule,FormsModule,Ng4LoadingSpinnerModule.forRoot(), SidebarModule.forRoot()
  ],
  providers: [LoginService,GoogleService,SidebarService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
