import { Injectable, Output,EventEmitter } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
@Output('logInStatus') logInStatus=new EventEmitter();
@Output('corousalHeight') corousalHeight=new EventEmitter();
@Output('resizeEvent') resizeEvent=new EventEmitter();
@Output('scrollEvent') scrollEvent=new EventEmitter();
logInOBJ={
  logInStatus:false,
  loginType:''
}
constructor(private http: HttpClient) { 
   }
   checkInitial(){
    this.logInStatus.emit(this.logInOBJ);
   }
  updateLogInObject(data?:any){
    let loginType='';
    if(data.userName.toLowerCase()=='faculty' ){
      loginType='faculty';
      this.logInOBJ.logInStatus=true;
      this.logInOBJ.loginType=loginType;
      this.logInStatus.emit(this.logInOBJ);
    } else  if(data.userName.toLowerCase()=='admin'){
      loginType='admin';
      this.logInOBJ.logInStatus=true;
      this.logInOBJ.loginType=loginType;
      this.logInStatus.emit(this.logInOBJ);
    } else  if(data.userName.toLowerCase()=='student'){
      loginType='student';
      this.logInOBJ.logInStatus=true;
      this.logInOBJ.loginType=loginType;
      this.logInStatus.emit(this.logInOBJ);
    } else{
      this.logInOBJ.logInStatus=false;
      this.logInOBJ.loginType='';
      this.logInStatus.emit(this.logInOBJ);
    }
   

  }
  callApi(data):Observable<any>{
    let settings: any = {
      "userName":data.userName,
      "password":data.password,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
      'timeZoneOffset': new Date().getTimezoneOffset()
    };
    const httpOptions = {
      headers: new HttpHeaders(settings)
    };
return this.http.get("https://serveee.herokuapp.com/",httpOptions);
  }
  fileStorage(data):Observable<any>{
    let settings: any = {
      "userName":'mmnm',
      "password":'nnnn',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Credentials': 'true',
      'timeZoneOffset': new Date().getTimezoneOffset(),
      'body':data
    };
    const httpOptions = {
      headers: new HttpHeaders(settings)
    };
  return this.http.post("https://serveee.herokuapp.com/fileupload",data);
  }
  updateCorousalHeight(height, widowSizes?){
    let obj={
      height:height,
      widowData:widowSizes
    }
    this.corousalHeight.emit(obj);
    this.resizeEvent.emit(obj);
  }
  scrollEventUpdate(scroll){
    this.scrollEvent.emit(scroll);
  }
}
