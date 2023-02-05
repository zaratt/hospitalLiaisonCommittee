import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AdminHlcComponent } from './admin-hlc/admin-hlc.component';
import { AdminPvgComponent } from './admin-pvg/admin-pvg.component';
import { AdminRoutingModule } from './admin-routing.module';


@NgModule({
  declarations: [AdminHlcComponent, AdminPvgComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
