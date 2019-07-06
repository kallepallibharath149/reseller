import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransporterComponent } from './transporter.component';
import { Transportrouting } from './transportrouting';

@NgModule({
  declarations: [TransporterComponent],
  imports: [
    CommonModule,Transportrouting
  ]
})
export class TransporterModule { }
