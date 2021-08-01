import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { HomeRoutingModule } from './home/home-routing.module';
import { DetailRoutingModule } from './detail/detail-routing.module';
import { LoginPageRoutingModule } from './pages/login-page/login-page-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { RequisitionPageComponent } from './pages/requisition-page/requisition-page.component';
import { RequisitionRoutingModule } from './pages/requisition-page/requisition-page-routing.module';
import { ReqsModule } from './pages/reqs/reqs.module';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login-page',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },
  {
    path: 'req',
    redirectTo: 'reqs',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    HomeRoutingModule,
    DetailRoutingModule,
    ReqsModule,
    LoginPageRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    // RequisitionRoutingModule
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }
