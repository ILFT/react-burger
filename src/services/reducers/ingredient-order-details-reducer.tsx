
import { IIngredientOrderDetails } from '../../utils/types';
import {
    INGREDIENTDETAILS_OPEN,
    ORDERDETAILS_OPEN,
    MODAL_CLOSE,
    TIngredientDetailsActions,
    ORDERDETAILS_OPEN_SUCCESS,
    ORDERDETAILS_OPEN_FAILED,
} from '../actions/ingredient-order-details-action';




export const ingredientDetailsInitialState: IIngredientOrderDetails =
{
    ingredient: null,
    id: null,
    isModalIngredient: false,
    isModalOrder: false,
    orderDetailsRequest: false,
    orderDetailsFailed: false
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
                orderDetailsRequest: true
            };
        }
        case ORDERDETAILS_OPEN_SUCCESS: {
            return {
                ...state,
                id: action.id,
                isModalOrder: true,
                orderDetailsRequest: false

            };
        }
        case ORDERDETAILS_OPEN_FAILED: {
            return {
                ...state,
                orderDetailsRequest: false,
                orderDetailsFailed: true
            };
        }
        case MODAL_CLOSE: {
            return {
                ...state,
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