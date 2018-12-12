import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InterventionPage } from '../../pages/intervention/intervention';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the FormLoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form-login',
  templateUrl: 'form-login.html'
})
export class FormLoginComponent {
  nav: NavController;
  dataProvider: DataProvider;
  username: string;
  password: string;

  constructor(nav : NavController, dataProvider: DataProvider ) {
    this.dataProvider = dataProvider;
    this.nav = nav;
  }

  Login(){
      var credentials = {
        "username": this.username,
        "password": this.password
      }
      var response;
      this.dataProvider.login(credentials)
        .subscribe((res) => {
            console.log(res.status);
        }, (err) => {
            console.log(err.status);
        });
  }

  NavigateToIntervention()
  {
      this.nav.push(InterventionPage);
  }
}