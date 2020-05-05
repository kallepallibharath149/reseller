import { Component, OnInit, Input, ViewChild, ChangeDetectorRef } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { GoogleService } from 'src/app/services/google.service';
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-interiors-section',
  templateUrl: './interiors-section.component.html',
  styleUrls: ['./interiors-section.component.less'],
  providers: [NgbProgressbarConfig]
})
export class InteriorsSectionComponent implements OnInit {
  items:Array<any>;
  currentIndex:number=0;
  @Input('Title')Title='';
  @Input('apiRoute')apiRoute='';
  @Input('class')class='';
  @ViewChild('slickModal')slickModal;
  constructor(config: NgbProgressbarConfig,private logInService:LoginService,private ref: ChangeDetectorRef,private googleService:GoogleService ) {
    config.max = 1000;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
  }
  slideConfig = {    "slidesToShow": 4,
  "slidesToScroll": 1,
 // "dots": true,
  "infinite": true,
  "autoplay": true,
  "autoplaySpeed": 5000,
  "responsive": [{
 
    breakpoint: 1025,
    settings: {
      slidesToShow: 4
    }

  },{
 
    breakpoint: 1024,
    settings: {
      slidesToShow: 3
    }

  }, {

    breakpoint: 600,
    settings: {
      slidesToShow: 2
    }

  }, {

    breakpoint: 368,
    settings: {
      slidesToShow: 1,
    } // destroys slick

  }]};
  ngOnInit() {
    this.items=[['assets/corousel/1.jpeg','assets/corousel/2.jpeg','assets/corousel/3.jpeg','assets/corousel/4.jpeg'],['assets/corousel/5.jpeg','assets/corousel/6.jpeg','assets/corousel/7.jpeg','assets/corousel/8.jpeg']];
    this.logInService.scrollEvent.subscribe(data=>{
      console.log('scroll eventdata from interiors section',data);
    });
    this.logInService.resizeEvent.subscribe(data=>{
    let windowDetails=data.widowData;
    });
    this.googleService.getKitchenImageDetails(this.apiRoute).subscribe(data=>{
      console.log('response from server', data);
      this.slides=data;
      if(this.apiRoute=='kitchenImages'){
        this.googleService.kitchenImages=data;
      }
    })  ;
  }
  lefArrow(){
    if(this.currentIndex==1){
      this.currentIndex=0;
    }
   else{
    this.currentIndex=1;
   } 
   
  }
  slides = [

  ];
  
  addSlide(slide) {
    this.slides.push( "assets/corousel/1.jpeg");
    console.log(slide);
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
  
  breakpoint(e) {
    console.log('breakpoint');
  }
  
  afterChange(e) {
    console.log('afterChange');
  }
  
  beforeChange(e) {
    console.log('beforeChange');
  }
}
