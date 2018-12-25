import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { InitGameService } from '../services/init-game.service';

@Component({
  selector: 'app-game-root',
  templateUrl: 'game.component.html',
  styleUrls: ['game.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent implements OnInit {
  constructor(private initGame: InitGameService) { }

  ngOnInit(): void {
    this.initGame.forTesting();
  }

}
