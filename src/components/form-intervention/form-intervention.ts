import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

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

  constructor(public viewCtrl: ViewController) {
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
