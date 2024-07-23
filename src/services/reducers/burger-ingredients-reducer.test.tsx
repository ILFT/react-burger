import {
    BURGER_INGREDIENTS_INITIAL,
    BURGER_INGREDIENTS_CHANGE_TAB,
    BURGER_INGREDIENTS_INCREASE_INGREDIENT,
    BURGER_INGREDIENTS_DECREASE_INGREDIENT,
    BURGER_INGREDIENTS_CHANGE_ROLL,
    BURGER_INGREDIENTS_INITIAL_SUCCESS,
    BURGER_INGREDIENTS_INITIAL_FAILED,
    BURGER_INGREDIENTS_CLEAR,
    TBurgerIngredientsActions,
} from '../actions/burger-ingredients-action';

import { IBurgerIngredients } from '../../utils/types';
import { burgerIngredientsInitialState, burgerIngredientsReducer } from './burger-ingredients-reducer';
import { mockFill, mockIngredient, mockRoll, mockRollFirst, mockRollSecond, mockSuace } from '../../data/test-data';






describe('burgerConstructorReducer', () => {

    it('Должен вернуть initialState', () => {
        expect(burgerIngredientsReducer(undefined, {} as any)).toEqual(burgerIngredientsInitialState);
    });


    it('BURGER_INGREDIENTS_INITIAL', () => {
        const action: TBurgerIngredientsActions = {
            type: BURGER_INGREDIENTS_INITIAL,
        };
        expect(burgerIngredientsReducer(undefined, action)).toEqual({
            ...burgerIngredientsInitialState,
            ingredientsRequest: true
        });
    });

    it('BURGER_INGREDIENTS_INITIAL_SUCCESS', () => {
        const action: TBurgerIngredientsActions = {
            type: BURGER_INGREDIENTS_INITIAL_SUCCESS,
            rolls: [mockRoll],
            fillings: [mockFill],
            sauces: [mockSuace],
        };
        expect(burgerIngredientsReducer(undefined, action)).toEqual({
            ...burgerIngredientsInitialState,
            rolls: [mockRoll],
            fillings: [mockFill],
            sauces: [mockSuace],
            ingredientsRequest: false
        });
    });

    it('BURGER_INGREDIENTS_INITIAL_FAILED', () => {
        const action: TBurgerIngredientsActions = {
            type: BURGER_INGREDIENTS_INITIAL_FAILED,
        };
        expect(burgerIngredientsReducer(undefined, action)).toEqual({
            ...burgerIngredientsInitialState,
            ingredientsFailed: true,
            ingredientsRequest: false
        });
    });

    it('BURGER_INGREDIENTS_CHANGE_TAB', () => {
        const action: TBurgerIngredientsActions = {
            type: BURGER_INGREDIENTS_CHANGE_TAB,
            tab: "fillings"
        };
        expect(burgerIngredientsReducer(undefined, action)).toEqual({
            ...burgerIngredientsInitialState,
            tab: "fillings"
        });
    });

    it('BURGER_INGREDIENTS_CHANGE_ROLL', () => {
        const action: TBurgerIngredientsActions = {
            type: BURGER_INGREDIENTS_CHANGE_ROLL,
            changeRoll: mockRollSecond
        };
        expect(burgerIngredientsReducer({ ...burgerIngredientsInitialState, rolls: [{ ...mockRollFirst, count: 2 }, mockRollSecond] }, action)).toEqual({
            ...burgerIngredientsInitialState,
            rolls: [mockRollFirst, { ...mockRollSecond, count: 2 }]
        });
    });

    it('BURGER_INGREDIENTS_INCREASE_INGREDIENT', () => {
        const action: TBurgerIngredientsActions = {
            type: BURGER_INGREDIENTS_INCREASE_INGREDIENT,
            increaseIngredient: mockIngredient
        };
        expect(burgerIngredientsReducer({ ...burgerIngredientsInitialState, fillings: [mockIngredient] }, action)).toEqual({
            ...burgerIngredientsInitialState,
            fillings: [{ ...mockIngredient, count: 1 }]
        });
    });


    it('BURGER_INGREDIENTS_DECREASE_INGREDIENT', () => {
        const action: TBurgerIngredientsActions = {
            type: BURGER_INGREDIENTS_DECREASE_INGREDIENT,
            decreaseIngredient: mockIngredient
        };
        expect(burgerIngredientsReducer({ ...burgerIngredientsInitialState, fillings: [{ ...mockIngredient, count: 1 }] }, action)).toEqual({
            ...burgerIngredientsInitialState,
            fillings: [{ ...mockIngredient, count: 0 }]
        });
    });


    it('BURGER_INGREDIENTS_CLEAR', () => {
        const action: TBurgerIngredientsActions = {
            type: BURGER_INGREDIENTS_CLEAR
        };
        expect(burgerIngredientsReducer({ ...burgerIngredientsInitialState, rolls: [{ ...mockRollFirst, count: 2 }, mockRollSecond] }, action)).toEqual({
            ...burgerIngredientsInitialState,
            rolls: [mockRollFirst, mockRollSecond]
        });
    });

});