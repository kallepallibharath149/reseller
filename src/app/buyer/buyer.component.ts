import { Component, OnInit } from '@angular/core';
import { ServicService } from '../servic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit {
  product_count:number=0;
  limit_exceeds:boolean=false;
  slected_products=[];
  products=[
    {name:'paste', price:80, img:"hsdvnd"},
    {name:'rice', price:90, img:"hsdvnd"}
  ]
logstatus:boolean=false;
  constructor(private serv:ServicService, private route:Router) { }

  ngOnInit() {
    let role=this.serv.role;
    console.log("hello from buyer")
    if(role!='buyer'){
      this.route.navigate(['']);
  }
  //  this.logstatus= this.serv.loginstate;
  //  if(!this.logstatus){
  //    this.route.navigate(['']);
  //  }
  }
  log(){
    this.serv.loginstate=false;
    this.logstatus=false;
   this.route.navigate([""])
  }
  add_to_cart(item){
console.log(item);

if(this.product_count>9){
  this.limit_exceeds=true;
}else{
  this.product_count+=1;
  this.slected_products.push(item);
  console.log(this.slected_products);
}
  }

  moveto_checkout(){
    if(this.product_count>=1){
      this.serv.checkout_products.selected=this.slected_products;
      this.serv.checkout_products.selected_count=this.product_count;
      this.route.navigate(["/buyer/checkout"]);
    }
  }
}
