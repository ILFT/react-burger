import { IngredientType } from '../../utils/types';

export const BURGER_INGREDIENTS_INITIAL = 'BURGER_INGREDIENTS_INITIAL';
export const BURGER_INGREDIENTS_CHANGE_TAB = 'BURGER_INGREDIENTS_CHANGE_TAB';
export const BURGER_INGREDIENTS_INCREASE_INGREDIENT = 'BURGER_INGREDIENTS_INCREASE_INGREDIENT';
export const BURGER_INGREDIENTS_DECREASE_INGREDIENT = 'BURGER_INGREDIENTS_DECREASE_INGREDIENT';
export const BURGER_INGREDIENTS_CHANGE_ROLL = 'BURGER_INGREDIENTS_CHANGE_ROLL';



export interface IBURGER_INGREDIENTS_INITIAL {
    readonly type: typeof BURGER_INGREDIENTS_INITIAL;
    readonly rolls: IngredientType[];
    readonly fillings: IngredientType[];
    readonly sauces: IngredientType[];
    readonly tab: string;
}

export interface IBURGER_INGREDIENTS_CHANGE_TAB {
    readonly type: typeof BURGER_INGREDIENTS_CHANGE_TAB;
    readonly tab: string;
}

export interface IBURGER_INGREDIENTS_INCREASE_INGREDIENT {
    readonly type: typeof BURGER_INGREDIENTS_INCREASE_INGREDIENT;
    readonly increaseIngredient: IngredientType;
}
export interface IBURGER_INGREDIENTS_DECREASE_INGREDIENT {
    readonly type: typeof BURGER_INGREDIENTS_DECREASE_INGREDIENT;
    readonly decreaseIngredient: IngredientType;
}
export interface IBURGER_INGREDIENTS_CHANGE_ROLL {
    readonly type: typeof BURGER_INGREDIENTS_CHANGE_ROLL;
    readonly changeRoll: IngredientType;
}


export type TBurgerIngredientsActions =
    IBURGER_INGREDIENTS_INITIAL |
    IBURGER_INGREDIENTS_CHANGE_TAB |
    IBURGER_INGREDIENTS_INCREASE_INGREDIENT |
    IBURGER_INGREDIENTS_DECREASE_INGREDIENT |
    IBURGER_INGREDIENTS_CHANGE_ROLL;