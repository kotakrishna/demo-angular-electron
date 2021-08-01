import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input"
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTreeModule } from '@angular/material/tree';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs'
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
// import { FlatTreeControl } from '@angular/cdk/tree';
// import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatIcon}
// import { MatIconModule } from '@angular/material/icon';
// import {MatToolbarModule} from '@angular/material/toolbar'
const MaterialComponents = [
  MatButtonModule,
  MatCardModule,
  MatTreeModule,
  MatTableModule,
  MatExpansionModule,
  MatInputModule,
  MatFormFieldModule,
  MatTabsModule,
  MatSortModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatGridListModule,
  MatDatepickerModule,
  MatStepperModule
]

@NgModule({
  imports: [...MaterialComponents],
  exports: [...MaterialComponents],
})
export class MaterialModule { }
