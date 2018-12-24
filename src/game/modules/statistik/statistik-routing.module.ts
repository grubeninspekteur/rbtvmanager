import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatistikOverviewComponent } from './components/statistik-overview/statistik-overview.component';

const routes: Routes = [
  {
    path: '',
    component: StatistikOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StatistikRoutingModule { }
