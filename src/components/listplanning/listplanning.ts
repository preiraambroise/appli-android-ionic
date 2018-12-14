import { Component } from '@angular/core';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the ListplanningComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'listplanning',
  templateUrl: 'listplanning.html',
})
export class ListplanningComponent {
  PlanningId;
  datas: any[];
  constructor(dataProvider: DataProvider) {
      dataProvider.GetPlannings().subscribe((res => {
          this.datas = res.body['hydra:member'];
          console.log(this.datas);
      }));
  }
}
