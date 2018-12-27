import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AddBietcoin, AddF } from '../core/actions/global-state.actions';
import { InitializeMitarbeiterTemplates } from '../core/actions/mitarbeiter.actions';
import { AppState } from '../core/model/app.state';
import { MitarbeiterTemplate } from '../core/model/mitarbeiter-template';
import { MitarbeiterTyp } from '../core/model/mitarbeiter-typ';
import { SmackMessageTemplate } from '../core/model/smack-message-template';
import { Talent } from '../core/model/talent';
import { InitializeTemplates } from './../core/actions/smack.actions';
import { LoadCsvDataService, toBoolean, toNumber } from './load-csv-data.service';

/**
 * Initialisiert das Spiel mit den Startwerten und lädt benötigte Dateien aus dem Internet nach.
 */
@Injectable({
  providedIn: 'root',
})
export class InitGameService {
  constructor(
    private store: Store<AppState>,
    private csvLoader: LoadCsvDataService
  ) { }

  /**
   * Initialisiert das Spiel mit Startwerten, die für das Testen bzw. eine Demo der Anwendung geeignet sind.
   */
  public forTesting(): void {
    this.store.dispatch(new AddBietcoin({ amount: 200000 }));
    this.store.dispatch(new AddF({ amount: 10 }));

    this.ladeSmackTemplates().subscribe(templates => this.store.dispatch(new InitializeTemplates({ templates })));
    this.ladeMitarbeiterTemplates().subscribe(templates => this.store.dispatch(new InitializeMitarbeiterTemplates({ templates })));
    // TODO Mitarbeiter-Effekt schreiben, der die BENS zum Grundstock hinzufügt
  }
  private ladeSmackTemplates(): Observable<SmackMessageTemplate[]> {
    return this.csvLoader.ladeCsv<SmackMessageTemplate>('assets/data/nachrichten.csv', {
      unique: toBoolean,
      actionMandatory: toBoolean,
    });
  }

  private ladeMitarbeiterTemplates(): Observable<MitarbeiterTemplate[]> {
    return this.csvLoader.ladeCsv<MitarbeiterTemplate>('assets/data/mitarbeiter.csv', {
      typen: str => str.split(' ') as MitarbeiterTyp[],
      moderation: toNumber,
      spontaneitaet: toNumber,
      gelassenheit: toNumber,
      kreativitaetVis: toNumber,
      geschwindigkeit: toNumber,
      kreativitaetOrg: toNumber,
      connections: toNumber,
      gewissenhaftigkeit: toNumber,
      verkaeufer: toNumber,
      praesentator: toNumber,
      zack: toNumber,
      talente: this.convertTalente,
      eigenschaften: str => str ? str.split(' ') : [],
    }).pipe(tap(templates => templates.forEach(template => template.legendaer = true)));
  }

  private convertTalente(talente: string): Talent[] {
    if (talente) {
      const talenteSplit = talente.split(' ');
      talenteSplit.forEach(talentWuerfel => {
        const [genre, wurf] = talentWuerfel.split(':');
        return {
          genre,
          wurf,
        };
      });
    } else {
      return [];
    }
  }

}
