import { NgModule } from '@angular/core';
import { FormLoginComponent } from './form-login/form-login';
import { FormInterventionComponent } from './form-intervention/form-intervention';
import { ListresultatComponent } from './listresultat/listresultat';
import { ListplanningComponent } from './listplanning/listplanning';
@NgModule({
	declarations: [FormLoginComponent,
    FormInterventionComponent,
    ListresultatComponent,
    ListplanningComponent],
	imports: [],
	exports: [FormLoginComponent,
    FormInterventionComponent,
    ListresultatComponent,
    ListplanningComponent]
})
export class ComponentsModule {}
