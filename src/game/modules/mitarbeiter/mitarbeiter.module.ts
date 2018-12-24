import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MitarbeiterOverviewComponent } from './components/mitarbeiter-overview/mitarbeiter-overview.component';
import { MitarbeiterRoutingModule } from './mitarbeiter-routing.module';

@NgModule({
  declarations: [MitarbeiterOverviewComponent],
  imports: [
    CommonModule,
    MitarbeiterRoutingModule,
  ],
})
export class MitarbeiterModule { }
