import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { MessageCreatorService } from './../../modules/smack/services/message-creator.service';
import { AddMessage, InitializeTemplates, SmackActionTypes } from './../actions/smack.actions';
import { SmackMessage } from './../model/smack-message';

export class SmackEffects {
    constructor(private actions$: Actions, private messageCreator: MessageCreatorService) { }

    /**
     * Erstellt die initialen Smacks, die bei jedem neuen Spiel enthalten sind.
     * TODO wenn Spielstände implementiert sind, darf dieser Effekt nicht bei einem geladenen Spielstand ausgelöst werden
     */
    @Effect()
    erstelleBegruessungsSmacks$: Observable<Action> = this.actions$.pipe(
        ofType(SmackActionTypes.InitializeTemplates),
        switchMap((action: InitializeTemplates) => {
            const { templates } = action.payload;
            let budi, eddy, nils, arno, simon: SmackMessage;
            const arnoDate = new Date('2015-01-15T10:22:20Z');
            const budiDate = new Date('2015-01-15T14:54:08Z');
            const eddyDate = new Date('2015-01-15T14:56:00Z');
            const simonDate = new Date('2015-01-15T15:02:00Z');
            const nilsDate = new Date('2015-01-15T15:04:00Z');
            templates.forEach(template => {
                switch (template.id) {
                    case 'be61ffbf-4231-4459-9f6b-213aad41230e': {
                        arno = this.messageCreator.createSmackMessage(template, arnoDate);
                        break;
                    }
                    case '502aa5ce-6e9e-4d74-961b-717408be9546': {
                        eddy = this.messageCreator.createSmackMessage(template, eddyDate);
                        break;
                    }
                    case '323f6526-9288-4290-be08-4523fbf54715': {
                        nils = this.messageCreator.createSmackMessage(template, nilsDate);
                        break;
                    }
                    case '846d61a0-8064-405e-9e90-f6f0dd77b7fc': {
                        budi = this.messageCreator.createSmackMessage(template, budiDate);
                        break;
                    }
                    case '8f500468-6564-449f-ad62-8e540c5cc59c': {
                        simon = this.messageCreator.createSmackMessage(template, simonDate);
                        break;
                    }
                }
            });
            return [arno, budi, eddy, simon, nils].map(message => new AddMessage({ message }));
        })
    );
}
