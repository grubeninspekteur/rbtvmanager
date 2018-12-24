import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MitarbeiterOverviewComponent } from './components/mitarbeiter-overview/mitarbeiter-overview.component';

const routes: Routes = [
  {
    path: '',
    component: MitarbeiterOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MitarbeiterRoutingModule { }
