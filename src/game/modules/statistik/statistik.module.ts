import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StatistikOverviewComponent } from './components/statistik-overview/statistik-overview.component';
import { StatistikRoutingModule } from './statistik-routing.module';

@NgModule({
  declarations: [StatistikOverviewComponent],
  imports: [
    CommonModule,
    StatistikRoutingModule,
  ],
})
export class StatistikModule { }
