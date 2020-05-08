import { Injectable, Output,EventEmitter } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {
  kitchenImages:Array<any>=[];
  constructor(private http: HttpClient) { 
     }
    getKitchenImageDetails(route?):Observable<any>{
      let settings: any = {
        "userName":'mmnm',
        "password":'nnnn',
        'Access-Control-Allow-Origin': 'http://localhost:4200',
        'Access-Control-Allow-Credentials': 'true',
        'timeZoneOffset': new Date().getTimezoneOffset(),
        'body':route
      };
      const httpOptions = {
        headers: new HttpHeaders(settings)
      };
    return this.http.get(`https://serveee.herokuapp.com/${route}`,httpOptions
    );
    }
}
