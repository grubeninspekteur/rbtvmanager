import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../../core/material/material.module';
import { BietcoinComponent } from './components/bietcoin/bietcoin.component';

@NgModule({
  declarations: [
    BietcoinComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    BietcoinComponent,
  ],
})
export class SharedModule { }
