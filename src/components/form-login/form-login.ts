import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InterventionPage } from '../../pages/intervention/intervention';
import { DataProvider } from '../../providers/data/data';
import { AlertController } from 'ionic-angular';

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
  alertC: AlertController;
  username: string;
  password: string;
  haserror: boolean = false;
  errormessage: string = "Un message";

  constructor(nav : NavController, dataProvider: DataProvider, private alertCtrl: AlertController ) {
    this.dataProvider = dataProvider;
    this.nav = nav;
    this.alertC == alertCtrl;
  }

  Login(){
      var credentials = {
        "username": this.username,
        "password": this.password
      }
      var status;
      this.dataProvider.login(credentials)
        .subscribe((res) => {
            console.log('status code: ' + res.status);
            console.log(res);
            status = res.status;
        }, (err) => {
            console.log('status code: ' + err.status);
            status = err.status;
        }).add(() => {
          console.log(status);
          if (status == 200)
          {
              console.log(status);
              this.NavigateToIntervention();
          }
          if (status == 401)
          {
              console.log(status);
              this.AfficherErreur();
          } 
      });
  }

  public NavigateToIntervention(){
      this.nav.push(InterventionPage);
  }

  public AfficherErreur(){
    let alert = this.alertCtrl.create({
      title: 'Identifiant incorrect',
      subTitle: 'Veuillez réessayer',
      buttons: ['Fermer']
    });
    alert.present();
    this.username = "";
    this.password = "";
  }
}