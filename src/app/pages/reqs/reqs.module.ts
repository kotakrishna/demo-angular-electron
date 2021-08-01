import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReqsRoutingModule } from './reqs-routing.module';
import { ReqsComponent } from './reqs.component';

import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from "../../shared/material/material.module"
@NgModule({
  declarations: [
    ReqsComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReqsRoutingModule,
    MaterialModule
  ]
})
export class ReqsModule { }
