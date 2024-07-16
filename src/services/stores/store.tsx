
import { WS_CONNECTION_CLOSED, WS_CONNECTION_ERROR, WS_CONNECTION_START, WS_CONNECTION_SUCCESS, WS_GET_ORDERS, WS_SEND_ORDER } from "../actions/websocket-action";
import { webSocketMiddleware } from "../middleware/websocket-middleware";
import { rootReducer } from "../reducers/reducers";
import { configureStore } from "@reduxjs/toolkit";

const wsActions = {
    wsInit: WS_CONNECTION_START,
    wsSendOrder: WS_SEND_ORDER,
    onOpen: WS_CONNECTION_SUCCESS,
    onClose: WS_CONNECTION_CLOSED,
    onError: WS_CONNECTION_ERROR,
    onMessage: WS_GET_ORDERS
  };

export const store = configureStore(
    {
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(webSocketMiddleware(wsActions))
    }
)


// Get the type of our store variable
export type AppStore = typeof store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch']




//type RootState = ReturnType<typeof store.getState>;