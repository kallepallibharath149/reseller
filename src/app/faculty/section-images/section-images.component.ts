import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { GoogleService } from 'src/app/services/google.service';

@Component({
  selector: 'app-section-images',
  templateUrl: './section-images.component.html',
  styleUrls: ['./section-images.component.less']
})
export class SectionImagesComponent implements OnInit {
  images:Array<any>=[];
  constructor(private logInService:LoginService,private googleService:GoogleService) { }

  ngOnInit() {
    this.images=this.googleService.kitchenImages;
  }

}
