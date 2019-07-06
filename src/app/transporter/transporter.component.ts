import { Component, OnInit } from '@angular/core';
import { ServicService } from '../servic.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transporter',
  templateUrl: './transporter.component.html',
  styleUrls: ['./transporter.component.css']
})
export class TransporterComponent implements OnInit {

  constructor(private ser:ServicService,private route:Router) { 


  }

  ngOnInit() {
    let role=this.ser.role;
    if(role!='transporter'){
      this.route.navigate(['']);

    }
  }

}
