import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/game/core/model/app.state';
import { selectMessagesCurrentChannelNewToOld } from 'src/game/core/selectors/smack.selectors';

@Component({
  selector: 'app-channel-content',
  templateUrl: './channel-content.component.html',
  styleUrls: ['./channel-content.component.less'],
})
export class ChannelContentComponent {
  messages$ = this.store.select(selectMessagesCurrentChannelNewToOld);

  constructor(private store: Store<AppState>) { }
}
