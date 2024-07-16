import { combineReducers } from 'redux';
import {burgerIngredientsReducer} from './burger-ingredients-reducer';
import {burgerConstructorReducer} from './burger-constructor-reducer';
import {ingredientOrderDetailsReducer} from './ingredient-order-details-reducer';
import { userReducer } from './user-reducer';
import { webSocketReducer } from './websockect-reducer';




export const rootReducer = combineReducers({
    burgerIngredientsData: burgerIngredientsReducer,
    burgerConstructorData: burgerConstructorReducer,
    ingredientOrderDetailData: ingredientOrderDetailsReducer,
    userData : userReducer,
    webSocket: webSocketReducer

}) 

