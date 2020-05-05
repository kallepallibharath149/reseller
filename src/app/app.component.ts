import { Component,OnInit } from '@angular/core';
import { LoginService } from './login/login.service';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import * as $ from 'jquery';
import { SidebarService } from './services/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'Gana Interiors and Decorators | Hyderabad';
  sideBarItems=['Design Gallery','Modular Kitchen','Bedroom','Other Interiors','Space Saving Furniture','Recent Projects'];
  showSpinner: boolean = false;
  showLogIn:boolean=true;
  constructor(private loginService:LoginService,
              private router:Router ,
              private spinnerService: Ng4LoadingSpinnerService,
              private sidebarService:SidebarService
              ){ }
  ngOnInit( ){
   // this.spinner.show();
   this.router.navigate(["/"]);
   this.sidebarService.openSideBar.subscribe(data=>{
    if(data){
this. _toggleOpened();
    }
   })
   setTimeout(()=>{
     $("a[title='Free Web Hosting with PHP5 or PHP7']").parent().css("display","none");
   },2000);
   this.checkLoginStatus();
   this.checkFirst();   
  }
  
  checkLoginStatus(){
    this.loginService.logInStatus.subscribe(data=>{
    if(data.logInStatus){
      if(data.loginType){
        this.showLogIn=false;
      
        this.router.navigate([data.loginType]);
        // setTimeout(()=>{
        //   this.spinnerService.hide();
        // },6000)
       
       } 
     } else{
       this.showLogIn=false;
      this.router.navigate(["/"]);
     }
    });
  }
  checkFirst(){
    this.loginService.checkInitial();
  }


  //sidebarcode//
  _opened: boolean = false;
  _modeNum: number = 0;
  _positionNum: number = 1;
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
  _MODES: Array<string> = ['over', 'push', 'slide'];
  _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];

  _toggleOpened(): void {
   this._opened = !this._opened;
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
   $('#main-sideBar').css('width','100%');
 }

  _onOpened(): void {
   console.info('Sidebar opened');
 }

  _onCloseStart(): void {
   console.info('Sidebar closing');
 }

  _onClosed(): void {
   console.info('Sidebar closed');
   $('#main-sideBar').css('width','0%');
 }

  _onTransitionEnd(): void {
   console.info('Transition ended');
 }

  _onBackdropClicked(): void {
   console.info('Backdrop clicked');
 }
 //side bar code end
}
