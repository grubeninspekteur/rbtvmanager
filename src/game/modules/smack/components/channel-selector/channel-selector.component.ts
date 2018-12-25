import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SelectChannel } from 'src/game/core/actions/smack.actions';
import { AppState } from 'src/game/core/model/app.state';
import { SmackChannel } from 'src/game/core/model/smack-channel';
import { selectedChannel } from 'src/game/core/selectors/smack.selectors';

import { MarkChannelRead } from './../../../../core/actions/smack.actions';
import { unreadMessagesPerChannel } from './../../../../core/selectors/smack.selectors';

@Component({
  selector: 'app-channel-selector',
  templateUrl: './channel-selector.component.html',
  styleUrls: ['./channel-selector.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChannelSelectorComponent {
  unreadPerChannel$ = this.store.select(unreadMessagesPerChannel);

  selectedChannel$ = this.store.select(selectedChannel);

  readonly channelNames: SmackChannel[] = ['Wichtig', 'Kaffeeküche', 'Sponsoren', 'Redaktion', 'Gebäude'];

  constructor(private store: Store<AppState>) { }

  selectChannel(channel: SmackChannel) {
    this.store.dispatch(new SelectChannel({ channel }));
    this.store.dispatch(new MarkChannelRead({ channel }));
  }
}
