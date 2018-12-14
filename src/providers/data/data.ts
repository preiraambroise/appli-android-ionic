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
      var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NDQ3ODExMzIsImV4cCI6MTU0NDc4NDczMiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidXNlciJ9.G9ucMWjJPHWg5F0RTiMeRwugYf8KvSPwTc0DhXS7SQ8Q-OXlW5HHCqK2DkGsZS_IzApMbSvQW3E7savU5UE_PuWBFEHxmMadM1xWCxMCG8lJRD2HC_cpOYab8TieZrDuOwl4s66vmBgDXNla7zcEX1D7dAmnZn2_yAgZaWabrjtvc4z9YDnrFF7UXOLTY9qd8ds01T-TItPeTsbUmgJ2bWu6wq6HvO2UyDf3YWr6Dk7I3sqoYG97uq7MhDbAuylUwWEphDoGmBd1P5E1QCGmGIRjXaH6jsrEUcpS6SnHLXd1nYtujkwmLE8xjfzYcbh4XvFZTWpgtdrXktml3cx28oYj2BqAULIhYVmcWBuVw1Eu8OoA4tVFzULXjvmVoeNLMbvkhAn_L8X9QwkhfE_WO95Yhtc-lSg_O1TaLNm3qNP1i3V8LPlNX-GxDMiTKNZWlxY--JNy_qSuz1cMo-6qdm4Ib1y87p3nREOBPFn55HsBDmVoLrhIYPdhosCue8Wbxwy-uj6e1z5eBdkVliVJhdNzRldIJ4LlLNABFK4MsZ68DxMtOw75137eTryuHQ3kmwCmzWYYNerhKmFXpA2Ocq7N9VyUdz4aVAtjbv8AgUXA5UBLmYTuILtVrQjhCaxmI9Bs6ebufWM4EfNwp0bRdNyMBzS5_O4x0kSq0irlgQ4';
      var headers = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ token, 
      });
      return this.http.get(this.url + 'api/resultats', {headers :headers, observe: "response"});
  }

  GetPlannings(){
      var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NDQ3ODExMzIsImV4cCI6MTU0NDc4NDczMiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidXNlciJ9.G9ucMWjJPHWg5F0RTiMeRwugYf8KvSPwTc0DhXS7SQ8Q-OXlW5HHCqK2DkGsZS_IzApMbSvQW3E7savU5UE_PuWBFEHxmMadM1xWCxMCG8lJRD2HC_cpOYab8TieZrDuOwl4s66vmBgDXNla7zcEX1D7dAmnZn2_yAgZaWabrjtvc4z9YDnrFF7UXOLTY9qd8ds01T-TItPeTsbUmgJ2bWu6wq6HvO2UyDf3YWr6Dk7I3sqoYG97uq7MhDbAuylUwWEphDoGmBd1P5E1QCGmGIRjXaH6jsrEUcpS6SnHLXd1nYtujkwmLE8xjfzYcbh4XvFZTWpgtdrXktml3cx28oYj2BqAULIhYVmcWBuVw1Eu8OoA4tVFzULXjvmVoeNLMbvkhAn_L8X9QwkhfE_WO95Yhtc-lSg_O1TaLNm3qNP1i3V8LPlNX-GxDMiTKNZWlxY--JNy_qSuz1cMo-6qdm4Ib1y87p3nREOBPFn55HsBDmVoLrhIYPdhosCue8Wbxwy-uj6e1z5eBdkVliVJhdNzRldIJ4LlLNABFK4MsZ68DxMtOw75137eTryuHQ3kmwCmzWYYNerhKmFXpA2Ocq7N9VyUdz4aVAtjbv8AgUXA5UBLmYTuILtVrQjhCaxmI9Bs6ebufWM4EfNwp0bRdNyMBzS5_O4x0kSq0irlgQ4';
      var headers = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ token, 
      });
      return this.http.get(this.url + 'api/plannings', {headers :headers, observe: "response"});
  }

  EnvoyerIntervention(intervention: Object){
      var interventionstring = JSON.stringify(intervention);
      var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NDQ3ODExMzIsImV4cCI6MTU0NDc4NDczMiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidXNlciJ9.G9ucMWjJPHWg5F0RTiMeRwugYf8KvSPwTc0DhXS7SQ8Q-OXlW5HHCqK2DkGsZS_IzApMbSvQW3E7savU5UE_PuWBFEHxmMadM1xWCxMCG8lJRD2HC_cpOYab8TieZrDuOwl4s66vmBgDXNla7zcEX1D7dAmnZn2_yAgZaWabrjtvc4z9YDnrFF7UXOLTY9qd8ds01T-TItPeTsbUmgJ2bWu6wq6HvO2UyDf3YWr6Dk7I3sqoYG97uq7MhDbAuylUwWEphDoGmBd1P5E1QCGmGIRjXaH6jsrEUcpS6SnHLXd1nYtujkwmLE8xjfzYcbh4XvFZTWpgtdrXktml3cx28oYj2BqAULIhYVmcWBuVw1Eu8OoA4tVFzULXjvmVoeNLMbvkhAn_L8X9QwkhfE_WO95Yhtc-lSg_O1TaLNm3qNP1i3V8LPlNX-GxDMiTKNZWlxY--JNy_qSuz1cMo-6qdm4Ib1y87p3nREOBPFn55HsBDmVoLrhIYPdhosCue8Wbxwy-uj6e1z5eBdkVliVJhdNzRldIJ4LlLNABFK4MsZ68DxMtOw75137eTryuHQ3kmwCmzWYYNerhKmFXpA2Ocq7N9VyUdz4aVAtjbv8AgUXA5UBLmYTuILtVrQjhCaxmI9Bs6ebufWM4EfNwp0bRdNyMBzS5_O4x0kSq0irlgQ4';
      var headers = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ token, 
      });
      return this.http.post(this.url + 'api/interventions', interventionstring, {headers: headers, observe: "response"}); 
    }
}
