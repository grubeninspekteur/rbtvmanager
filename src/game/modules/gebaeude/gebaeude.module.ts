import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GebaeudeOverviewComponent } from './components/gebaeude-overview/gebaeude-overview.component';
import { GebaeudeRoutingModule } from './gebaeude-routing.module';

@NgModule({
  declarations: [GebaeudeOverviewComponent],
  imports: [
    CommonModule,
    GebaeudeRoutingModule,
  ],
})
export class GebaeudeModule { }
