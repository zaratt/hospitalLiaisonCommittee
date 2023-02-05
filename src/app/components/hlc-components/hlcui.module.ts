import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartistModule } from 'ng-chartist';
import { SharedModule } from 'src/app/shared.module';


import { ChartCardComponent } from './chartCard/chart-card.component';


const COMPONENTS = [ChartCardComponent,]

@NgModule({
  imports: [SharedModule, FormsModule, ReactiveFormsModule, ChartistModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class HlcUIModule { }
