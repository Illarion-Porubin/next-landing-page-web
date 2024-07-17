
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from "./slices/authSlice";
import { contentApi } from "./contentApi";


const rootReducer = combineReducers({
    [contentApi.reducerPath]: contentApi.reducer,
    authSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefultMiddlware) => getDefultMiddlware().concat(contentApi.middleware)
})

// Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore>

export type AppState = ReturnType<typeof store.getState>
export type AppStore = typeof store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']