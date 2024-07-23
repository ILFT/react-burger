
import {
    BURGER_CONSTRUCTOR_ADD_INGREDIENT,
    BURGER_CONSTRUCTOR_CHANGE_ROLL,
    BURGER_CONSTRUCTOR_CLEAR,
    BURGER_CONSTRUCTOR_DELETE_INGREDIENT,
    BURGER_CONSTRUCTOR_MOVE_INGEDIENT,
    TBurgerConstructorActions,
} from '../actions/burger-constructor-action';
import { IBurgerConstructor } from '../../utils/types';





export const burgerConstructorInitialState: IBurgerConstructor = {
    ingredients: [],
    roll: undefined
}

export const burgerConstructorReducer = (state = burgerConstructorInitialState, action: TBurgerConstructorActions) => {
    switch (action.type) {
        case BURGER_CONSTRUCTOR_ADD_INGREDIENT: {
            return {
                ...state,
                ingredients: [...state.ingredients, { ingredient: action.ingredient, uuid: action.uuid }],

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
        case BURGER_CONSTRUCTOR_MOVE_INGEDIENT: {
            let tempIngredients = [...state.ingredients];
            [tempIngredients[action.indexDragged], tempIngredients[action.indexDroped]] = [tempIngredients[action.indexDroped], tempIngredients[action.indexDragged]]
            return {
                ...state,
                ingredients: tempIngredients
            }
        }
        case BURGER_CONSTRUCTOR_CLEAR: {
            return {
                ...state,
                ingredients: [],
                roll: undefined
            }
        }
        default:
            return state;
    }
}
