import { MitarbeiterState } from '../reducer/mitarbeiter.reducer';
import { GlobalGameState } from './../reducer/global-state.reducer';
import { SmackState } from './../reducer/smack.reducer';

export interface AppState {
    global: GlobalGameState;
    smack: SmackState;
    mitarbeiter: MitarbeiterState;
}
