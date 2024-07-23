import {
    BURGER_CONSTRUCTOR_ADD_INGREDIENT,
    BURGER_CONSTRUCTOR_CHANGE_ROLL,
    BURGER_CONSTRUCTOR_CLEAR,
    BURGER_CONSTRUCTOR_DELETE_INGREDIENT,
    BURGER_CONSTRUCTOR_MOVE_INGEDIENT,
    TBurgerConstructorActions
} from '../actions/burger-constructor-action';

import { burgerConstructorInitialState, burgerConstructorReducer } from './burger-constructor-reducer';

import { IBurgerConstructor } from '../../utils/types';
import { mockIngredient, mockIngredientConstructor, mockIngredientConstructorFirst, mockIngredientConstructorSecond, mockRoll } from '../../data/test-data';






describe('burgerConstructorReducer', () => {

    it('Должен вернуть initialState', () => {
        expect(burgerConstructorReducer(undefined, {} as any)).toEqual(burgerConstructorInitialState);
    });


    it('BURGER_CONSTRUCTOR_ADD_INGREDIENT', () => {
        const action: TBurgerConstructorActions = {
            type: BURGER_CONSTRUCTOR_ADD_INGREDIENT,
            ingredient: mockIngredientConstructor.ingredient,
            uuid: mockIngredientConstructor.uuid
        };
        expect(burgerConstructorReducer(undefined, action)).toEqual({
            ...burgerConstructorInitialState,
            ingredients: [mockIngredientConstructor],
        });
    });

    it('BURGER_CONSTRUCTOR_CHANGE_ROLL', () => {
        const action: TBurgerConstructorActions = {
            type: BURGER_CONSTRUCTOR_CHANGE_ROLL,
            roll: mockRoll,
        };
        expect(burgerConstructorReducer(undefined, action)).toEqual({
            ...burgerConstructorInitialState,
            roll: mockRoll,
        });
    });

    it('BURGER_CONSTRUCTOR_DELETE_INGREDIENT', () => {
        const action: TBurgerConstructorActions = {
            type: BURGER_CONSTRUCTOR_DELETE_INGREDIENT,
            index: 0,
        };
        expect(burgerConstructorReducer({ ...burgerConstructorInitialState, ingredients: [mockIngredientConstructor] }, action)).toEqual({
            ...burgerConstructorInitialState,
            ingredients: [],
        });
    });

    it('BURGER_CONSTRUCTOR_MOVE_INGEDIENT', () => {
        const action: TBurgerConstructorActions = {
            type: BURGER_CONSTRUCTOR_MOVE_INGEDIENT,
            indexDragged: 0,
            indexDroped: 1
        };
        expect(burgerConstructorReducer({ ...burgerConstructorInitialState, ingredients: [mockIngredientConstructorFirst, mockIngredientConstructorSecond] }, action)).toEqual({
            ...burgerConstructorInitialState,
            ingredients: [mockIngredientConstructorSecond, mockIngredientConstructorFirst],
        });
    });

    it('BURGER_CONSTRUCTOR_CLEAR', () => {
        const action: TBurgerConstructorActions = {
            type: BURGER_CONSTRUCTOR_CLEAR,
        };
        expect(burgerConstructorReducer({ ...burgerConstructorInitialState, ingredients: [mockIngredientConstructorFirst, mockIngredientConstructorSecond] }, action)).toEqual({
            ...burgerConstructorInitialState
        });
    });

});