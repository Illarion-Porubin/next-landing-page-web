
import { AppDispatch, AppState } from "@/lib/redux/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useCustomDispatch = () => useDispatch<AppDispatch>();
export const useCustomSelector: TypedUseSelectorHook<AppState> = useSelector;