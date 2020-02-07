import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';


const routes: Routes = [
  {
    path: '',
    component: DoctorListComponent,
    data: { title: 'Doctor' },
  }
];

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
