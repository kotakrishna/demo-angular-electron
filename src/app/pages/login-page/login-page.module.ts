import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { MatCardModule } from '@angular/material/card'
// import { MaterialModule } from '../../shared/material/material.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    MatCardModule,
    // MaterialModule,
    SharedModule
  ]
})
export class LoginPageModule { }
