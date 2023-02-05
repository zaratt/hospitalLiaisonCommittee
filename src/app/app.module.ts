import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IconDefinition } from '@ant-design/icons-angular';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducers } from './store/reducers/app.reducers';

/**
 * Locale Registration
 */
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { default as localeEn } from '@angular/common/locales/en';
import { NZ_I18N, pt_BR as localeZorro } from 'ng-zorro-antd/i18n';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { HlcUIModule } from './components/hlc-components/hlcui.module';
const LOCALE_PROVIDERS = [
  { provide: LOCALE_ID, useValue: 'en' },
  { provide: NZ_I18N, useValue: localeZorro },
]
registerLocaleData(localeEn, 'en')

/**
 * AntDesign Icons
 */
const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition
}
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    StoreRouterConnectingModule.forRoot(),
    AppRoutingModule,
    HlcUIModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    ...LOCALE_PROVIDERS,
    { provide: NZ_ICONS, useValue: icons },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
