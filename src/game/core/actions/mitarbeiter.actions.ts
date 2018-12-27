import { Action } from '@ngrx/store';

import { MitarbeiterTemplate } from './../model/mitarbeiter-template';

export enum MitarbeiterActionTypes {
    InitializeTemplates = '[Mitarbeiter] Initialize Templates',
    SpawnMitarbeiter = '[Mitarbeiter] Spawn',
}

export class InitializeMitarbeiterTemplates implements Action {
    readonly type = MitarbeiterActionTypes.InitializeTemplates;

    constructor(public payload: { templates: MitarbeiterTemplate[] }) { }
}

/**
 * Fügt einen neuen Mitarbeiter der aktuellen Mitarbeiterliste hinzu, ohne dass
 * zuvor ein Arbeitsangebot vorliegen muss. Es wird ein Gehaltstask für den nächsten
 * Abrechnungstag angelegt. Wenn ein Mitarbeiter mit der Id bereits vorliegt, geschieht nichts.
 */
// TODO Task-State und Reducer anlegen und auf dieses Event hören, Gehaltstask & -effekt anlegen
export class SpawnMitarbeiter implements Action {
    readonly type = MitarbeiterActionTypes.SpawnMitarbeiter;

    constructor(public payload: { template: MitarbeiterTemplate, gehalt: number, einstellungsDatum: Date }) { }
}

export type MitarbeiterAction = InitializeMitarbeiterTemplates | SpawnMitarbeiter;
