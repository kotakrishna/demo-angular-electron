import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RequisitionPageComponent } from './requisition-page.component';
import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from '../../shared/components/components.module';
const routes: Routes = [
    {
        path: 'req',
        component: RequisitionPageComponent
    }
];

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes), MatIconModule, ComponentsModule],
    exports: [RouterModule]
})
export class RequisitionRoutingModule { }
