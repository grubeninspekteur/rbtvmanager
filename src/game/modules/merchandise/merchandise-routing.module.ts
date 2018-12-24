import { MerchandiseOverviewComponent } from './components/merchandise-overview/merchandise-overview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MerchandiseOverviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MerchandiseRoutingModule { }
