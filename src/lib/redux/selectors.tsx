import { AppState } from './store';
export const selectContentData = (state: AppState) => state.contentReducer;
export const selectAuthData = (state: AppState) => state.authSlice;
