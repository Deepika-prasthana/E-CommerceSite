import { Action } from '@ngrx/store';
import { shoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
    ADD_ITEM = '[SHOPPING] Add Item',
}

export class AddItemAction implements Action {
    readonly type = ShoppingActionTypes.ADD_ITEM;

    constructor(public payload: shoppingItem) { }
}

export type shoppingAction = AddItemAction;