import { AppState } from './store';
export const selectProjectData = (state: AppState) => state.projectReducer;
export const selectAuthData = (state: AppState) => state.authSlice;
