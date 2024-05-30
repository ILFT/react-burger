import { TBurgerConstructorActions } from '../services/actions/burger-constructor-action'
import { TBurgerIngredientsActions } from '../services/actions/burger-ingredients-action'
import { TIngredientDetailsActions } from '../services/actions/ingredient-order-details-action'

export type IngredientType = {
  _id: string
  name: string
  type: string
  proteins: number
  fat: number
  carbohydrates: number
  calories: number
  price: number
  image: string
  image_mobile: string
  image_large: string
  __v: number
  count: number
}
export type RectResult = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
} | null;


export interface IIngredientOrderDetails {
  ingredient: IngredientType | null
  id: number | null
  isModalIngredient: boolean
  isModalOrder: boolean
}

export interface IBurgerIngredients {
  rolls: IngredientType[];
  fillings: IngredientType[];
  sauces: IngredientType[];
  tab: string | null;
}

export interface IBurgerConstructor {
  ingredients: IngredientType[];
  roll: IngredientType | undefined;
}


export type TApplicationActions =
  TIngredientDetailsActions |
  TBurgerIngredientsActions |
  TBurgerConstructorActions;