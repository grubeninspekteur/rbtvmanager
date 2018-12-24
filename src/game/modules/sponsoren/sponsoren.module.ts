import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SponsorenOverviewComponent } from './components/sponsoren-overview/sponsoren-overview.component';
import { SponsorenRoutingModule } from './sponsoren-routing.module';

@NgModule({
  declarations: [SponsorenOverviewComponent],
  imports: [
    CommonModule,
    SponsorenRoutingModule,
  ],
})
export class SponsorenModule { }
