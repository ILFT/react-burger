
import { rootReducer } from "../reducers/reducers";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore(
    {
        reducer: rootReducer
    }
)


//type RootState = ReturnType<typeof store.getState>;