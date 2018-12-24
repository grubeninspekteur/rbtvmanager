import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-game-root',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent {
}
