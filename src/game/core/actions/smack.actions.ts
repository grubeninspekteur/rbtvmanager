import { Action } from '@ngrx/store';

import { SmackMessage } from '../model/smack-message';
import { SmackChannel } from './../model/smack-channel';
import { SmackMessageTemplate } from './../model/smack-message-template';

export enum SmackActionTypes {
    InitializeTemplates = '[Smack] Initialize Templates',
    AddMessage = '[Smack] Add Message',
    SelectChannel = '[Smack] Select Channel',
    MarkChannelRead = '[Smack] Mark As Read All in Channel',
}

export class InitializeTemplates implements Action {
    readonly type = SmackActionTypes.InitializeTemplates;

    constructor(public payload: { templates: SmackMessageTemplate[] }) { }
}

export class AddMessage implements Action {
    readonly type = SmackActionTypes.AddMessage;

    constructor(public payload: { message: SmackMessage }) { }
}

export class SelectChannel implements Action {
    readonly type = SmackActionTypes.SelectChannel;

    constructor(public payload: { channel: SmackChannel }) { }
}

export class MarkChannelRead implements Action {
    readonly type = SmackActionTypes.MarkChannelRead;

    constructor(public payload: { channel: SmackChannel }) { }
}

export type SmackAction = InitializeTemplates | AddMessage | SelectChannel | MarkChannelRead;
