import { IAdmin } from "@/types";
import { createSlice, createAsyncThunk, PayloadAction, Action } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchRegister = createAsyncThunk<{ status: number, message: string }, { email: string, password: string, confPass: string, securePass: string }, { rejectValue: { status: number, message: string } }>(
  "api/fetchRegist", async (params, { rejectWithValue }) => {
    const { data }: { data: { status: number, message: string } } = await axios.post("/api/regist", params);
    if (!data) {
      return rejectWithValue({ status: 401, message: "Registarion error" });
    }
    return data;
  });

export const fetchLogin = createAsyncThunk<IAdmin, { email: string, password: string }, { rejectValue: string }>(
  "api/fetchLogin", async (params, { rejectWithValue }) => {
    const { data }: { data: IAdmin } = await axios.post("/api/login", params);
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    console.log(data);
    if (data.accessToken && "accessToken" in data && data.user.isActivated && data.user.isAdmin) {
        window.localStorage.setItem('token', data.accessToken)
        window.location.replace('/admin/user')
    }
    return data;
  }
);

export type AuthState = {
  data: IAdmin | null;
  isLoading: "idle" | "loading" | "loaded" | "error";
  error: string | null;
}

const initialState: AuthState = {
  data: null,
  isLoading: "idle",
  error: null,
};


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },

  extraReducers: (builder) => {
    builder
      ///fetchLogin
      .addCase(fetchLogin.pending, (state) => {
        state.data = null;
        state.isLoading = "loading";
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = "loaded";
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.data = null;
        state.isLoading = "error";
      })




      ///catch errors
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.type;
        state.isLoading = "error"
      })
  },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;

function isError(action: Action) {
  return action.type.endsWith('rejected');
}