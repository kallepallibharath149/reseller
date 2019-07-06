import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { ServicService } from '../servic.service';
import {  Router } from '@angular/router';
import * as $ from 'jquery';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login={
  email:null,
  password:null
}
success:boolean=false;
@Output('succes_status') succes_status:EventEmitter<boolean>=new EventEmitter();
@ViewChild('loginform', { static: false }) loginform:NgForm;

  constructor(private service:ServicService, private route:Router) { }

  ngOnInit() {
    // this.loginform.reset();
    var login=localStorage.getItem('login');
    let loginn=JSON.parse(login);
    
    console.log(loginn);
    
    console.log(this.service.loginstate);
   if (loginn.status){
     this.success=loginn.status;
    this.service.loginstate=loginn.status;
    this.service.role=loginn.role;
    this.succes_status.emit(this.success);
    this.route.navigate([loginn.role]);
   }
    // if(this.service.loginstate){
      
    //   this.route.navigate(['buyer']);
      
    // }
    else{
     this.success=this.service.loginstate;
    }
  }
  validate(){
    var loginstatus=this.service.comparelogins(this.login);
    
    localStorage.setItem('role','loginstatus');
    
    console.log(loginstatus);
    if(loginstatus=='buyer'){
      console.log("routing to buyer module component");
      this.success=true;
      let login={role:loginstatus,
        status:this.success
      };
     let loginn=JSON.stringify(login);
     localStorage.setItem('login',loginn);

    this.succes_status.emit(this.success);
      this.loginform.reset();
 
      this.route.navigate(['buyer']);
     
     
    }else if(loginstatus=='admin'){
      console.log("routing to admin module component");
      this.success=true;
      let login={role:loginstatus,
        status:this.success
      };
     let loginn=JSON.stringify(login);
     localStorage.setItem('login',loginn);
      this.succes_status.emit(this.success);
      this.loginform.reset();
 
      this.route.navigate(['admin']);
     
     
    }
    else if(loginstatus=='seller'){
      console.log("routing to seller module component");
      this.success=true;
      let login={role:loginstatus,
        status:this.success
      };
     let loginn=JSON.stringify(login);
     localStorage.setItem('login',loginn);
      this.succes_status.emit(this.success);
      this.loginform.reset();
 
      this.route.navigate(['seller']);
     
     
    }
    else if(loginstatus=='transporter'){
      console.log("routing to transporter module component");
      this.success=true;
      let login={role:loginstatus,
        status:this.success
      };
     let loginn=JSON.stringify(login);
     localStorage.setItem('login',loginn);
      this.succes_status.emit(this.success);
      this.loginform.reset();
 
      this.route.navigate(['transporter']);
     
     
    } else
    {
      this.success=!!loginstatus;
      let login={role:loginstatus,
        status:this.success
      };
     let loginn=JSON.stringify(login);
     localStorage.setItem('login',loginn);
      this.succes_status.emit(this.success);
    }
    $(".my").on(
      "click", function(){ 
        if(!this.success){
          console.log("jqury showing")
          $(".allr").show();
         
        }
    
  })}

  allclick(){
    $(".allr").on(
      "click", function(){ 
        if(!this.success){
          console.log("jqury showing")
         
          $(this).hide(1500);
        }
      });

  }

log(){
    this.service.loginstate=false;
    this.success=false;
    let login={role:'',
  status:false};
  let loginn=JSON.stringify(login);
localStorage.setItem('login',loginn);
   this.route.navigate([""])
  }

}
