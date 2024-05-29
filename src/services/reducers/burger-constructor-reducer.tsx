import { Action } from '@reduxjs/toolkit';
import {
    BURGER_CONSTRUCTOR_ADD_INGREDIENT,
    BURGER_CONSTRUCTOR_CHANGE_ROLL,
    BURGER_CONSTRUCTOR_DELETE_INGREDIENT,
    TBurgerConstructorActions,
} from '../actions/burger-constructor-action';
import { IBurgerConstructor } from '../../utils/types';





const burgerConstructorInitialState:IBurgerConstructor = { 
    ingredients: [], 
    roll: undefined 
}

export const burgerConstructorReducer = (state = burgerConstructorInitialState, action: TBurgerConstructorActions) => {
    switch (action.type) {
        case BURGER_CONSTRUCTOR_ADD_INGREDIENT: {
            return {
                ...state,
                ingredients:[...state.ingredients, action.ingredient],

            }
        }
        case BURGER_CONSTRUCTOR_CHANGE_ROLL: {
            return {
                ...state,
                roll: action.roll,
            };
        }
        case BURGER_CONSTRUCTOR_DELETE_INGREDIENT: {
            let tempIngredients = state.ingredients.slice()
            tempIngredients.splice(action.index, 1)
            return { 
                ...state,
                ingredients: tempIngredients
            }
        }
        default:
            return state;
    }
}
