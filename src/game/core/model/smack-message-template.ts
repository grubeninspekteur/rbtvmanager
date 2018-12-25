import { SmackChannel } from './smack-channel';

/**
 * Template für eine Smack-Nachricht, ausgelesen aus einer CSV-Datei.
 */
export interface SmackMessageTemplate {
    id: string;
    authorId?: string;
    author?: string;
    channel: SmackChannel;
    title?: string;
    content: string;
    unique: boolean;
    actionMandatory: boolean;
    spawnCondition: SpawnCondition;
}

export type SpawnCondition = 'Never';
