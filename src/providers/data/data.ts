import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import  'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';



/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  token: string;
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
      var headers = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ this.token, 
      });
      return this.http.get(this.url + 'api/resultats', {headers :headers, observe: "response"});
  }

  GetPlannings(){
    var headers = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ this.token, 
      });
      return this.http.get(this.url + 'api/plannings', {headers :headers, observe: "response"});
  }

  EnvoyerIntervention(intervention: Object){
      var interventionstring = JSON.stringify(intervention);
      var headers = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ this.token, 
      });
      return this.http.post(this.url + 'api/interventions', interventionstring, {headers: headers, observe: "response"}); 
    }
    
  SetToken(value: string){
    this.token = value;
  }

  GetToken(){
    return this.token;
  }
}
