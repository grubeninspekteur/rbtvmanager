import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MerchandiseOverviewComponent } from './components/merchandise-overview/merchandise-overview.component';
import { MerchandiseRoutingModule } from './merchandise-routing.module';

@NgModule({
  declarations: [MerchandiseOverviewComponent],
  imports: [
    CommonModule,
    MerchandiseRoutingModule,
  ],
})
export class MerchandiseModule { }
