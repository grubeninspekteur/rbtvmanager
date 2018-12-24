import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SponsorenOverviewComponent } from './components/sponsoren-overview/sponsoren-overview.component';

const routes: Routes = [
  {
    path: '',
    component: SponsorenOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SponsorenRoutingModule { }
