import { Component, OnInit } from '@angular/core';
import { ServicService } from 'src/app/servic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  selectedlist=[];
  selected_count;
  constructor(private serv:ServicService, private route:Router) { }

  ngOnInit() {
    var login=localStorage.getItem('login');
    let loginn=JSON.parse(login);
    
    console.log(loginn);
    
    console.log(this.serv.loginstate);
   if (!loginn.status){
     this.route.navigate([""]);

   }
    // if(this.service.loginstate){
    this.selected_count=this.serv.checkout_products.selected_count;
    this.selectedlist=this.serv.checkout_products.selected;
  }

}
