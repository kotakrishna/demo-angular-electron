import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon"
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { InputPageComponent } from './input-page/input-page.component';
import { TablesComponent } from './tables/tables.component';
import { AccordionComponent } from './accordion/accordion.component';
import { StepperComponent } from './stepper/stepper.component';
import { Routes, RouterModule } from '@angular/router';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [NavbarComponent, PageNotFoundComponent, InputPageComponent, TablesComponent, AccordionComponent, StepperComponent, PieChartComponent],
  imports: [MaterialModule, CommonModule, MatIconModule, RouterModule],
  exports: [NavbarComponent, PageNotFoundComponent, InputPageComponent, TablesComponent, AccordionComponent, StepperComponent, PieChartComponent]
})
export class ComponentsModule { }
