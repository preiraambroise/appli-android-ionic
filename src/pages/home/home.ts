import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InterventionPage } from '../intervention/intervention';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToIntervention() {
    this.navCtrl.push(InterventionPage);
  }

}
