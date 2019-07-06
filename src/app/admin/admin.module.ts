import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Adminrouting } from './adminrouting';

@NgModule({
  declarations: [ AdminComponent ],
  imports: [
    CommonModule,Adminrouting
  ]
})
export class AdminModule { }
