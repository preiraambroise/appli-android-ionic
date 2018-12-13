import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { FormInterventionPage } from '../form-intervention/form-intervention';

@Component({
    selector: 'page-intervention',
    templateUrl: 'intervention.html'
})

export class InterventionPage {

    constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

    }

    PresentInterventionForm(){
        let profileModal = this.modalCtrl.create(FormInterventionPage);
        profileModal.present();
    }
}