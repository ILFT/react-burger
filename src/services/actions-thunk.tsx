
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
        request('/orders', { method: 'POST', headers:  new Headers({'content-type': 'application/json'}), body: JSON.stringify({ingredients: ingredientsId}) }).then(result => {
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

export function registerUser() {

    return function (dispatch: AppDispatch) {
        //dispatch({
        //    type: ORDERDETAILS_OPEN,
        //})
        request('/auth/register', { method: 'POST', headers:  new Headers({'content-type': 'application/json'}), body: JSON.stringify({
            email: "test-data@yandex.ru", 
            password: "password", 
            name: "Username" 
          })}).then(result => {
            //dispatch({
            //    type: ORDERDETAILS_OPEN_SUCCESS,
            //    id: result.order.number,
            //});
        }).catch(() => {
            //dispatch({
            //    type: ORDERDETAILS_OPEN_FAILED,
            //})
        })
    }
}
export function loginUser() {

    return function (dispatch: AppDispatch) {
        //dispatch({
        //    type: ORDERDETAILS_OPEN,
        //})
        request('/auth/login', { method: 'POST', headers:  new Headers({'content-type': 'application/json'}), body: JSON.stringify({
            email: "test-data@yandex.ru", 
            password: "password"
          })}).then(result => {
            //dispatch({
            //    type: ORDERDETAILS_OPEN_SUCCESS,
            //    id: result.order.number,
            //});
        }).catch(() => {
            //dispatch({
            //    type: ORDERDETAILS_OPEN_FAILED,
            //})
        })
    }
}

export function logoutUser() {

    return function (dispatch: AppDispatch) {
        //dispatch({
        //    type: ORDERDETAILS_OPEN,
        //})
        request('/auth/logout', { method: 'POST', headers:  new Headers({'content-type': 'application/json'}), body: JSON.stringify({
            token: "значение refreshToken"
          })}).then(result => {
            //dispatch({
            //    type: ORDERDETAILS_OPEN_SUCCESS,
            //    id: result.order.number,
            //});
        }).catch(() => {
            //dispatch({
            //    type: ORDERDETAILS_OPEN_FAILED,
            //})
        })
    }
}
export function tokenUser() {

    return function (dispatch: AppDispatch) {
        //dispatch({
        //    type: ORDERDETAILS_OPEN,
        //})
        request('/auth/token', { method: 'POST', headers:  new Headers({'content-type': 'application/json'}), body: JSON.stringify({
            token: "значение refreshToken"
          })}).then(result => {
            //dispatch({
            //    type: ORDERDETAILS_OPEN_SUCCESS,
            //    id: result.order.number,
            //});
        }).catch(() => {
            //dispatch({
            //    type: ORDERDETAILS_OPEN_FAILED,
            //})
        })
    }
}

export function getUser() {

    return function (dispatch: AppDispatch) {
        //dispatch({
        //    type: ORDERDETAILS_OPEN,
        //})
        request('/auth/token', { method: 'GET', headers:  new Headers({'content-type': 'application/json', 'Authorization': 'Bearer '})}).then(result => {
            //dispatch({
            //    type: ORDERDETAILS_OPEN_SUCCESS,
            //    id: result.order.number,
            //});
        }).catch(() => {
            //dispatch({
            //    type: ORDERDETAILS_OPEN_FAILED,
            //})
        })
    }
}

export function patchUser() {

    return function (dispatch: AppDispatch) {
        //dispatch({
        //    type: ORDERDETAILS_OPEN,
        //})
        request('/auth/token', { method: 'PATCH', headers:  new Headers({'content-type': 'application/json', 'Authorization': 'Bearer '}), body: JSON.stringify({
            email: "test-data@yandex.ru", 
            password: "password", 
            name: "Username", 
    
          })}).then(result => {
            //dispatch({
            //    type: ORDERDETAILS_OPEN_SUCCESS,
            //    id: result.order.number,
            //});
        }).catch(() => {
            //dispatch({
            //    type: ORDERDETAILS_OPEN_FAILED,
            //})
        })
    }
}

export function resetPasswordRequest() {

    return function (dispatch: AppDispatch) {
        //dispatch({
        //    type: ORDERDETAILS_OPEN,
        //})
        request('/password-reset', { method: 'POST', headers:  new Headers({'content-type': 'application/json'}), body: JSON.stringify({
            email: "test-data@yandex.ru"
          })}).then(result => {
            //dispatch({
            //    type: ORDERDETAILS_OPEN_SUCCESS,
            //    id: result.order.number,
            //});
        }).catch(() => {
            //dispatch({
            //    type: ORDERDETAILS_OPEN_FAILED,
            //})
        })
    }
}
export function resetPasswordConfirm() {

    return function (dispatch: AppDispatch) {
        //dispatch({
        //    type: ORDERDETAILS_OPEN,
        //})
        request('/password-reset/reset', { method: 'POST', headers:  new Headers({'content-type': 'application/json'}), body: JSON.stringify({
            email: "test-data@yandex.ru", 
            password: "password", 
            token: "" 
          })}).then(result => {
            //dispatch({
            //    type: ORDERDETAILS_OPEN_SUCCESS,
            //    id: result.order.number,
            //});
        }).catch(() => {
            //dispatch({
            //    type: ORDERDETAILS_OPEN_FAILED,
            //})
        })
    }
}

