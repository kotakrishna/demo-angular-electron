import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { ComponentsModule } from '../shared/components/components.module';
// import { NavbarComponent } from '../shared/components/navbar/navbar.component';
// import {SharedModule} from '../shared/shared.module';
@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, ComponentsModule, MatCardModule, SharedModule, HomeRoutingModule, MaterialModule]
})
export class HomeModule { }
