import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicService } from '../servic.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {

  constructor(private ser:ServicService,private route:Router) { }

  ngOnInit() {
    let role=this.ser.role;
    if(role!='seller'){
      this.route.navigate(['']);

  }

}
}
