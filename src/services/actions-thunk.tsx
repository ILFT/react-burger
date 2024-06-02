
import { AppDispatch, IngredientType } from "../utils/types";
import { request } from "../utils/utils";
import { BURGER_INGREDIENTS_INITIAL, BURGER_INGREDIENTS_INITIAL_FAILED, BURGER_INGREDIENTS_INITIAL_SUCCESS } from "./actions/burger-ingredients-action";
import { ORDERDETAILS_OPEN, ORDERDETAILS_OPEN_FAILED, ORDERDETAILS_OPEN_SUCCESS } from "./actions/ingredient-order-details-action";

export function initIngredients() {

    return async (dispatch: AppDispatch) => {
        dispatch({
            type: BURGER_INGREDIENTS_INITIAL
        })
        request('/ingredients').then(resulst => {
            if (resulst) {
                dispatch({
                    type: BURGER_INGREDIENTS_INITIAL_SUCCESS,
                    rolls: resulst.data.filter((roll: IngredientType) => roll.type === "bun"),
                    fillings: resulst.data.filter((filing: IngredientType) => filing.type === "main"),
                    sauces: resulst.data.filter((sauce: IngredientType) => sauce.type === "sauce"),
                })
            } else {
                dispatch({
                    type: BURGER_INGREDIENTS_INITIAL_FAILED,
                });
            }
        }).catch(console.error);
    }
}



export function getOrderNumber(ingredientsId: string[]) {

    return function (dispatch: AppDispatch) {
        dispatch({
            type: ORDERDETAILS_OPEN,
        })
        console.log({ method: 'POST', body: JSON.stringify({ingredients: ingredientsId}) });
        request('/orders', { method: 'POST',headers: {
            'Content-Type': 'application/json;charset=utf-8'
          }, body: JSON.stringify({ingredients: ingredientsId}) }).then(result => {
            dispatch({
                type: ORDERDETAILS_OPEN_SUCCESS,
                id: result.order.number,
            });
        }).catch(() => {
            dispatch({
                type: ORDERDETAILS_OPEN_FAILED,
            })
        })


    }
}