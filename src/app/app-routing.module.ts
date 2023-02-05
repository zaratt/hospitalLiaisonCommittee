import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppPreloader } from './app-routing-loader';
import { LayoutsModule } from './layouts/layouts.module';
import { SharedModule } from './shared.module';

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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AppPreloader],
  exports: [RouterModule],
})
export class AppRoutingModule { }
