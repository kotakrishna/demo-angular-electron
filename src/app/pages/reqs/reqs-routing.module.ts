import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReqsComponent } from './reqs.component';

const routes: Routes = [
  {
    path: 'reqs',
    component: ReqsComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReqsRoutingModule { }
