
import { IIngredientOrderDetails } from '../../utils/types';
import {
    INGREDIENTDETAILS_OPEN,
    ORDERDETAILS_OPEN,
    MODAL_CLOSE,
    TIngredientDetailsActions,
} from '../actions/ingredient-order-details-action';




const ingredientDetailsInitialState: IIngredientOrderDetails =
{
    ingredient: null,
    id: null,
    isModalIngredient: false,
    isModalOrder: false
}

export const ingredientOrderDetailsReducer = (state = ingredientDetailsInitialState, action: TIngredientDetailsActions) => {

    switch (action.type) {

        case INGREDIENTDETAILS_OPEN: {
            return {
                ...state,
                ingredient: action.ingredient,
                isModalIngredient: true
            };
        }
        case ORDERDETAILS_OPEN: {
            return {
                ...state,
                id: action.id,
                isModalOrder: true
            };
        }
        case MODAL_CLOSE: {
            return {
                ingredient: null,
                id: null,
                isModalIngredient: false,
                isModalOrder: false
            }
        }
        default:
            return state
    }
};