import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LayoutModule } from '../components/layout-components/layout-component.module';
import { SharedModule } from '../shared.module';
import { LayoutMainComponent } from './main/main.component';

const COMPONENTS = [LayoutMainComponent];

@NgModule({
  imports: [SharedModule, LayoutModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class LayoutsModule { }
