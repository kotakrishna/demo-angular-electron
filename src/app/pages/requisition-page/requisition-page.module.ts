import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from "../../shared/components/components.module"
import { RequisitionRoutingModule } from "./requisition-page-routing.module";
import { RequisitionPageComponent } from "./requisition-page.component";
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  declarations: [RequisitionPageComponent],
  imports: [
    SharedModule,
    RequisitionRoutingModule,
    CommonModule,
    ComponentsModule
  ]
})
export class RequisitionPageModule { }
