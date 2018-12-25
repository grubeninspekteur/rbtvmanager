import { Action } from '@ngrx/store';

export enum GlobalGameActionTypes {
    AddBietcoin = '[Global] Add Bietcoin',
    SubtractBietcoin = '[Global] Subtract Bietcoin',
    AddF = '[Global] Add F',
    SubtractF = '[Global] Subtract F',
}

export class AddBietcoin implements Action {
    readonly type = GlobalGameActionTypes.AddBietcoin;

    constructor(public payload: { amount: number }) { }
}

export class SubtractBietcoin implements Action {
    readonly type = GlobalGameActionTypes.SubtractBietcoin;

    constructor(public payload: { amount: number }) { }
}

export class AddF implements Action {
    readonly type = GlobalGameActionTypes.AddF;

    constructor(public payload: { amount: number }) { }
}

export class SubtractF implements Action {
    readonly type = GlobalGameActionTypes.SubtractF;

    constructor(public payload: { amount: number }) { }
}

export type GlobalStateAction = AddBietcoin | SubtractBietcoin | AddF | SubtractF;
