import { Component } from '@angular/core';
import { ViewController, NavController, AlertController, LoadingCmp, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { InterventionPage } from '../../pages/intervention/intervention';


/**
 * Generated class for the FormInterventionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'form-intervention',
  templateUrl: 'form-intervention.html'
})
export class FormInterventionComponent {
  commentaire;
  jeton;
  Resultatid;
  Planningid;
  plannings;
  resultats;
  loading;
  dataProvider: DataProvider;
  nav: NavController;
  constructor(public viewCtrl: ViewController,
              dataProvider: DataProvider,
              nav : NavController, 
              private alertCtrl: AlertController,
              private loadingCtrl: LoadingController) {
      this.dataProvider = dataProvider;
      this.loading = this.loadingCtrl.create({
        spinner: 'hide',
        content: 'Chargement...'
      });
      this.loading.present();
      this.Getplannings();
      this.Getresulats();
      this.nav = nav;
  }

  public NavigateToIntervention(){
    this.nav.push(InterventionPage);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  EnvoyerIntervention(){
    var intervention = {
        "jeton": this.jeton,
        "qcm": {
            "commentaire": this.commentaire,
            "planning": this.Planningid,
            "resultat": this.Resultatid
        }
    };
    console.log(intervention);
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Chargement...'
    });
  
    loading.present();
    this.dataProvider.EnvoyerIntervention(intervention)
        .subscribe((res) => {
            var status = res.status;
            console.log(status);
            console.log('tout va bien');
            console.log(res.body);
            loading.dismiss();
            this.NavigateToIntervention();
        }, (err) => {
            var status = err.status;
            loading.dismiss();
            console.log(status);
            console.log('tout va mal');
            console.log("Vous avez fait des erreurs");
        });
  }

  Getplannings(){
    this.dataProvider.GetPlannings().subscribe( (res) => {
      console.log('dataprovider request status: '+res.status);
      this.plannings = res.body['hydra:member'];
      console.log(this.plannings);
    }, (err) => {
        console.log(err.status);  
    });
  }

  Getresulats(){
    this.dataProvider.GetResults().subscribe( (res) => {
      console.log('dataprovider request status: '+res.status);
      this.loading.dismiss();
      this.resultats = res.body['hydra:member'];
      console.log(this.resultats);
    }, (err) => {
        console.log(err.status);  });
  }

  public AfficherErreur(){
    let alert = this.alertCtrl.create({
      title: 'Veuillez remplir tous les champs marqués *',
      subTitle: 'Veuillez réessayer',
      buttons: ['Fermer']
    });
    alert.present();
  }
}
