
import { AppDispatch, IngredientType } from "../utils/types";
import { getCookie, request, setCookie } from "../utils/utils";
import { BURGER_INGREDIENTS_INITIAL, BURGER_INGREDIENTS_INITIAL_FAILED, BURGER_INGREDIENTS_INITIAL_SUCCESS } from "./actions/burger-ingredients-action";
import { ORDERDETAILS_OPEN, ORDERDETAILS_OPEN_FAILED, ORDERDETAILS_OPEN_SUCCESS } from "./actions/ingredient-order-details-action";
import { ERROR_REQUEST, PASSWORD_REFRESH, PASSWORD_REFRESH_SUCCESS, PASSWORD_UPDATE, PASSWORD_UPDATE_SUCCESS, TOKEN_REFRESH, TOKEN_REFRESH_SUCCESS, USER_AUTHORIZATION, USER_AUTHORIZATION_SUCCESS, USER_EXIT, USER_EXIT_SUCCESS, USER_LOGIN, USER_LOGIN_SUCCESS, USER_REGISTER, USER_REGISTER_SUCCESS, USER_UPDATE_DATA, USER_UPDATE_DATA_SUCCESS } from "./actions/user-data-action";

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
        request('/orders', { method: 'POST', headers: new Headers({ 'content-type': 'application/json' }), body: JSON.stringify({ ingredients: ingredientsId }) }).then(result => {
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
        dispatch({
            type: USER_REGISTER,
        })
        request('/auth/register', {
            method: 'POST', headers: new Headers({ 'content-type': 'application/json' }), body: JSON.stringify({
                email: "test-data@yandex.ru",
                password: "password",
                name: "Username"
            })
        }).then(result => {
            localStorage.setItem('refreshToken', result.refreshToken);
            setCookie('accessToken', result.accessToken.split('Bearer ')[0])
            dispatch({
                type: USER_REGISTER_SUCCESS,
                user: result.user,
            });
        }).catch(() => {
            dispatch({
                type: ERROR_REQUEST,
            })
        })
    }
}
export function loginUser() {

    return function (dispatch: AppDispatch) {
        dispatch({
            type: USER_LOGIN,
        })
        request('/auth/login', {
            method: 'POST', headers: new Headers({ 'content-type': 'application/json' }), body: JSON.stringify({
                email: "test-data@yandex.ru",
                password: "password"
            })
        }).then(result => {
            dispatch({
                type: USER_LOGIN_SUCCESS,
                user: result.user,
            });
        }).catch(() => {
            dispatch({
                type: ERROR_REQUEST,
            })
        })
    }
}

export function logoutUser() {

    return function (dispatch: AppDispatch) {
        dispatch({
            type: USER_EXIT,
        })
        request('/auth/logout', {
            method: 'POST', headers: new Headers({ 'content-type': 'application/json' }), body: JSON.stringify({
                token: localStorage.getItem('refreshToken')
            })
        }).then(() => {
            dispatch({
                type: USER_EXIT_SUCCESS
            });
        }).catch(() => {
            dispatch({
                type: ERROR_REQUEST,
            })
        })
    }
}
export function tokenUser() {

    return function (dispatch: AppDispatch) {
        dispatch({
            type: TOKEN_REFRESH,
        })
        request('/auth/token', {
            method: 'POST', headers: new Headers({ 'content-type': 'application/json' }), body: JSON.stringify({
                token: localStorage.getItem('refreshToken')
            })
        }).then(result => {
            setCookie('accessToken', result.accessToken.split('Bearer ')[0])
            dispatch({
                type: TOKEN_REFRESH_SUCCESS,
            });
        }).catch(() => {
            dispatch({
                type: ERROR_REQUEST,
            })
        })
    }
}

export function getUser() {

    return function (dispatch: AppDispatch) {
        dispatch({
            type: USER_AUTHORIZATION,
        })
        request('/auth/user', {
            method: 'GET', headers: new Headers({ 'content-type': 'application/json', 'Authorization': 'Bearer ' + getCookie('accessToken')})
        }).then(result => {
            dispatch({
                type: USER_AUTHORIZATION_SUCCESS,
                user: result.user
            });
        }).catch(() => {
            dispatch({
                type: ERROR_REQUEST,
            })
        })
    }
}

export function patchUser() {

    return function (dispatch: AppDispatch) {
        dispatch({
            type: USER_UPDATE_DATA,
        })
        request('/auth/token', {
            method: 'PATCH', headers: new Headers({ 'content-type': 'application/json', 'Authorization': 'Bearer ' + getCookie('accessToken') }), body: JSON.stringify({
                email: "test-data@yandex.ru",
                password: "password",
                name: "Username",
            })
        }).then(() => {
            dispatch({
                type: USER_UPDATE_DATA_SUCCESS
            });
        }).catch(() => {
            dispatch({
                type: ERROR_REQUEST,
            })
        })
    }
}

export function resetPasswordRequest() {

    return function (dispatch: AppDispatch) {
        dispatch({
            type: PASSWORD_REFRESH,
        })
        request('/password-reset', {
            method: 'POST', headers: new Headers({ 'content-type': 'application/json' }), body: JSON.stringify({
                email: "test-data@yandex.ru"
            })
        }).then(() => {
            dispatch({
                type: PASSWORD_REFRESH_SUCCESS,
            });
        }).catch(() => {
            dispatch({
                type: ERROR_REQUEST,
            })
        })
    }
}
export function resetPasswordConfirm() {

    return function (dispatch: AppDispatch) {
        dispatch({
            type: PASSWORD_UPDATE,
        })
        request('/password-reset/reset', {
            method: 'POST', headers: new Headers({ 'content-type': 'application/json' }), body: JSON.stringify({
                password: "password",
                token: getCookie('accessToken')
            })
        }).then(() => {
            dispatch({
                type: PASSWORD_UPDATE_SUCCESS,
            });
        }).catch(() => {
            dispatch({
                type: ERROR_REQUEST,
            })
        })
    }
}

