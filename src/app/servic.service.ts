import { Injectable } from '@angular/core';

@Injectable()
export class ServicService {


 loginstate:boolean=false;
 logins=[
   {email:'bharath',
   password:'bharath',
   agent:'seller'
  },
  {email:'ishitha',
password:'ishitha',
agent:'admin'},
{email:'sweety',
password:'sweety',
agent:'transporter'},
{email:'raju',
password:'raju',
agent:'buyer'}

 ];
 role:string;

 checkout_products={selected:[],
selected_count:0};
 
  constructor() { }

  
  comparelogins(val){
    
    
let check=this.logins.indexOf(this.logins.find(ele=>ele.email==val.email));
if(check>=0){
  if(this.logins[check].email==val.email && this.logins[check].password==val.password){
  this.loginstate=true;
  console.log(val);
  this.role=this.logins[check].agent;
  return this.logins[check].agent;}
  else{
    this.loginstate=false;
return this.loginstate;
  }
}
else if(check<0){
  console.log("not found");
this.loginstate=false;
return this.loginstate;
}
  }
}
