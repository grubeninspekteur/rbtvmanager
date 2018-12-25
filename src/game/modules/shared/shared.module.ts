import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../../core/material/material.module';
import { BietcoinComponent } from './components/bietcoin/bietcoin.component';
import { FComponent } from './components/f/f.component';

@NgModule({
  declarations: [
    BietcoinComponent,
    FComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    BietcoinComponent,
    FComponent,
  ],
})
export class SharedModule { }
