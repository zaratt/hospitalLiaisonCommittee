import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppPreloader } from './app-routing-loader';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutsModule } from './layouts/layouts.module';

// layouts & notfound
import { LayoutMainComponent } from './layouts/main/main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'patient/list',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LayoutMainComponent,
    children: [
      {
        path: 'patient',
        loadChildren: () => import('./pages/patient/patient.module').then(m => m.PatientModule)
      },
      {
        path: 'doctor',
        loadChildren: () => import('./pages/doctor/doctor.module').then(m => m.DoctorModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    //  { path: '**', component: NotFoundComponent, canActivate: [AuthGuard] },
    ],
  },
]
@NgModule({
  declarations: [

  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: AppPreloader,
    }),
    LayoutsModule,
  ],
  providers: [AppPreloader],
  exports: [RouterModule],
})
export class AppRoutingModule { }
