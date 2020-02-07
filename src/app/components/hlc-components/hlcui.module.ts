import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';
import { ChartistModule } from 'ng-chartist';


import { ChartCardComponent } from './chartCard/chart-card.component';


const COMPONENTS = [ ChartCardComponent,]

@NgModule({
  imports: [SharedModule, FormsModule, ReactiveFormsModule, ChartistModule, CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class HlcUIModule {}
