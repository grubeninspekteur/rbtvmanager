import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Map } from 'immutable';
import * as _ from 'lodash';

import { AppState } from '../model/app.state';
import { SmackChannel } from '../model/smack-channel';
import { SmackMessage } from '../model/smack-message';
import { initialState, smackMessageAdapter, SmackState, smackTemplateAdapter } from '../reducer/smack.reducer';

export const selectSmack = createFeatureSelector<AppState, SmackState>('smack');

export const selectSmackTemplates = createSelector(
    selectSmack,
    state => state ? state.templates : initialState.templates
);

export const selectSmackMessages = createSelector(
    selectSmack,
    state => state ? state.messages : initialState.messages
);

const smackTemplateSelectors = smackTemplateAdapter.getSelectors();
const smackMessageSelectors = smackMessageAdapter.getSelectors();

export const selectSmackTemplatesEntities = createSelector(
    selectSmackTemplates,
    smackTemplateSelectors.selectEntities
);

export const selectSmackMessagesAll = createSelector(
    selectSmackMessages,
    smackMessageSelectors.selectAll
);

export const selectedChannel = createSelector(
    selectSmack,
    state => state ? state.selectedChannel : initialState.selectedChannel
);

export const unreadMessagesTotal = createSelector(
    selectSmackMessagesAll,
    messages => _.sumBy(messages, message => message.read ? 0 : 1)
);

/**
 * Gibt eine Map zurück, die für einen Channel entweder undefined oder die Anzahl der ungelesenen Nachrichten
 * zurückgibt.
 */
export const unreadMessagesPerChannel = createSelector(
    selectSmackMessagesAll,
    messages => messages.reduce((theMap, message) => theMap.set(message.channel,
        (message.read) ? 0 : theMap.get(message.channel, 0) + 1),
        Map<SmackChannel, number>())
);

export const selectMessagesCurrentChannelNewToOld = createSelector(
    selectedChannel,
    selectSmackMessagesAll,
    (channel: SmackChannel, messages: SmackMessage[]) => {
        return messages.filter(message => message.channel === channel).reverse();
    }
);
