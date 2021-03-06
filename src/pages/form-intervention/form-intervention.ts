import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

/**
 * Generated class for the FormInterventionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-form-intervention',
  templateUrl: 'form-intervention.html',
})
export class FormInterventionPage {

  constructor(public viewCtrl: ViewController) {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
