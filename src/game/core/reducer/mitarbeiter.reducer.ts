import { createEntityAdapter, EntityState } from '@ngrx/entity';

import { Mitarbeiter } from '../model/mitarbeiter';
import { MitarbeiterTemplate } from '../model/mitarbeiter-template';
import { MitarbeiterAction, MitarbeiterActionTypes } from './../actions/mitarbeiter.actions';

export interface MitarbeiterState {
    templates: EntityState<MitarbeiterTemplate>;
    mitarbeiter: EntityState<Mitarbeiter>;
}

export const mitarbeiterTemplateAdapter = createEntityAdapter<MitarbeiterTemplate>();
export const mitarbeiterAdapter = createEntityAdapter<Mitarbeiter>();

const initialState: MitarbeiterState = {
    templates: mitarbeiterTemplateAdapter.getInitialState(),
    mitarbeiter: mitarbeiterAdapter.getInitialState(),
};

export function mitarbeiterReducer(state = initialState, action: MitarbeiterAction): MitarbeiterState {
    switch (action.type) {
        case MitarbeiterActionTypes.InitializeTemplates: {
            return {
                ...state,
                templates: mitarbeiterTemplateAdapter.addAll(action.payload.templates, state.templates),
            };
        }

        case MitarbeiterActionTypes.SpawnMitarbeiter: {
            return {
                ...state,
                mitarbeiter: mitarbeiterAdapter.addOne({
                    ...action.payload.template,
                    gehalt: action.payload.gehalt,
                    einstellungsDatum: action.payload.einstellungsDatum,
                }, state.mitarbeiter),
            };
        }

        default:
            return state;
    }
}
