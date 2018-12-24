import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

/**
 * Stellt einen Betrag von Bietcoins dar.
 */
@Component({
  selector: 'app-bietcoin',
  template: `<span class="bietcoin-value">{{ amount | number }}</span>
  <span class="bietcoin-unit" [matTooltip]="'Bietcoin'">Ƀ</span>`,
  styles: [`
  .bietcoin-unit {
    padding-left: 0.5ch;
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BietcoinComponent implements OnInit {
  @Input() amount: number;

  constructor() { }

  ngOnInit() {
  }

}
