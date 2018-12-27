import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from './../model/app.state';
import { GlobalGameState } from './../reducer/global-state.reducer';

export const selectGlobal = createFeatureSelector<AppState, GlobalGameState>('global');

export const selectGlobalBietcoin = createSelector(
    selectGlobal,
    state => state ? state.bietcoin : 0
);

export const selectGlobalF = createSelector(
    selectGlobal,
    state => state ? state.f : 0
);

export const selectAktuelleZeit = createSelector(
    selectGlobal,
    state => state.zeit
);
