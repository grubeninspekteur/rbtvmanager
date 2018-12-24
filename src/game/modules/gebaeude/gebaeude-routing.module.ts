import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GebaeudeOverviewComponent } from './components/gebaeude-overview/gebaeude-overview.component';

const routes: Routes = [
  {
    path: '',
    component: GebaeudeOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GebaeudeRoutingModule { }
