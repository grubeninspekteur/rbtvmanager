import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/game/core/model/app.state';
import { selectGlobalBietcoin, selectGlobalF } from 'src/game/core/selectors/global-state.selectors';
import { unreadMessagesTotal } from 'src/game/core/selectors/smack.selectors';

@Component({
  selector: 'app-game-navbar',
  templateUrl: './game-navbar.component.html',
  styleUrls: ['./game-navbar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameNavbarComponent {
  bietcoin$ = this.store.pipe(select(selectGlobalBietcoin));
  f$ = this.store.pipe(select(selectGlobalF));

  unreadMessages$ = this.store.pipe(select(unreadMessagesTotal));

  constructor(private store: Store<AppState>) { }

}
