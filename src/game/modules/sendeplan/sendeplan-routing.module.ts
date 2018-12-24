import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SendeplanComponent } from './components/sendeplan/sendeplan.component';


const routes: Routes = [
  {
    path: '',
    component: SendeplanComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendeplanRoutingModule { }
