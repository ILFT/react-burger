import { mockWSOrder, mockWSOrdersResponse } from '../../data/test-data';
import { TWebSocketState } from '../../utils/types';
import {
    WS_CONNECTION_START,
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_GET_ORDERS,
    TWSOrdersActions
} from '../actions/websocket-action';

import { webSocketReducer } from './websockect-reducer';


const initialState: TWebSocketState = {
    wsConnected: false,
    orders: [],
    total: 0,
    totalToday: 0
};



describe('burgerConstructorReducer', () => {

    it('Должен вернуть initialState', () => {
        expect(webSocketReducer(undefined, {} as any)).toEqual(initialState);
    });


    it('WS_CONNECTION_START', () => {
        const action: TWSOrdersActions = {
            type: WS_CONNECTION_START,
            payload: 'http://localhost',
        };
        expect(webSocketReducer(undefined, action)).toEqual({
            ...initialState,
        });
    });

    it('WS_CONNECTION_SUCCESS', () => {
        const action: TWSOrdersActions = {
            type: WS_CONNECTION_SUCCESS,

        };
        expect(webSocketReducer(undefined, action)).toEqual({
            ...initialState,
            wsConnected: true,
        });
    });

    it('WS_CONNECTION_ERROR', () => {
        const action: TWSOrdersActions = {
            type: WS_CONNECTION_ERROR,

        };
        expect(webSocketReducer(undefined, action)).toEqual({
            ...initialState,
            wsConnected: false,
        });
    });

    it('WS_CONNECTION_CLOSED', () => {
        const action: TWSOrdersActions = {
            type: WS_CONNECTION_CLOSED,

        };
        expect(webSocketReducer(undefined, action)).toEqual({
            ...initialState,
            wsConnected: false,
        });
    });


    it('WS_GET_ORDERS', () => {
        const action: TWSOrdersActions = {
            type: WS_GET_ORDERS,
            payload: mockWSOrdersResponse,
        };
        expect(webSocketReducer(undefined, action)).toEqual({
            ...initialState,
            orders: [mockWSOrder],
            total: mockWSOrdersResponse.total,
            totalToday: mockWSOrdersResponse.totalToday,
        })
    });

});