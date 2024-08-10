import { AppState } from './store';
export const selectAuthData = (state: AppState) => state.authSlice;
