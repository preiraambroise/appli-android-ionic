import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { InterventionPage } from '../../pages/intervention/intervention';
import { DataProvider } from '../../providers/data/data';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  constructor(nav : NavController,
              dataProvider: DataProvider,
              private alertCtrl: AlertController,
              private storage: Storage,
              private loadingCtrl: LoadingController
              ) {
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
      let loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: 'Chargement...'
      });
    
      loading.present();
      this.dataProvider.login(credentials)
        .subscribe((res) => {
            console.log('status code: ' + res.status);
            this.dataProvider.SetToken(res.body["token"]);
            console.log(res.body["token"]);
            status = res.status;
        }, (err) => {
            console.log('status code: ' + err.status);
            status = err.status;
        }).add(() => {
          console.log(status);
          if (status == 200)
          {
              console.log(status);
              loading.dismiss();
              this.NavigateToIntervention();
          }
          if (status == 401)
          {
              console.log(status);
              loading.dismiss();
              this.AfficherErreur();
          } 
      });
  }

  public NavigateToIntervention(){
      this.nav.push(InterventionPage);
  }

  public AfficherErreur(){
    let alert = this.alertCtrl.create({
      title: 'Identifiants incorrects',
      subTitle: 'Veuillez réessayer',
      buttons: ['Fermer']
    });
    alert.present();
    this.username = "";
    this.password = "";
  }
}