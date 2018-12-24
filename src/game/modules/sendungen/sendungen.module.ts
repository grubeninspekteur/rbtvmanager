import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendungenRoutingModule } from './sendungen-routing.module';
import { SendungenOverviewComponent } from './components/sendungen-overview/sendungen-overview.component';

@NgModule({
  declarations: [SendungenOverviewComponent],
  imports: [
    CommonModule,
    SendungenRoutingModule
  ]
})
export class SendungenModule { }
