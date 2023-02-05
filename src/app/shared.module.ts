import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

const MODULES = [CommonModule, RouterModule, NgZorroAntdModule];

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
