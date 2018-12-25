import { NgModule } from '@angular/core';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatBadgeModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatBadgeModule,
    MatCardModule,
  ],
})
export class MaterialModule { }
