
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import projectReducer from "./slices/projectSlice";
import authSlice from "./slices/authSlice";


const rootReducer = combineReducers({
    projectReducer,
    authSlice,
});

export const store = configureStore({
    reducer: rootReducer,
})

// Infer the type of makeStore
// export type AppStore = ReturnType<typeof makeStore>

export type AppState = ReturnType<typeof store.getState>
export type AppStore = typeof store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']