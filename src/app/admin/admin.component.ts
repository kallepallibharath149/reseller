import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicService } from '../servic.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private ser:ServicService,private route:Router) { }

  ngOnInit() {
    let role=this.ser.role;
    if(role!='admin'){
      this.route.navigate(['']);}
      var rols=sessionStorage.getItem(role);
      if(rols){
        this.route.navigate([rols]);
      }
  }

}

