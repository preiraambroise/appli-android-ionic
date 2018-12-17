import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { FormInterventionPage } from '../form-intervention/form-intervention';
import { Storage } from '@ionic/storage';
import { DataProvider } from '../../providers/data/data';

@Component({
    selector: 'page-intervention',
    templateUrl: 'intervention.html'
})

export class InterventionPage {

    token: String;
    constructor(public navCtrl: NavController,
                public modalCtrl: ModalController,
                private storage: Storage,
                private dataProvider: DataProvider
                ) {
            this.token = dataProvider.GetToken();
    }

    PresentInterventionForm(){
        let profileModal = this.modalCtrl.create(FormInterventionPage);
        profileModal.present();
    }
}