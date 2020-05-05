import { Injectable, Output,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
@Output('openSideBar')openSideBar=new EventEmitter();
@Output('closeSideBar')closeSideBar=new EventEmitter();
  constructor() { }
  openGlobalSideBar(from){
  this.openSideBar.emit(from);
  }
  closeGlobalSideBar(from){
    this.closeSideBar.emit(from);
    }
}
