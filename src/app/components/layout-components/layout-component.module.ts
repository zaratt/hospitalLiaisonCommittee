import { NgModule } from '@angular/core';

import { MenuLeftComponent } from './menu/menu-left/menu-left.component';
import { MenuTopComponent } from './menu/menu-top/menu-top.component';
import { SharedModule } from '../../shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

const COMPONENTS = [
  MenuLeftComponent,
  MenuTopComponent,
  FooterComponent,
  BreadcrumbsComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  imports: [SharedModule, ReactiveFormsModule],
})
export class LayoutModule { }
