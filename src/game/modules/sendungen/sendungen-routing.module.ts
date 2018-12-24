import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SendungenOverviewComponent } from './components/sendungen-overview/sendungen-overview.component';

const routes: Routes = [
  {
    path: '',
    component: SendungenOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendungenRoutingModule { }
