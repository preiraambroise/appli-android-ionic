import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  url: string = 'http://localhost:8000/api/login_check';
  constructor(public http: HttpClient) {
  }

  login(credentials: Object){
    var loginstring = JSON.stringify(credentials);
    var headers = new HttpHeaders({
        'Content-Type':  'application/json'
      });
    return this.http.post(this.url, loginstring, { headers: headers, observe: "response"});
  }
}
