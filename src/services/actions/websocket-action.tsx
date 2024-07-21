
import {TOrder, TOrdersResponse } from '../../utils/types';

export const WS_CONNECTION_START = 'WS_CONNECTION_START';
export const WS_CONNECTION_SUCCESS = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED = 'WS_CONNECTION_CLOSED';
export const WS_GET_ORDERS = 'WS_GET_ORDERS';
export const WS_SEND_ORDER = 'WS_SEND_ORDER';

export interface IWS_CONNECTION_START {
    readonly type: typeof WS_CONNECTION_START;
    readonly payload?: string;
}
export interface IWS_CONNECTION_SUCCESS {
    readonly type: typeof WS_CONNECTION_SUCCESS;
}
export interface IWS_CONNECTION_ERROR {
    readonly type: typeof WS_CONNECTION_ERROR;
}
export interface IWS_CONNECTION_CLOSED {
    readonly type: typeof WS_CONNECTION_CLOSED;
}
export interface IWS_GET_ORDERS {
    readonly type: typeof WS_GET_ORDERS;
    readonly payload: TOrdersResponse;
}
export interface IWS_SEND_ORDER {
    readonly type: typeof WS_SEND_ORDER;
    readonly payload: TOrder;
}


export type TWSOrdersActions =
    IWS_CONNECTION_START |
    IWS_CONNECTION_SUCCESS |
    IWS_CONNECTION_ERROR |
    IWS_CONNECTION_CLOSED |
    IWS_GET_ORDERS |
    IWS_SEND_ORDER;

