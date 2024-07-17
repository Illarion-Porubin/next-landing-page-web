import { IAdmin } from "@/types";
import { createSlice, createAsyncThunk, PayloadAction, Action } from "@reduxjs/toolkit";
import axios from "axios";



export const fetchRegister = createAsyncThunk<{ status: number, message: string }, { action: string, email: string, password: string, securePass: string }, { rejectValue: { status: number, message: string } }>(
  "api/fetchRegist", async (params, { rejectWithValue }) => {
    const { data }: { data: { status: number, message: string } } = await axios.post("/api/auth", params);
    if (!data) {
      return rejectWithValue({ status: 401, message: "Registarion error" });
    }
    if (data.status === 200) {
      window.location.replace("/login")
    }
    return data;
  });

export const fetchLogin = createAsyncThunk<IAdmin, { action: string, email: string, password: string }, { rejectValue: string }>(
  "api/fetchLogin", async (params, { rejectWithValue }) => {
    const { data }: { data: IAdmin } = await axios.post("/api/auth", params);
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    if (data.refreshToken && "refreshToken" in data) {
      window.localStorage.setItem('token', data.refreshToken)
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