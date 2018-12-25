import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AddBietcoin, AddF } from '../core/actions/global-state.actions';
import { AppState } from '../core/model/app.state';
import { SmackMessageTemplate } from '../core/model/smack-message-template';
import { InitializeTemplates } from './../core/actions/smack.actions';
import { LoadCsvDataService, toBoolean } from './load-csv-data.service';

/**
 * Initialisiert das Spiel mit den Startwerten und lädt benötigte Dateien aus dem Internet nach.
 */
@Injectable({
  providedIn: 'root',
})
export class InitGameService {
  constructor(
    private store: Store<AppState>,
    private loadCsv: LoadCsvDataService
  ) { }

  /**
   * Initialisiert das Spiel mit Startwerten, die für das Testen bzw. eine Demo der Anwendung geeignet sind.
   */
  public forTesting(): void {
    this.store.dispatch(new AddBietcoin({ amount: 200000 }));
    this.store.dispatch(new AddF({ amount: 10 }));

    this.ladeSmackTemplates().subscribe(templates => this.store.dispatch(new InitializeTemplates({ templates })));
  }
  private ladeSmackTemplates(): Observable<SmackMessageTemplate[]> {
    return this.loadCsv.ladeCsv<SmackMessageTemplate>('assets/data/nachrichten.csv', {
      unique: toBoolean,
      actionMandatory: toBoolean,
    });
  }
}
