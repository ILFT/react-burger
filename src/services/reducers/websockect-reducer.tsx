import { TWebSocketState } from '../../utils/types';
import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS,
    TWSOrdersActions
} from '../actions/websocket-action';



export const initialState: TWebSocketState = {
    wsConnected: false,
    orders: [],
    total: 0,
    totalToday: 0
};

export const webSocketReducer = (state = initialState, action: TWSOrdersActions) => {
    switch (action.type) {
        case WS_CONNECTION_START: {

            return {
                ...state,
            }
        }
        case WS_CONNECTION_SUCCESS: {
            return {
                ...state,
                wsConnected: true,
            }
        }


        case WS_CONNECTION_ERROR: {
            return {
                ...state,
                wsConnected: false,
            }
        }
        case WS_CONNECTION_CLOSED: {
            return {
                ...state,
                wsConnected: false,
            }
        }
        case WS_GET_ORDERS: {
            return {
                ...state,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday,
            }
        }
        default: return state;
    }
}