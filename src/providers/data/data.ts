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
      var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NDQ3ODM4OTcsImV4cCI6MTU0NDc4NzQ5Nywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidXNlcjIifQ.mBqVNrIKITveTEZDPagGdmhWSX8kxJumEJSLmBLcPd8iaZwUjS_HfLrIWPO7P1iru4GVScBdsJ-pBCovNUwGcN2F-5vz_N3Om0oXHAxEu5Sgf-Jmj4Ib3a9WHwOjlgV6cggE-TgtGoUbmFVbxQ3bIm9xv0I-hWzgAKGVjJbwtQbHfiIcjZZxbRONi9R8JnCdaB5-wqm4zB24XWP8nijvHsAXXWXkw-CaHyHpMHc47AMRmQSXnjA92Mo5sO_nqa9qk_FBALBzD3tXxZ_9yCDl4mJqF2qLqIduRfIhhnlg_utbnLHPAdpiBpYl4spX0CkzHzU5wR5NyxQc2ZGXw_eKeQHH8tHjNLNzHrQ78aR6T8ZHIOjfPGVAHBEw1d96Smpsb_VVtdVxofduOn6pOs6iY7LI2uua66XfvyGycbUnBzxooD8ShRBM-6Nvv9Eny_Bn1QFMGezVL-MEYQG8FsOktI2K5eYJ8fexRTjjvDwA5T7O2TQTeJ3zxssbEplPhZrb3bUnw09fRblfJnHdnhg9Q7fOFNeSS4y5-FxNrp7FhYiXgmqlJrrjyq-13FYTLWRmd3wcp0XkV4oOdVVtSkHqASBP5Hp9w9O5ginulkfSyBCu_Qtq2RFHuKobTWKNZ07867GuGAgNEc7zEI_IEH32r077rk3i65Of1zqGU4c3J6M';
      var headers = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ token, 
      });
      return this.http.get(this.url + 'api/resultats', {headers :headers, observe: "response"});
  }

  GetPlannings(){
    var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NDQ3ODM4OTcsImV4cCI6MTU0NDc4NzQ5Nywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidXNlcjIifQ.mBqVNrIKITveTEZDPagGdmhWSX8kxJumEJSLmBLcPd8iaZwUjS_HfLrIWPO7P1iru4GVScBdsJ-pBCovNUwGcN2F-5vz_N3Om0oXHAxEu5Sgf-Jmj4Ib3a9WHwOjlgV6cggE-TgtGoUbmFVbxQ3bIm9xv0I-hWzgAKGVjJbwtQbHfiIcjZZxbRONi9R8JnCdaB5-wqm4zB24XWP8nijvHsAXXWXkw-CaHyHpMHc47AMRmQSXnjA92Mo5sO_nqa9qk_FBALBzD3tXxZ_9yCDl4mJqF2qLqIduRfIhhnlg_utbnLHPAdpiBpYl4spX0CkzHzU5wR5NyxQc2ZGXw_eKeQHH8tHjNLNzHrQ78aR6T8ZHIOjfPGVAHBEw1d96Smpsb_VVtdVxofduOn6pOs6iY7LI2uua66XfvyGycbUnBzxooD8ShRBM-6Nvv9Eny_Bn1QFMGezVL-MEYQG8FsOktI2K5eYJ8fexRTjjvDwA5T7O2TQTeJ3zxssbEplPhZrb3bUnw09fRblfJnHdnhg9Q7fOFNeSS4y5-FxNrp7FhYiXgmqlJrrjyq-13FYTLWRmd3wcp0XkV4oOdVVtSkHqASBP5Hp9w9O5ginulkfSyBCu_Qtq2RFHuKobTWKNZ07867GuGAgNEc7zEI_IEH32r077rk3i65Of1zqGU4c3J6M';
    var headers = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ token, 
      });
      return this.http.get(this.url + 'api/plannings', {headers :headers, observe: "response"});
  }

  EnvoyerIntervention(intervention: Object){
      var interventionstring = JSON.stringify(intervention);
      var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NDQ3ODM4OTcsImV4cCI6MTU0NDc4NzQ5Nywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidXNlcjIifQ.mBqVNrIKITveTEZDPagGdmhWSX8kxJumEJSLmBLcPd8iaZwUjS_HfLrIWPO7P1iru4GVScBdsJ-pBCovNUwGcN2F-5vz_N3Om0oXHAxEu5Sgf-Jmj4Ib3a9WHwOjlgV6cggE-TgtGoUbmFVbxQ3bIm9xv0I-hWzgAKGVjJbwtQbHfiIcjZZxbRONi9R8JnCdaB5-wqm4zB24XWP8nijvHsAXXWXkw-CaHyHpMHc47AMRmQSXnjA92Mo5sO_nqa9qk_FBALBzD3tXxZ_9yCDl4mJqF2qLqIduRfIhhnlg_utbnLHPAdpiBpYl4spX0CkzHzU5wR5NyxQc2ZGXw_eKeQHH8tHjNLNzHrQ78aR6T8ZHIOjfPGVAHBEw1d96Smpsb_VVtdVxofduOn6pOs6iY7LI2uua66XfvyGycbUnBzxooD8ShRBM-6Nvv9Eny_Bn1QFMGezVL-MEYQG8FsOktI2K5eYJ8fexRTjjvDwA5T7O2TQTeJ3zxssbEplPhZrb3bUnw09fRblfJnHdnhg9Q7fOFNeSS4y5-FxNrp7FhYiXgmqlJrrjyq-13FYTLWRmd3wcp0XkV4oOdVVtSkHqASBP5Hp9w9O5ginulkfSyBCu_Qtq2RFHuKobTWKNZ07867GuGAgNEc7zEI_IEH32r077rk3i65Of1zqGU4c3J6M';
      var headers = new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+ token, 
      });
      return this.http.post(this.url + 'api/interventions', interventionstring, {headers: headers, observe: "response"}); 
    }
}
