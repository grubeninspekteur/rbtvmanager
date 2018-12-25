import { GlobalGameActionTypes, GlobalStateAction } from './../actions/global-state.actions';

export interface GlobalGameState {
    /** Das gegenwärtige Vermögen an Bietcoin, der Hauptwärung. */
    bietcoin: number;
    /** Das Gegenwärtige Vermögen an F, der Premiumwährung. */
    f: number;
}

export const initialState: GlobalGameState = {
    bietcoin: 0,
    f: 0,
};

export function globalGameStateReducer(
    state = initialState,
    action: GlobalStateAction
): GlobalGameState {
    switch (action.type) {
        case GlobalGameActionTypes.AddBietcoin: {
            return {
                ...state,
                bietcoin: state.bietcoin + action.payload.amount,
            };
        }

        case GlobalGameActionTypes.SubtractBietcoin: {
            return {
                ...state,
                bietcoin: state.bietcoin - action.payload.amount,
            };
        }

        case GlobalGameActionTypes.AddF: {
            return {
                ...state,
                f: state.f + action.payload.amount,
            };
        }

        case GlobalGameActionTypes.SubtractF: {
            return {
                ...state,
                f: state.f - action.payload.amount,
            };
        }

        default:
            return state;
    }
}
