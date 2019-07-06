import { Component, OnInit } from '@angular/core';
import { ServicService } from './servic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reseller';
  login_status:boolean;
  constructor(private route:Router, private serv:ServicService){

  }
  ngOnInit() {
this.login_status=this.serv.loginstate;
console.log(this.login_status);
if(!this.login_status){
  this.route.navigate([""]);
}
  }
  status(state){
this.login_status=state;
  }
 

}
