import { Component,ViewChild, OnInit, AfterViewInit,AfterContentInit, OnDestroy } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import {NgbModalConfig,NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';
import { LoginService } from '../login/login.service';
import { Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
// declare const anime: any;
// import * as anime from 'animejs';
// import anime from 'animejs/lib/anime.es.js';
@Component({
  selector: 'app-facultyhome',
  templateUrl: './facultyhome.component.html',
  styleUrls: ['./facultyhome.component.less'],
  providers: [NgbModalConfig, NgbModal]
})
export class FacultyhomeComponent implements OnInit,AfterViewInit,AfterContentInit,OnDestroy {
@ViewChild('content') content;
closeResult:any;
showHomepage:boolean=true;
// images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor( private logInService:LoginService,private spinnerService: Ng4LoadingSpinnerService,
    private modalService: NgbModal,public router: Router,
    config: NgbModalConfig) {
      config.backdrop = 'static';
      config.keyboard = false;
     }

  ngOnInit() {
    // $('head').append('<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>'); 
  this.spinnerService.hide();
  this.resizing();
  //alert()
  }
  sideBarItems=['Design Gallery','Modular Kitchen','Bedroom','Other Interiors','Space Saving Furniture','Recent Projects'];
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
ngAfterViewInit(){ 
  this.router.events.pipe(
    filter(e => e instanceof RouterEvent)
  ).subscribe(e => {
    let data:any=e;
    console.log(data.urlAfterRedirects);
    if(data.urlAfterRedirects=='/'){
      this.showHomepage=true;
      setTimeout(()=>{
        this.resizing();
      },100)
    } else if(data.urlAfterRedirects=='/kitchen'){
      this.showHomepage=false;
    }
  });
  $( window ).resize(this.resizeEvent);
//   window.addEventListener('popstate', function(event) {
//     // The popstate event is fired each time when the current history entry changes.

//     var r = confirm("You pressed a Back button! Are you sure?!");

//     if (r == true) {
//         // Call Back button programmatically as per user confirmation.
//         history.back();
//         // Uncomment below line to redirect to the previous page instead.
//         // window.location = document.referrer // Note: IE11 is not supporting this.
//     } else {
//         // Stay on the current page.
//         history.pushState(null, null, window.location.pathname);
//     }

//     history.pushState(null, null, window.location.pathname);

// }, false);

}
resizeEvent = (event?: any): void => {
this.resizing();
};
resizing(){
    // let width=$( document ).width();
  // let height=$( document ).height();
  let wwidth=$( window ).width();
  let wheight=$( window ).height();
  let main_container=$(".faculty-home").height();
  let top_stiky=$("#top-banner").height();
  let top_contact=$("#top-banner-contact").height();
  console.info('Sidebar opening',main_container);
  console.info('Top opening',top_stiky);
  let result=main_container-top_stiky-top_contact-10;
  let obj={
    height:wheight,
    width:wwidth
  }
  this.logInService.updateCorousalHeight(result,obj);
}
ngAfterContentInit(){
  $( document ).ready(()=> {
    // let width = $('#sect').width();
    // //alert(width);
    // $("#mainTable").css("width", "100");
    //this.logInService.updateCorousalHeight(result,obj);
    this.resizing();
});
}
ngOnDestroy(){
  window.removeEventListener('resize', this.resizeEvent, true);
}
   _opened: boolean = false;
   _modeNum: number = 0;
   _positionNum: number = 0;
   _dock: boolean = false;
   _closeOnClickOutside: boolean = false;
   _closeOnClickBackdrop: boolean = true;
   _showBackdrop: boolean = true;
   _animate: boolean = true;
   _trapFocus: boolean = true;
   _autoFocus: boolean = true;
   _keyClose: boolean = true;
   _autoCollapseHeight: number = null;
   _autoCollapseWidth: number = null;

   register_opened: boolean = false;
   register_modeNum: number = 0;
   register_positionNum: number = 0;
   register_dock: boolean = false;
   register_closeOnClickOutside: boolean = false;
   register_closeOnClickBackdrop: boolean = true;
   register_showBackdrop: boolean = true;
   register_animate: boolean = true;
   register_trapFocus: boolean = true;
   register_autoFocus: boolean = true;
   register_keyClose: boolean = true;
   register_autoCollapseHeight: number = null;
   register_autoCollapseWidth: number = null;

   _MODES: Array<string> = ['over', 'push', 'slide'];
   _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

   _toggleOpened(): void {
    this._opened = !this._opened;
    // this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
   // this.spinnerService.show();
  }
  register_toggleOpened(): void {
    this.register_opened = !this.register_opened;
    // this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
    //this.spinnerService.show();
  }
   _toggleMode(): void {
    this._modeNum++;

    if (this._modeNum === this._MODES.length) {
      this._modeNum = 0;
    }
  }

   _toggleAutoCollapseHeight(): void {
    this._autoCollapseHeight = this._autoCollapseHeight ? null : 500;
  }

   _toggleAutoCollapseWidth(): void {
    this._autoCollapseWidth = this._autoCollapseWidth ? null : 500;
  }

   _togglePosition(): void {
    this._positionNum++;

    if (this._positionNum === this._POSITIONS.length) {
      this._positionNum = 0;
    }
  }

   _toggleDock(): void {
    this._dock = !this._dock;
  }

   _toggleCloseOnClickOutside(): void {
    this._closeOnClickOutside = !this._closeOnClickOutside;
  }

   _toggleCloseOnClickBackdrop(): void {
    this._closeOnClickBackdrop = !this._closeOnClickBackdrop;
  }

   _toggleShowBackdrop(): void {
    this._showBackdrop = !this._showBackdrop;
  }

   _toggleAnimate(): void {
    this._animate = !this._animate;
  }

   _toggleTrapFocus(): void {
    this._trapFocus = !this._trapFocus;
  }

   _toggleAutoFocus(): void {
    this._autoFocus = !this._autoFocus;
  }

   _toggleKeyClose(): void {
    this._keyClose = !this._keyClose;
  }

 _onOpenStart(): void {
    console.info('Sidebar opening');
  }

   _onOpened(): void {
    console.info('Sidebar opened');
  }

   _onCloseStart(): void {
    console.info('Sidebar closing');
  }

   _onClosed(): void {
    console.info('Sidebar closed');
  }

   _onTransitionEnd(): void {
    console.info('Transition ended');
  }

   _onBackdropClicked(): void {
    console.info('Backdrop clicked');
  }
}
