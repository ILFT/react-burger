import { User } from "../../utils/types";

export const USER_REGISTER = "USER_REGISTER";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";

export const USER_AUTHORIZATION = "USER_AUTHORIZATION";
export const USER_AUTHORIZATION_SUCCESS = "USER_AUTHORIZATION_SUCCESS";

export const USER_UPDATE_DATA = "USER_UPDATE_DATA";
export const USER_UPDATE_DATA_SUCCESS = "USER_UPDATE_DATA_SUCCESS";

export const PASSWORD_REFRESH = "PASSWORD_REFRESH";
export const PASSWORD_REFRESH_SUCCESS = "PASSWORD_REFRESH_SUCCESS";

export const PASSWORD_UPDATE = "PASSWORD_UPDATE";
export const PASSWORD_UPDATE_SUCCESS = "PASSWORD_UPDATE_SUCCESS";

export const TOKEN_REFRESH = "TOKEN_REFRESH";
export const TOKEN_REFRESH_SUCCESS = "TOKEN_REFRESH_SUCCESS";

export const USER_EXIT = "USER_EXIT";
export const USER_EXIT_SUCCESS = "USER_EXIT_SUCCESS";

export const ERROR_REQUEST  = "ERROR_REQUEST";

//export const AUTH_CHECKED  ="AUTH_CHECKED";



export interface IUSER_REGISTER {
    readonly type: typeof USER_REGISTER;
}

export interface IUSER_REGISTER_SUCCESS {
    readonly type: typeof USER_REGISTER_SUCCESS;
    readonly user: User;
}

export interface IUSER_LOGIN {
    readonly type: typeof USER_LOGIN;
}

export interface IUSER_LOGIN_SUCCESS {
    readonly type: typeof USER_LOGIN_SUCCESS;
    readonly user: User;
}

export interface IUSER_AUTHORIZATION {
    readonly type: typeof USER_AUTHORIZATION;
}

export interface IUSER_AUTHORIZATION_SUCCESS {
    readonly type: typeof USER_AUTHORIZATION_SUCCESS;
    readonly user: User;
}

export interface IUSER_UPDATE_DATA {
    readonly type: typeof USER_UPDATE_DATA;
}

export interface IUSER_UPDATE_DATA_SUCCESS {
    readonly type: typeof USER_UPDATE_DATA_SUCCESS;
}

export interface IPASSWORD_REFRESH {
    readonly type: typeof PASSWORD_REFRESH;
}

export interface IPASSWORD_REFRESH_SUCCESS {
    readonly type: typeof PASSWORD_REFRESH_SUCCESS;
}

export interface IPASSWORD_UPDATE {
    readonly type: typeof PASSWORD_UPDATE;
}

export interface IPASSWORD_UPDATE_SUCCESS {
    readonly type: typeof PASSWORD_UPDATE_SUCCESS;
}

export interface ITOKEN_REFRESH {
    readonly type: typeof TOKEN_REFRESH;
}

export interface ITOKEN_REFRESH_SUCCESS {
    readonly type: typeof TOKEN_REFRESH_SUCCESS;
}

export interface IUSER_EXIT {
    readonly type: typeof USER_EXIT;
}

export interface IUSER_EXIT_SUCCESS {
    readonly type: typeof USER_EXIT_SUCCESS;
}

export interface IERROR_REQUEST {
    readonly type: typeof ERROR_REQUEST;
}


export type TUserDataActions =

    IUSER_REGISTER |
    IUSER_REGISTER_SUCCESS |
    IUSER_LOGIN |
    IUSER_LOGIN_SUCCESS |
    IUSER_AUTHORIZATION|
    IUSER_AUTHORIZATION_SUCCESS|
    IUSER_UPDATE_DATA |
    IUSER_UPDATE_DATA_SUCCESS |
    IPASSWORD_REFRESH |
    IPASSWORD_REFRESH_SUCCESS |
    IPASSWORD_UPDATE |
    IPASSWORD_UPDATE_SUCCESS |
    ITOKEN_REFRESH |
    ITOKEN_REFRESH_SUCCESS |
    IUSER_EXIT |
    IUSER_EXIT_SUCCESS |
    IERROR_REQUEST;