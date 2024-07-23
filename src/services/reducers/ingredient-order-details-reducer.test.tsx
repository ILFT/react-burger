import { mockIngredient } from '../../data/test-data';
import { IIngredientOrderDetails } from '../../utils/types';
import {
    INGREDIENTDETAILS_OPEN,
    ORDERDETAILS_OPEN,
    MODAL_CLOSE,
    TIngredientDetailsActions,
    ORDERDETAILS_OPEN_SUCCESS,
    ORDERDETAILS_OPEN_FAILED,
} from '../actions/ingredient-order-details-action';

import { ingredientOrderDetailsReducer } from './ingredient-order-details-reducer'





const ingredientDetailsInitialState: IIngredientOrderDetails =
{
    ingredient: null,
    id: null,
    isModalIngredient: false,
    isModalOrder: false,
    orderDetailsRequest: false,
    orderDetailsFailed: false
}



describe('burgerConstructorReducer', () => {

    it('Должен вернуть initialState', () => {
        expect(ingredientOrderDetailsReducer(undefined, {} as any)).toEqual(ingredientDetailsInitialState);
    });


    it('INGREDIENTDETAILS_OPEN', () => {
        const action: TIngredientDetailsActions = {
            type: INGREDIENTDETAILS_OPEN,
            ingredient: mockIngredient
        };
        expect(ingredientOrderDetailsReducer(undefined, action)).toEqual({
            ...ingredientDetailsInitialState,
            ingredient: mockIngredient,
            isModalIngredient: true
        });
    });

    it('ORDERDETAILS_OPEN', () => {
        const action: TIngredientDetailsActions = {
            type: ORDERDETAILS_OPEN,
        };
        expect(ingredientOrderDetailsReducer(undefined, action)).toEqual({
            ...ingredientDetailsInitialState,
            orderDetailsRequest: true
        });
    });

    it('ORDERDETAILS_OPEN_SUCCESS', () => {
        const action: TIngredientDetailsActions = {
            type: ORDERDETAILS_OPEN_SUCCESS,
            id: 1234
        };
        expect(ingredientOrderDetailsReducer(undefined, action)).toEqual({
            ...ingredientDetailsInitialState,
            id: 1234,
            isModalOrder: true,
            orderDetailsRequest: false
        });
    });

    it('ORDERDETAILS_OPEN_FAILED', () => {
        const action: TIngredientDetailsActions = {
            type: ORDERDETAILS_OPEN_FAILED,
        };
        expect(ingredientOrderDetailsReducer(undefined, action)).toEqual({
            ...ingredientDetailsInitialState,
            orderDetailsRequest: false,
            orderDetailsFailed: true
        });
    });

    it('MODAL_CLOSE', () => {
        const action: TIngredientDetailsActions = {
            type: MODAL_CLOSE,
        };
        expect(ingredientOrderDetailsReducer(undefined, action)).toEqual({
            ...ingredientDetailsInitialState,
            ingredient: null,
            id: null,
            isModalIngredient: false,
            isModalOrder: false,
        });
    });

});