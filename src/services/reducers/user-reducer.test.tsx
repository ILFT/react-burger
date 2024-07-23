
import { mockUser } from '../../data/test-data';
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

import { userDataState, userReducer } from './user-reducer'







describe('burgerConstructorReducer', () => {

    it('Должен вернуть initialState', () => {
        expect(userReducer(undefined, {} as any)).toEqual(userDataState);
    });


    it('USER_REGISTER', () => {
        const action: TUserDataActions = {
            type: USER_REGISTER,
        };
        expect(userReducer(undefined, action)).toEqual({
            ...userDataState,
            condition: action,
            conditionRequest: true,
            conditionSuccess: false,
        });
    });

    it('USER_REGISTER_SUCCESS', () => {
        const action: TUserDataActions = {
            type: USER_REGISTER_SUCCESS,
            user: mockUser
        };
        expect(userReducer(undefined, action)).toEqual({
            ...userDataState,
            conditionRequest: false,
            conditionSuccess: true,
            user: mockUser
        });
    });

    it('USER_LOGIN', () => {
        const action: TUserDataActions = {
            type: USER_LOGIN,
        };
        expect(userReducer(undefined, action)).toEqual({
            ...userDataState,
            condition: action,
            conditionRequest: true,
            conditionSuccess: false,
        });
    });

    it('USER_LOGIN_SUCCESS', () => {
        const action: TUserDataActions = {
            type: USER_LOGIN_SUCCESS,
            user: mockUser
        };
        expect(userReducer(undefined, action)).toEqual({
            ...userDataState,
            conditionRequest: false,
            conditionSuccess: true,
            user: mockUser
        });
    });

    it('USER_AUTHORIZATION', () => {
        const action: TUserDataActions = {
            type: USER_AUTHORIZATION,
        };
        expect(userReducer(undefined, action)).toEqual({
            ...userDataState,
            condition: action,
            conditionRequest: true,
            conditionSuccess: false,
        });
    });

    it('USER_AUTHORIZATION_SUCCESS', () => {
        const action: TUserDataActions = {
            type: USER_AUTHORIZATION_SUCCESS,
            user: mockUser
        };
        expect(userReducer(undefined, action)).toEqual({
            ...userDataState,
            conditionRequest: false,
            conditionSuccess: true,
            user: mockUser
        });
    });

    it('USER_UPDATE_DATA', () => {
        const action: TUserDataActions = {
            type: USER_UPDATE_DATA,
        };
        expect(userReducer(undefined, action)).toEqual({
            ...userDataState,
            condition: action,
            conditionRequest: true,
            conditionSuccess: false,
        });
    });

    it('USER_UPDATE_DATA_SUCCESS', () => {
        const action: TUserDataActions = {
            type: USER_UPDATE_DATA_SUCCESS,
        };
        expect(userReducer(undefined, action)).toEqual({
            ...userDataState,
            conditionRequest: false,
            conditionSuccess: true,
        });
    });

    it('PASSWORD_REFRESH', () => {
        const action: TUserDataActions = {
            type: PASSWORD_REFRESH,
        };
        expect(userReducer(undefined, action)).toEqual({
            ...userDataState,
            condition: action,
            conditionRequest: true,
            conditionSuccess: false,
        });
    });

    it('PASSWORD_REFRESH_SUCCESS', () => {
        const action: TUserDataActions = {
            type: PASSWORD_REFRESH_SUCCESS,
        };
        expect(userReducer(undefined, action)).toEqual({
            ...userDataState,
            conditionRequest: false,
            conditionSuccess: true,
        });
    });


    it('TOKEN_REFRESH', () => {
        const action: TUserDataActions = {
            type: TOKEN_REFRESH,
        };
        expect(userReducer(undefined, action)).toEqual({
            ...userDataState,
            condition: action,
            conditionRequest: true,
            conditionSuccess: false,
        });
    });

    it('TOKEN_REFRESH_SUCCESS', () => {
        const action: TUserDataActions = {
            type: TOKEN_REFRESH_SUCCESS,
        };
        expect(userReducer(undefined, action)).toEqual({
            ...userDataState,
            conditionRequest: false,
            conditionSuccess: true,
        });
    });


    it('USER_EXIT', () => {
        const action: TUserDataActions = {
            type: USER_EXIT,
        };
        expect(userReducer(undefined, action)).toEqual({
            ...userDataState,
            condition: action,
            conditionRequest: true,
            conditionSuccess: false,
        });
    });

    it('USER_EXIT_SUCCESS', () => {
        const action: TUserDataActions = {
            type: USER_EXIT_SUCCESS,
        };
        expect(userReducer(undefined, action)).toEqual({
            ...userDataState,
            conditionRequest: false,
            conditionSuccess: true,
            user: { email: "", name: "" }
        });
    });


    it('ERROR_REQUEST', () => {
        const action: TUserDataActions = {
            type: ERROR_REQUEST,
        };
        expect(userReducer(undefined, action)).toEqual({
            ...userDataState,
            conditionRequest: false,
            conditionFailed: true,
            conditionSuccess: false,
        });
    });


});