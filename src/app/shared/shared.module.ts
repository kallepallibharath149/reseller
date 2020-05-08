import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbannerComponent } from './topbanner/topbanner.component';
import { SidebarModule } from 'ng-sidebar';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [TopbannerComponent],
  imports: [
    CommonModule,SidebarModule.forRoot(),SlickCarouselModule
  ],
  exports:[TopbannerComponent,SidebarModule,SlickCarouselModule]
})
export class SharedModule { }
