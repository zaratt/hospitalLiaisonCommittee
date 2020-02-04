import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';


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
  exports: [RouterModule]
})
export class PatientRoutingModule { }
