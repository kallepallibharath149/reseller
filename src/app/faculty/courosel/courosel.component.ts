import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { NgbCarouselConfig, NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import anime from 'animejs/lib/anime.es.js';
import { LoginService } from 'src/app/login/login.service';
import * as $ from 'jquery';
import { GoogleService } from 'src/app/services/google.service';

@Component({
  selector: 'app-courosel',
  templateUrl: './courosel.component.html',
  styleUrls: ['./courosel.component.less']
})
export class CouroselComponent implements OnInit, AfterViewInit {
@Input('class') class='';
height:any;
  //images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
// images=['https://drive.google.com/uc?id=1uOCvjrprzp704Bw8IP1HP5EXYF-WK9PK&export=download','https://drive.google.com/uc?id=1R9fZIy10WdI2k7n7ef0CT8edPWgI7_zH&export=downloa','assets/corousel/2','assets/corousel/3','assets/corousel/4']
images=['assets/corousel/2','assets/corousel/3','assets/corousel/4'];
slides = [
];
slideConfig = {    "slidesToShow": 1,
"slidesToScroll": 1,
"dots": true,
"infinite": true,
"autoplay": true,
"autoplaySpeed": 5000};
constructor(config: NgbCarouselConfig, private logInService:LoginService, private googleService:GoogleService) {
    // customize default values of carousels used by this component tree
    config.interval = 4000;
    config.wrap = true;
    config.keyboard = true;
    config.pauseOnHover = false;
  }
  ngOnInit(){
  this.googleService.getKitchenImageDetails('kitchenImages').subscribe(data=>{
    console.log('response from server', data);
    this.slides=data;
  })  ;
  }
  ngAfterViewInit(){
    this.logInService.corousalHeight.subscribe(data=>{
      let windowDimensions=data.widowData;
      if(windowDimensions.width>610){
        this.height=data.height-50;
        this.height=this.height.toString() +'px';
      }
      // else if(windowDimensions.width>100 && windowDimensions.width<351){
      //   this.height=windowDimensions.width-10;
      //   this.height=this.height.toString() +'px';
      // } 
      else if(windowDimensions.width>100 && windowDimensions.width<=610){
        this.height=windowDimensions.width/2;
        this.height= this.height+(this.height/10);
        this.height=this.height.toString() +'px';
      }
       
    })
    var textWrapper = document.querySelector('.ml12');
    let text='Start Your Home Interiors Journey Online,from the comfort of Your Home';
    let splitText=text.split(" ");
    let innerHtml='';
    splitText.forEach(textItem=>{
      innerHtml=`${innerHtml}<div class="letter font-align">${textItem}&nbsp</div>`
    })
   textWrapper.innerHTML = innerHtml;
 anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 6000,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 3000,
    delay: (el, i) => 100 + 30 * i
  });
  }
    addSlide(slide) {
    this.slides.push( "http://placehold.it/350x150/777777");
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
