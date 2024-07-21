import { IngredientType } from "../../utils/types";

export const BURGER_CONSTRUCTOR_ADD_INGREDIENT = 'BURGER_CONSTRUCTOR_ADD_INGREDIENT';
export const BURGER_CONSTRUCTOR_CHANGE_ROLL = 'BURGER_CONSTRUCTOR_CHANGE_ROLL';
export const BURGER_CONSTRUCTOR_DELETE_INGREDIENT = 'BURGER_CONSTRUCTOR_DELETE_INGREDIENT';
export const BURGER_CONSTRUCTOR_MOVE_INGEDIENT = 'BURGER_CONSTRUCTOR_MOVE_INGEDIENT';
export const BURGER_CONSTRUCTOR_CLEAR = 'BURGER_CONSTRUCTOR_CLEAR';


export interface IBURGER_CONSTRUCTOR_ADD_INGREDIENT {
    readonly type: typeof BURGER_CONSTRUCTOR_ADD_INGREDIENT;
    readonly ingredient: IngredientType;
    readonly uuid: string;
}

export interface IBURGER_CONSTRUCTOR_CHANGE_ROLL {
    readonly type: typeof BURGER_CONSTRUCTOR_CHANGE_ROLL;
    readonly roll: IngredientType;
}

export interface IBURGER_CONSTRUCTOR_DELETE_INGREDIENT {
    readonly type: typeof BURGER_CONSTRUCTOR_DELETE_INGREDIENT;
    readonly index: number;
}
export interface IBURGER_CONSTRUCTOR_MOVE_INGEDIENT {
    readonly type: typeof BURGER_CONSTRUCTOR_MOVE_INGEDIENT;
    readonly indexDragged: number;
    readonly indexDroped: number;
}

export interface IBURGER_CONSTRUCTOR_CLEAR {
    readonly type: typeof BURGER_CONSTRUCTOR_CLEAR;
}



export type TBurgerConstructorActions =
    IBURGER_CONSTRUCTOR_ADD_INGREDIENT |
    IBURGER_CONSTRUCTOR_CHANGE_ROLL |
    IBURGER_CONSTRUCTOR_MOVE_INGEDIENT |
    IBURGER_CONSTRUCTOR_DELETE_INGREDIENT |
    IBURGER_CONSTRUCTOR_CLEAR;