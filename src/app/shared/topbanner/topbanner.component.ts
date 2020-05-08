import { Component, OnInit,EventEmitter, Output, AfterViewInit, OnDestroy } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import * as $ from 'jquery';
import { SidebarService } from 'src/app/services/sidebar.service';
import { LoginService } from 'src/app/login/login.service';
@Component({
  selector: 'app-topbanner',
  templateUrl: './topbanner.component.html',
  styleUrls: ['./topbanner.component.less']
})
export class TopbannerComponent implements OnInit,AfterViewInit ,OnDestroy{
  userMenu:boolean=false;
  @Output("menuitemClicked")menuitemClicked= new EventEmitter();
  @Output("estimateClicked")estimateClicked = new EventEmitter();
  constructor(private sidebarService:SidebarService, private loginService:LoginService) { }
  lastScrollTop:any=0;
  ngOnInit() {
    window.addEventListener('scroll',this.scrollEvent , true);
  //238, 238, 238
  }
  scrollEvent = (event: any): void => {
   console.log('pageY',event.srcElement.scrollTop);
   console.log('pageX',window.pageXOffset);
 let contactElement = $("#top-banner-contact");
 let demo=$("#demo");
 let main_container=$(".faculty-home");
 console.log('maincontainer',main_container);
 let topBanner = $("#top-banner");
 let contactElementHeight=contactElement[0].clientHeight;

 //let contactInsideSticky=$("#top-banner-contact-inside");
  let data=demo.offset();
    console.log(event.currentTarget.innerHeight);
    console.log(event.currentTarget.innerWidth);
    console.log(event.currentTarget.outerHeight);
    console.log(event.currentTarget.outerWidth);
    console.log(data.top);
      if(data.top===0){
        console.log('at top');
        topBanner.css('top','0');
        contactElement.removeClass("positionAlignment"); 
        contactElement.addClass("positionAlignment");
      } else if(data.top<this.lastScrollTop){
        console.log('scrolling down');
        topBanner.css('top','0');
        contactElement.removeClass("positionAlignment"); 
      } else if(data.top>this.lastScrollTop){
        console.log('scrolling up');
        topBanner.css('top',contactElementHeight);
        contactElement.removeClass("positionAlignment"); 
        contactElement.addClass("positionAlignment");
        
      }
      else if(data.top===this.lastScrollTop){
        console.log('at end');
      }
        this.lastScrollTop=data.top;
      let scrollData={
          scrollPosition:event.srcElement.scrollTop,
          windowHeight:main_container.height(),
          windowWidth:main_container.width()
      }
      this.loginService.scrollEventUpdate(scrollData);
   }
  ngAfterViewInit(){

  }
  ngOnDestroy(){
    window.removeEventListener('scroll', this.scrollEvent, true);
  }
  showUserDetails(){
this.userMenu=!this.userMenu;
  }
  menuclicked(){
    this.menuitemClicked.emit('clicked');
  }
  estimateButtonClicked(){
// this.sidebarService.openGlobalSideBar('forEstimate');
    var elmnt = document.getElementById("interiors-Section");
   elmnt.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
  }
}
