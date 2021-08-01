import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { ComponentsModule } from './components/components.module';
import { WebviewDirective } from './directives/';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';

// import { ComponentsModule } from "./components/components.module"

@NgModule({
  declarations: [WebviewDirective],
  imports: [CommonModule, TranslateModule, FormsModule, ComponentsModule, MaterialModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, MaterialModule, ComponentsModule]
})
export class SharedModule { }
