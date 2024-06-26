import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CovidUpdatesComponent } from './covid-updates/covid-updates.component';
import { OntarioStatusComponent } from './ontario-status/ontario-status.component';



@NgModule({
  declarations: [CovidUpdatesComponent, OntarioStatusComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [CovidUpdatesComponent, OntarioStatusComponent]
})
export class ComponentsModule { }
