import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { tokenKey } from '@angular/core/src/view';


/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  url: string = 'http://localhost:8000/';
  constructor(public http: HttpClient) {
  }

  login(credentials: Object){
    var loginstring = JSON.stringify(credentials);
    var headers = new HttpHeaders({
        'Content-Type':  'application/json'
      });
    console.log(loginstring);
    return this.http.post(this.url + 'api/login_check', loginstring, { headers: headers, observe: "response"});
  }

  GetResults(){
      var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NDQ3MDg3MjIsImV4cCI6MTU0NDcxMjMyMiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidXNlciJ9.Qp8mkBhu0l5mqM-RKi2tStTZcDMmTidIN5gu64xLuJsZsrb_P6XqKgy7RsX0YlVNMLOlDMZekqvW4zT0CwOGGr2tWHSkWxfZxZYzGwvCPDeUNhKQWUpR1dY7pcQ4y7j8MPOHoZYqa_OCiFl7lLIkeba1grs7qkI5jJWCaYSG-CxywslHOPb6FuDOE1Pq9AjQhU--Q5QvUjvco-UqhI581n3vyoIKPYm5Irt7q3ow0EHzbyVbwh0IMiSE_EjAELLZsDCXjqFDxQ2AhNsx_dW4e_-cf4FyrTPo-PDNUk85rZHhqaG7e0PB4BaPyqnZzdYMMYjXLB20axZxslnTG130AP-ZCAgJDnRMBsAlq3fz12-KPl43HlFk62e8LJVJY7UgBfb8FTLjj-BaYCOOD_LqFxo3axvqqO4yukOqkPmrieL3BPVal3sFXP2UrIaZGc_tO43b4KRWNGyu_1C39gOe2Mo6gLOV8fbbpGHUQmS9DsITT6eOJZ6V-DIceDjVZWA3BHZyDp3s29Ffkvd_6vdgLzm8GxQ9nmVKACq0k6A6p8SFpUL81E7LUnmt0JZif7Jvbn-Knr4XReOufIK4gHIXTQroArMmK2wISoDOI7XbI87j6-5cmU6DBjkebODe5Q5cxiGDo6qbPo8ZptIsmJpaJcJJGpmFeCvBko6ptaVCIaI';
      var headers = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ token, 
      });
      return this.http.get(this.url + 'api/resultats', {headers :headers, observe: "response"});
  }

  GetPlannings(){
      var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NDQ3MDg3MjIsImV4cCI6MTU0NDcxMjMyMiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidXNlciJ9.Qp8mkBhu0l5mqM-RKi2tStTZcDMmTidIN5gu64xLuJsZsrb_P6XqKgy7RsX0YlVNMLOlDMZekqvW4zT0CwOGGr2tWHSkWxfZxZYzGwvCPDeUNhKQWUpR1dY7pcQ4y7j8MPOHoZYqa_OCiFl7lLIkeba1grs7qkI5jJWCaYSG-CxywslHOPb6FuDOE1Pq9AjQhU--Q5QvUjvco-UqhI581n3vyoIKPYm5Irt7q3ow0EHzbyVbwh0IMiSE_EjAELLZsDCXjqFDxQ2AhNsx_dW4e_-cf4FyrTPo-PDNUk85rZHhqaG7e0PB4BaPyqnZzdYMMYjXLB20axZxslnTG130AP-ZCAgJDnRMBsAlq3fz12-KPl43HlFk62e8LJVJY7UgBfb8FTLjj-BaYCOOD_LqFxo3axvqqO4yukOqkPmrieL3BPVal3sFXP2UrIaZGc_tO43b4KRWNGyu_1C39gOe2Mo6gLOV8fbbpGHUQmS9DsITT6eOJZ6V-DIceDjVZWA3BHZyDp3s29Ffkvd_6vdgLzm8GxQ9nmVKACq0k6A6p8SFpUL81E7LUnmt0JZif7Jvbn-Knr4XReOufIK4gHIXTQroArMmK2wISoDOI7XbI87j6-5cmU6DBjkebODe5Q5cxiGDo6qbPo8ZptIsmJpaJcJJGpmFeCvBko6ptaVCIaI';
      var headers = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ token, 
      });
      return this.http.get(this.url + 'api/plannings', {headers :headers, observe: "response"});
  }
}
