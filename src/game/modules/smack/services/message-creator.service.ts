import { Injectable } from '@angular/core';
import { SmackMessageTemplate } from 'src/game/core/model/smack-message-template';

import { SmackMessage } from './../../../core/model/smack-message';
import { UuidGeneratorService } from './../../../core/services/uuid-generator.service';

/**
 * Erstellt SmackMessages anhand eines Templates.
 */
@Injectable({
  providedIn: 'root',
})
export class MessageCreatorService {

  constructor(private uuid: UuidGeneratorService) { }

  public createSmackMessage(template: SmackMessageTemplate, date: Date): SmackMessage {
    return {
      id: this.uuid.generate(),
      author: template.author,
      authorId: template.authorId,
      title: template.title,
      content: template.content,
      channel: template.channel,
      actionMandatory: template.actionMandatory,
      read: false,
      date: date,
    };
  }
}
