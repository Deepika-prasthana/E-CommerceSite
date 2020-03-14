import { shoppingItem } from './shopping-item.model';

export interface Appstate {
    readonly shop: Array<shoppingItem>;
}