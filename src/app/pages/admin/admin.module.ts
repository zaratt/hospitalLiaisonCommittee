import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHlcComponent } from './admin-hlc/admin-hlc.component';
import { AdminPvgComponent } from './admin-pvg/admin-pvg.component';


@NgModule({
  declarations: [AdminHlcComponent, AdminPvgComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
