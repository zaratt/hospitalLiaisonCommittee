import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared.module';
import { HlcUIModule } from 'src/app/components/hlc-components/hlcui.module';
import { ChartistModule } from 'ng-chartist';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HlcUIModule,
    ChartistModule
  ]
})
export class DashboardModule { }
