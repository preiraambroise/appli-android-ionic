import { Component } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
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
  dataProvider;
  plannings;
  resultats;
  status;
  nav: NavController;
  constructor(public viewCtrl: ViewController, dataProvider: DataProvider, nav : NavController) {
      this.dataProvider = dataProvider;
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
    this.dataProvider.EnvoyerIntervention(intervention)
        .subscribe((res) => {
            this.status = res.status;
            console.log(this.status);
            console.log(res.body);
            this.NavigateToIntervention();
        }, (err) => {
            this.status = err.status;
            console.log(this.status);
            console.log("Vous avez fait des erreurs");
        });
  }

  Getplannings(){
    this.dataProvider.GetPlannings().subscribe( (res) => {
      console.log('dataprovider request status: '+res.status);
      this.plannings = res.body['hydra:member'];
      console.log(this.plannings);
    }, (err) => {
        console.log(err.status);  });
  }

  Getresulats(){
    this.dataProvider.GetResults().subscribe( (res) => {
      console.log('dataprovider request status: '+res.status);
      this.resultats = res.body['hydra:member'];
      console.log(this.resultats);
    }, (err) => {
        console.log(err.status);  });
  }
 

}
