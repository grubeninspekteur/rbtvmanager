import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SmackOverviewComponent } from './components/smack-overview/smack-overview.component';

const routes: Routes = [
  {
    path: '',
    component: SmackOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmackRoutingModule { }
