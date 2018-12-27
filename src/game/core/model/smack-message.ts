import { SmackChannel } from './smack-channel';

/**
 * Eine Nachricht auf Smack.
 */
export interface SmackMessage {
    /** Unique-Id der Message-Instanz. */
    id: string;
    /** Name des Autors. */
    author: string;
    /** Id des Autors. */
    authorId?: string;
    /** Optionale Überschrift. */
    title?: string;
    /** Inhalt der Nachricht. */
    content: string;
    /** Zeitpunkt der Nachricht. */
    date: Date;
    /** Kanal der Nachricht. */
    channel: SmackChannel;
    /** Für diese Nachricht angebotene Interaktionsmöglichkeiten. */
    // TODO Aktionsmöglichkeiten modellieren
    actions?: string[];

    /** Ob für diese Nachricht eine Aktion zwingend erforderlich ist, damit der Spieler die Zeit weiter vorspulen kann. */
    actionMandatory: boolean;

    /** Ob der Smack gelesen wurde. */
    read: boolean;
}
