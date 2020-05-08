import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyhomeComponent } from './facultyhome.component';
import { FormsModule } from '@angular/forms';
import { SectionImagesComponent } from './section-images/section-images.component';

const routes: Routes = [
  { path: '', component: FacultyhomeComponent,
children:[{ path:'kitchen',component:SectionImagesComponent} ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule],
  exports: [RouterModule,FormsModule]
})
export class FacultyRoutingModule { }
