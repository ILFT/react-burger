import { ThunkAction } from '@reduxjs/toolkit'
import { TBurgerConstructorActions } from '../services/actions/burger-constructor-action'
import { TBurgerIngredientsActions } from '../services/actions/burger-ingredients-action'
import { TIngredientDetailsActions } from '../services/actions/ingredient-order-details-action'
import { store } from '../services/stores/store'
import { TUserDataActions } from '../services/actions/user-data-action'
import { TWSOrdersActions } from '../services/actions/websocket-action'


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

export type IngredientTypeConstructor = {
  ingredient: IngredientType
  uuid: string
}

export type User = {
  email: string
  name: string

}
export type TWSActions = {
  wsInit: string,
  onOpen: string,
  onClose: string,
  onError: string,
  onMessage: string,
  wsSendOrder: string,
}

export type RectResult = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
} | null;

export type TOrder = {
  _id: string,
  ingredients: string[],
  status: string,
  name: string,
  createdAt: string,
  updatedAt: string,
  number: number,

};

export type TOrdersResponse = {
  orders: TOrder[],
  total: number;
  totalToday: number;
};

export interface IIngredientOrderDetails {
  ingredient: IngredientType | null
  id: number | null
  isModalIngredient: boolean
  isModalOrder: boolean
  orderDetailsRequest: boolean
  orderDetailsFailed: boolean
}

export interface IBurgerIngredients {
  rolls: IngredientType[];
  fillings: IngredientType[];
  sauces: IngredientType[];
  tab: string | null;
  ingredientsRequest: boolean,
  ingredientsFailed: boolean,
}


export interface TWebSocketState {
  wsConnected: boolean,
  orders: TOrder[],
  total: number,
  totalToday: number,
};
export interface IBurgerConstructor {
  ingredients: IngredientTypeConstructor[];
  roll: IngredientType | undefined;
}


export interface IUserData {
  user: User;
  condition: string | null;
  conditionRequest: boolean;
  conditionFailed: boolean;
  conditionSuccess: boolean;
}

export type TApplicationActions =
  TIngredientDetailsActions |
  TBurgerIngredientsActions |
  TBurgerConstructorActions |
  TUserDataActions | 
  TWSOrdersActions;


export type RootState = ReturnType<typeof store.getState>;


export type AppThunk<TReturnType = void> = ThunkAction<TReturnType, RootState, null, TApplicationActions>;


export type AppDispatch<TReturnType = void> = (action: TApplicationActions | AppThunk) => TReturnType;