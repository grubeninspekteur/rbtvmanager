import { createEntityAdapter, EntityState } from '@ngrx/entity';

import { SmackMessageTemplate } from '../model/smack-message-template';
import { SmackAction, SmackActionTypes } from './../actions/smack.actions';
import { SmackChannel } from './../model/smack-channel';
import { SmackMessage } from './../model/smack-message';

/**
 * Enthält die "Smacks", Nachrichten für das interne Kommunikationstool des Senders.
 */
export interface SmackState {
    templates: EntityState<SmackMessageTemplate>;
    messages: EntityState<SmackMessage>;

    /** Der aktuell betrachtete Channel. */
    selectedChannel: SmackChannel;
}

export const smackTemplateAdapter = createEntityAdapter<SmackMessageTemplate>();
export const smackMessageAdapter = createEntityAdapter<SmackMessage>();

export const initialState: SmackState = {
    templates: smackTemplateAdapter.getInitialState(),
    messages: smackMessageAdapter.getInitialState(),
    selectedChannel: 'Wichtig',
};

export function smackReducer(state = initialState, action: SmackAction): SmackState {
    switch (action.type) {
        case SmackActionTypes.InitializeTemplates: {
            return {
                ...state,
                templates: smackTemplateAdapter.addAll(action.payload.templates, state.templates),
            };
        }

        case SmackActionTypes.AddMessage: {
            return {
                ...state,
                messages: smackMessageAdapter.addOne(action.payload.message, state.messages),
            };
        }

        case SmackActionTypes.SelectChannel: {
            return {
                ...state,
                selectedChannel: action.payload.channel,
            };
        }

        case SmackActionTypes.MarkChannelRead: {
            return {
                ...state,
                messages: smackMessageAdapter.map(message => (message.channel === action.payload.channel) ?
                    { ...message, read: true } : message, state.messages),
            };
        }

        default:
            return state;
    }
}
