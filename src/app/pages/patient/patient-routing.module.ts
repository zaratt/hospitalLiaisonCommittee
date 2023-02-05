import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { PatientListComponent } from './patient-list/patient-list.component';


const routes: Routes = [
  {
    path: 'list',
    component: PatientListComponent,
    data: { title: 'Patient' },
  },
  {
    path: 'pending-subscriptions',
    component: PatientListComponent,
    data: { title: 'Pending Subscriptions' },
  },
];

@NgModule({
  imports: [LayoutsModule, RouterModule.forChild(routes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
