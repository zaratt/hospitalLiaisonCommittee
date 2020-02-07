import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHlcComponent } from './admin-hlc/admin-hlc.component';
import { AdminPvgComponent } from './admin-pvg/admin-pvg.component';


const routes: Routes = [
  {
    path: '',
    component: AdminHlcComponent,
    data: { title: 'HLC' },
  },
  {
    path: 'pvg',
    component: AdminPvgComponent,
    data: { title: 'PVG' },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
