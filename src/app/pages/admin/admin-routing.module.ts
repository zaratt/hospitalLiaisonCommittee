import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
