import { IngredientType } from "../../utils/types";

export const INGREDIENTDETAILS_OPEN = 'INGREDIENTDETAILS_OPEN';
export const ORDERDETAILS_OPEN = 'ORDERDETAILS_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

export interface IINGREDIENTDETAILS_OPEN {
    readonly type: typeof INGREDIENTDETAILS_OPEN;
    readonly ingredient: IngredientType;
}



export interface IORDERDETAILS_OPEN {
    readonly type: typeof ORDERDETAILS_OPEN;
    readonly id: number;
}

export interface IMODAL_CLOSE {
    readonly type: typeof MODAL_CLOSE;
}


export type TIngredientDetailsActions =
    IINGREDIENTDETAILS_OPEN |
    IMODAL_CLOSE |
    IORDERDETAILS_OPEN;
