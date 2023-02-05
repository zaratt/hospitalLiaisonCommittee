import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { DoctorListComponent } from './doctor-list/doctor-list.component';


const routes: Routes = [
  {
    path: '',
    component: DoctorListComponent,
    data: { title: 'Doctor' },
  }
];

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
