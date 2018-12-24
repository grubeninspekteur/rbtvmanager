import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SmackOverviewComponent } from './components/smack-overview/smack-overview.component';
import { SmackRoutingModule } from './smack-routing.module';

@NgModule({
  declarations: [SmackOverviewComponent],
  imports: [
    CommonModule,
    SmackRoutingModule,
  ],
})
export class SmackModule { }
