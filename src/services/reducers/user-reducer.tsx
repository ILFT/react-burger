import { IUserData } from '../../utils/types';
import {
    USER_REGISTER,
    USER_REGISTER_SUCCESS,

    USER_LOGIN,
    USER_LOGIN_SUCCESS,

    USER_UPDATE_DATA,
    USER_UPDATE_DATA_SUCCESS,

    PASSWORD_REFRESH,
    PASSWORD_REFRESH_SUCCESS,

    PASSWORD_UPDATE,
    PASSWORD_UPDATE_SUCCESS,

    TOKEN_REFRESH,
    TOKEN_REFRESH_SUCCESS,

    USER_EXIT,
    USER_EXIT_SUCCESS,

    ERROR_REQUEST,

    TUserDataActions,
    USER_AUTHORIZATION,
    USER_AUTHORIZATION_SUCCESS
} from '../actions/user-data-action';


export const userDataState: IUserData = {
    condition: null,
    conditionRequest: false,
    conditionFailed: false,
    conditionSuccess: false,
    user : {email:"" , name:""}
}

export const userReducer = (state = userDataState, action: TUserDataActions) => {
    switch (action.type) {
        case USER_REGISTER: {
            return {
                ...state,
                condition: action,
                conditionRequest: true,
                conditionSuccess: false,
            };
        }
        case USER_REGISTER_SUCCESS: {
            return{
                ...state,
                conditionRequest: false,
                conditionSuccess: true,
                user: action.user
            } 
        }

        case USER_LOGIN: {
            return {
                ...state,
                condition: action,
                conditionRequest: true,
                conditionSuccess: false,
            };
        }

        case USER_LOGIN_SUCCESS: {
            return{
                ...state,
                conditionRequest: false,
                conditionSuccess: true,
                user: action.user
            }
        }

        case USER_AUTHORIZATION: {
            return {
                ...state,
                condition: action,
                conditionRequest: true,
                conditionSuccess: false,
            };
        }

        case USER_AUTHORIZATION_SUCCESS: {
            return{
                ...state,
                conditionRequest: false,
                conditionSuccess: true,
                user: action.user
            }
        }
        
        case USER_UPDATE_DATA: {
            return {
                ...state,
                condition: action,
                conditionRequest: true,
                conditionSuccess: false,
            };
        }
        case USER_UPDATE_DATA_SUCCESS: {
            return {
                ...state,
                conditionRequest: false,
                conditionSuccess: true,
            };
        }

        case PASSWORD_REFRESH: {
            return {
                ...state,
                condition: action,
                conditionRequest: true,
                conditionSuccess: false,
            };
        }
        case PASSWORD_REFRESH_SUCCESS: {
            return {
                ...state,
                conditionRequest: false,
                conditionSuccess: true,
            };
        }
 
        case PASSWORD_UPDATE: {
            return {
                ...state,
                condition: action,
                conditionRequest: true,
                conditionSuccess: false,
            };
        }
        case PASSWORD_UPDATE_SUCCESS: {
            return {
                ...state,
                conditionRequest: false,
                conditionSuccess: true,
            };
        }

        case TOKEN_REFRESH: {
            return {
                ...state,
                condition: action,
                conditionRequest: true,
                conditionSuccess: false,
            };
        }
        case TOKEN_REFRESH_SUCCESS: {
            return {
                ...state,
                conditionRequest: false,
                conditionSuccess: true,
            };
        }

        case USER_EXIT: {
            return {
                ...state,
                condition: action,
                conditionRequest: true,
                conditionSuccess: false,
            };
        }
        case USER_EXIT_SUCCESS: {
            return {
                ...state,
                conditionRequest: false,
                conditionSuccess: true,
                user : {email:"" , name:""}
            };
        }

        case ERROR_REQUEST: {
            return {
                ...state,
                conditionRequest: false,
                conditionFailed: true,
                conditionSuccess: false,
              };
        }

        default: {
            return state;
        }
    }
};