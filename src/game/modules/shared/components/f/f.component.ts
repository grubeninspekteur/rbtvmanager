import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
 * Stellt einen Betrag von F dar, der Premiumwährung des RBTV-Managers, die nur durch
 * Meilensteine erworben werden kann.
 */
@Component({
  selector: 'app-f',
  template: `<span class="f-value">{{ amount | number }}</span>
  <div class="f-unit"><div>F</div></div>`,
  styles: [`
  .f-unit {
    display: inline-block;
    margin-left: 0.5ch;
    padding-left: 2px;
    padding-right: 1px;
    color: gold;
    text-shadow: -1px -1px grey;
  }

  .f-unit div {
    display: inline-block;
    transform: rotate(-20deg);
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FComponent {
  @Input() amount: number;
}
