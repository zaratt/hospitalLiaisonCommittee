import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { SharedModule } from '../../shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DoctorListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DoctorRoutingModule,
    SharedModule,
  ]
})
export class DoctorModule { }
