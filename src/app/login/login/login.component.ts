import { Component, OnInit,ElementRef, AfterViewInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import * as $ from 'jquery';
// declare const  start:any;

//import { showNotification } from 'src/assets/fileuploadScripts/bundle';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit,AfterViewInit {

  constructor(private logInService:LoginService,
    private spinnerService: Ng4LoadingSpinnerService) { }
  login={
  userName:'',
  password:''
}
loginerrorMessage:string='';
  ngOnInit() {
    this.logInService.logInStatus.subscribe(data=>{
      if(!data.logInStatus){
        if(data.loginType.toLowerCase()=='unknown'){
          this.loginerrorMessage='User Name and Password incorrect'
        }
      }
    })
  }
  loggin(){
        let logindata=Object.assign({},this.login);
     if( logindata.userName && logindata.password){
      this.spinnerService.show();
      this.logInService.callApi(logindata).subscribe(data=>{
        let dataa= data[0];
        this.logInService.updateLogInObject(dataa);
      })  
     } 
    
    // let logindata=Object.assign({},this.login);
    // if(logindata.userName && logindata.password){
    //   this.logInService.updateLogInObject(logindata);
    // } else {
    //   this.loginerrorMessage='User Name and Password fields required'
    // }
    
  }
  // formSubmit(){

  // }
  handleFiles(data){
    const selectedFile:any = document.getElementById('input');
    let dataa=<File>selectedFile.files[0];
    const formData:any = new FormData();
    var image:any = document.getElementById('output');
    image.src = URL.createObjectURL(dataa);
    formData.append('myFile', dataa);
    formData.append('myfilename',dataa.name);
this.logInService.fileStorage(formData).subscribe(()=>{
  alert();
})

  }
  ngAfterViewInit(){
    // $("#check").append('<button (click)="check()">check</button>');
    // Wrap every letter in a span
    //

  }
  check(){
//alert();
  //
  // start();
  }
}
