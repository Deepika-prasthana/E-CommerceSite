import { shoppingItem } from '../models/shopping-item.model';
import { shoppingAction, ShoppingActionTypes } from '../actions/shopping.action';

export const initialState: Array<shoppingItem> = [];

export function shoppingReducer(state: Array<shoppingItem> = initialState, action: shoppingAction) {

    switch (action.type) {

        case ShoppingActionTypes.ADD_ITEM:
            return [...state, action.payload];
        default:
            return state;
    }
}