
import { AppDispatch, IngredientType } from "../utils/types";
import { deleteCookie, getCookie, request, setCookie } from "../utils/utils";
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
        request('/orders', {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify({
                ingredients: ingredientsId
            })
        }).then(result => {
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

export function registerUser(email: string, password: string, name: string) {

    return async function (dispatch: AppDispatch) {
        dispatch({
            type: USER_REGISTER,
        })
        const result = await request('/auth/register', {
            method: 'POST',
            headers: new Headers({ 'Content-type': 'application/json' }),
            body: JSON.stringify({
                email: email,
                password: password,
                name: name
            })
        }).catch(() => {
            dispatch({
                type: ERROR_REQUEST,
            })

        })

        if (result && result.success) {
            dispatch({
                type: USER_LOGIN_SUCCESS,
                user: result.user,
            })
        } else {
            dispatch({
                type: ERROR_REQUEST,
            })
        }

        return result

    }
}
export function loginUser(email: string, password: string) {

    return async function (dispatch: AppDispatch) {
        dispatch({
            type: USER_LOGIN,
        })
        const result = await request('/auth/login', {
            method: 'POST',
            headers: new Headers({ 'Content-type': 'application/json' }),
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).catch(() => {
            dispatch({
                type: ERROR_REQUEST,
            })
        })

        if (result && result.success) {
            localStorage.setItem('refreshToken', result.refreshToken);
            setCookie('accessToken', result.accessToken.split('Bearer ')[1])
            dispatch({
                type: USER_LOGIN_SUCCESS,
                user: result.user,
            })
        } else {
            dispatch({
                type: ERROR_REQUEST,
            })
        }

        return result

    }
}

export function logoutUser() {

    return async function (dispatch: AppDispatch) {
        dispatch({
            type: USER_EXIT,
        })

        const result = await request('/auth/logout', {
            method: 'POST',
            headers: new Headers({ 'Content-type': 'application/json' }),
            body: JSON.stringify({
                token: localStorage.getItem('refreshToken')
            })
        }).catch(() => {
            dispatch({
                type: ERROR_REQUEST,
            })
        })

        if (result && result.success) {
            localStorage.removeItem('refreshToken')
            deleteCookie('accessToken')
            dispatch({
                type: USER_EXIT_SUCCESS,
            })
        } else {
            dispatch({
                type: ERROR_REQUEST,
            })
        }

        return result
    }
}
export function tokenUser() {

    return async function (dispatch: AppDispatch) {
        dispatch({
            type: TOKEN_REFRESH,
        })
        console.log(localStorage.getItem('refreshToken'))
        const result = await request('/auth/token', {
            method: 'POST',
            headers: new Headers({ 'Content-type': 'application/json' }),
            body: JSON.stringify({
                token: localStorage.getItem('refreshToken')
            })
        }).catch(() => {
            dispatch({
                type: ERROR_REQUEST,
            })
        })

        if (result && result.success) {
            localStorage.setItem('refreshToken', result.refreshToken);
            setCookie('accessToken', result.accessToken.split('Bearer ')[1])
            dispatch({
                type: TOKEN_REFRESH_SUCCESS,
            })
        } else {
            dispatch({
                type: ERROR_REQUEST,
            })
        }

        return result

    }
}

export function getUser() {

    return async function (dispatch: AppDispatch) {
        dispatch({
            type: USER_AUTHORIZATION,
        })

        const result = await requestWithRefresh('/auth/user', {
            method: 'GET',
            headers: new Headers({ 'Content-type': 'application/json', 'authorization': 'Bearer ' + getCookie('accessToken') })
        }).catch(() => {
            dispatch({
                type: ERROR_REQUEST,
            })
        })

        if (result && result.success) {
            dispatch({
                type: USER_AUTHORIZATION_SUCCESS,
                user: result.user
            })
        } else {
            dispatch({
                type: ERROR_REQUEST,
            })
        }
        return result

    }
}

export function patchUser(email: string, password: string, name: string) {

    return async function (dispatch: AppDispatch) {
        dispatch({
            type: USER_UPDATE_DATA,
        })

        const result = await requestWithRefresh('/auth/user', {
            method: 'PATCH',
            headers: new Headers({ 'Content-type': 'application/json', 'authorization': 'Bearer ' + getCookie('accessToken') }),
            body: JSON.stringify({
                email: email,
                name: name,
                password: password,
            })
        }).catch(() => {
            dispatch({
                type: ERROR_REQUEST,
            })
        })

        if (result && result.success) {
            dispatch({
                type: USER_UPDATE_DATA_SUCCESS
            })
        } else {
            dispatch({
                type: ERROR_REQUEST,
            })
        }

        return result

    }
}

export function resetPasswordRequest(email: string) {


    return async function (dispatch: AppDispatch) {

        dispatch({
            type: PASSWORD_REFRESH,
        })

        const result = await request('/password-reset', {
            method: 'POST',
            headers: new Headers({ 'Content-type': 'application/json' }),
            body: JSON.stringify({
                email: email
            })
        }).catch(() => {
            dispatch({
                type: ERROR_REQUEST,
            })
        })

        if (result && result.success) {
            dispatch({
                type: PASSWORD_REFRESH_SUCCESS,
            })
        } else {
            dispatch({
                type: ERROR_REQUEST,
            })
        }

        return result

    }

}

export function resetPasswordConfirm(password: string, token: string) {

    return async function (dispatch: AppDispatch) {
        dispatch({
            type: PASSWORD_UPDATE,
        })
        const result = await request(`/password-reset/reset`, {
            method: 'POST',
            headers: new Headers({ 'Content-type': 'application/json' }),
            body: JSON.stringify({
                password: password,
                token: token
            })
        }).catch(() => {
            dispatch({
                type: ERROR_REQUEST,
            })
        })


        if (result && result.success) {
            dispatch({
                type: PASSWORD_UPDATE_SUCCESS,
            })
        } else {
            dispatch({
                type: ERROR_REQUEST,
            })
        }

        return result

    }
}



export async function requestWithRefresh(url: RequestInfo | URL, options: RequestInit | undefined) {

    const result = await request(url, options).catch(async (error) => {
        if (error.message === 'jwt expired') {
            await tokenUser()
            return await request(url, options)
        } else {
            return Promise.reject(error)
        }
    })
    return result
}


