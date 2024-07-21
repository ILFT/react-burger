import { IBurgerIngredients } from '../../utils/types';
import {
  BURGER_INGREDIENTS_INITIAL,
  BURGER_INGREDIENTS_CHANGE_TAB,
  BURGER_INGREDIENTS_INCREASE_INGREDIENT,
  BURGER_INGREDIENTS_DECREASE_INGREDIENT,
  BURGER_INGREDIENTS_CHANGE_ROLL,
  BURGER_INGREDIENTS_INITIAL_SUCCESS,
  BURGER_INGREDIENTS_INITIAL_FAILED,
  TBurgerIngredientsActions,
  BURGER_INGREDIENTS_CLEAR,
} from '../actions/burger-ingredients-action';


const burgerIngredientsInitialState: IBurgerIngredients = {
  rolls: [],
  fillings: [],
  sauces: [],
  tab: 'rolls',
  ingredientsRequest: false,
  ingredientsFailed: false,
}

export const burgerIngredientsReducer = (state = burgerIngredientsInitialState, action: TBurgerIngredientsActions) => {
  switch (action.type) {
    case BURGER_INGREDIENTS_INITIAL: {
      return {
        ...state,
        ingredientsRequest: true
      };
    }
    case BURGER_INGREDIENTS_INITIAL_SUCCESS: {
      return {
        ...state,
        rolls: [...action.rolls].map(roll => { return { ...roll, count: 0 } }),
        fillings: [...action.fillings].map(filling => { return { ...filling, count: 0 } }),
        sauces: [...action.sauces].map(sauce => { return { ...sauce, count: 0 } }),
        ingredientsRequest: false
      };
    }
    case BURGER_INGREDIENTS_INITIAL_FAILED: {
      return {
        ...state,
        ingredientsFailed: true,
        ingredientsRequest: false
      };
    }
    case BURGER_INGREDIENTS_CHANGE_TAB: {
      return {
        ...state,
        tab: action.tab,
      };
    }

    case BURGER_INGREDIENTS_CHANGE_ROLL: {

      return {
        ...state,
        rolls: [...state.rolls].map(roll => {
          if (roll._id === action.changeRoll._id) {
            return { ...roll, count: 2 };
          } else {
            return { ...roll, count: 0 };
          }
        })

      }
    }
    case BURGER_INGREDIENTS_INCREASE_INGREDIENT: {

      if (action.increaseIngredient.type === 'main') {
        return {
          ...state,
          fillings: [...state.fillings].map(filing => {
            if (filing._id === action.increaseIngredient._id) return { ...filing, count: filing.count + 1 };
            return filing

          })
        }
      } else {
        return {
          ...state,
          sauces: [...state.sauces].map(sauce => {
            if (sauce._id === action.increaseIngredient._id) return { ...sauce, count: sauce.count + 1 }
            return sauce
          })
        }
      }
    }
    case BURGER_INGREDIENTS_DECREASE_INGREDIENT: {
      if (action.decreaseIngredient.type === 'main') {
        return {
          ...state,
          fillings: [...state.fillings].map(filing => {
            if (filing._id === action.decreaseIngredient._id && filing.count > 0) return { ...filing, count: filing.count - 1 };
            return filing

          })
        }
      } else {
        return {
          ...state,
          sauces: [...state.sauces].map(sauce => {
            if (sauce._id === action.decreaseIngredient._id && sauce.count > 0) return { ...sauce, count: sauce.count - 1 }
            return sauce
          })
        }
      }
    }
    case BURGER_INGREDIENTS_CLEAR: {
      return {
        ...state,
        rolls: state.rolls.map(roll => { return { ...roll, count: 0 } }),
        fillings: state.fillings.map(filling => { return { ...filling, count: 0 } }),
        sauces: state.sauces.map(sauce => { return { ...sauce, count: 0 } }),
        ingredientsRequest: false
      };
    }
    default: {
      return state;
    }
  }
};