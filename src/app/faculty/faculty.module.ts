import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { SidebarModule } from 'ng-sidebar';
import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyhomeComponent } from './facultyhome.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { CouroselComponent } from './courosel/courosel.component';
import { AnimateNameComponent } from './animate-name/animate-name.component';
import { InteriorsSectionComponent } from './interiors-section/interiors-section.component';
import { SectionImagesComponent } from './section-images/section-images.component';


@NgModule({
  declarations: [FacultyhomeComponent, CouroselComponent, AnimateNameComponent, InteriorsSectionComponent, SectionImagesComponent],
  imports: [
    CommonModule,
    FacultyRoutingModule,NgbModule,SharedModule,
    
  ],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA]
})
export class FacultyModule { }
