import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedModule } from '../../shared.module';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './footer/footer.component';
import { MenuLeftComponent } from './menu/menu-left/menu-left.component';
import { MenuTopComponent } from './menu/menu-top/menu-top.component';

const COMPONENTS = [
  MenuLeftComponent,
  MenuTopComponent,
  FooterComponent,
  BreadcrumbsComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [SharedModule, ReactiveFormsModule, PerfectScrollbarModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutModule { }
