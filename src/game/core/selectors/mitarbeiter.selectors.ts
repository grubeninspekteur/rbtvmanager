import { Dictionary } from '@ngrx/entity';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from '../model/app.state';
import { Mitarbeiter } from '../model/mitarbeiter';
import { mitarbeiterAdapter, MitarbeiterState, mitarbeiterTemplateAdapter } from './../reducer/mitarbeiter.reducer';

export const selectMitarbeiterFeature = createFeatureSelector<AppState, MitarbeiterState>('mitarbeiter');

const mitarbeiterTemplateSelectors = mitarbeiterAdapter.getSelectors();
const mitarbeiterSelectors = mitarbeiterAdapter.getSelectors();


export const selectMitarbeiterTemplates = createSelector(
    selectMitarbeiterFeature,
    state => state ? state.templates : mitarbeiterTemplateAdapter.getInitialState()
);

export const selectMitarbeiter = createSelector(
    selectMitarbeiterFeature,
    state => state ? state.mitarbeiter : mitarbeiterAdapter.getInitialState()
);

export const selectMitarbeiterAll = createSelector(
    selectMitarbeiter,
    mitarbeiterSelectors.selectAll
);

export const selectMitarbeiterEntities = createSelector(
    selectMitarbeiter,
    mitarbeiterSelectors.selectEntities
);

export const selectMitarbeiterTemplatesAll = createSelector(
    selectMitarbeiterTemplates,
    mitarbeiterTemplateSelectors.selectAll
);

export const selectMitarbeiterTemplateEntities = createSelector(
    selectMitarbeiterTemplates,
    mitarbeiterTemplateSelectors.selectEntities
);


export const selectAvatarPathById = createSelector(
    selectMitarbeiterTemplateEntities,
    (entities: Dictionary<Mitarbeiter>, props: { id: string }) => {
        const mitarbeiter = entities[props.id];
        if (mitarbeiter) {
            return 'assets/avatars/' + ((mitarbeiter.legendaer) ? 'legendary/' : 'generic/') + mitarbeiter.avatar;
        } else {
            return undefined;
        }
    }
);
