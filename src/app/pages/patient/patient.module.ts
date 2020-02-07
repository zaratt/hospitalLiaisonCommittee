import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientListComponent } from './patient-list/patient-list.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from '../../shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';


@NgModule({
  declarations: [PatientListComponent],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    SharedModule
  ]
})
export class PatientModule { }
