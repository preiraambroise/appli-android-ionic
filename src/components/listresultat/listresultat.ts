import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ListresultatComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'listresultat',
  templateUrl: 'listresultat.html'
})
export class ListresultatComponent {

  datas: any[];
  status;

  constructor(dataProvider: DataProvider) {
      dataProvider.GetResults().subscribe((res) => {
          this.status = res.status;
          console.log('dataprovider request status: '+res.status);
          this.datas = res.body['hydra:member'];
      }, (err) => {
            this.status = err.status;
            console.log('dataprovider request status: '+this.status);
      });
  }
}
