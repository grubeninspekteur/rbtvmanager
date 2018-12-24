import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SendeplanComponent } from './components/sendeplan/sendeplan.component';
import { SendeplanRoutingModule } from './sendeplan-routing.module';

@NgModule({
  declarations: [SendeplanComponent],
  imports: [
    CommonModule,
    SendeplanRoutingModule,
  ],
})
export class SendeplanModule { }
