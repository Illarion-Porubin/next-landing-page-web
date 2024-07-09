import { IContent } from '@/types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';





export const fetchGetContent = createAsyncThunk<IContent, undefined, { rejectValue: string }>(
  "api/fetchGetContent", async (_, { rejectWithValue }) => {
    const { data } = await axios.get("/api/content");
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    return data;
});

export const fetchUpdateUserContent = createAsyncThunk<IContent,{value: string; idInfo: string}, { rejectValue: string }>(
  "api/fetchUpdateUserContent", async (params, { rejectWithValue }) => {
    const { data } = await axios.put("/api/content", params);
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    return data;
});


export type ContentState = {
  data: IContent | null;
  isLoading: "idle" | "loading" | "loaded" | "error";
  error: string | null;
}

const initialState: ContentState = {
  data: null,
  isLoading: "idle",
  error: null,
}

export const contentSlice = createSlice({
  name: 'mainContent',
  initialState,
  reducers: {
    saveContent: (state, action) => {
      state.data = ({...state.data, user: {...state?.data?.user, [`${action.payload.label}`]: action.payload.value}});
    },
  },
  extraReducers: (builder) => {
    builder
      ///fetchGetContent
      .addCase(fetchGetContent.pending, (state) => {
        state.data = null;
        state.isLoading = "loading";
      })
      .addCase(fetchGetContent.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = "loaded";
      })
      .addCase(fetchGetContent.rejected, (state) => {
        state.data = null;
        state.isLoading = "error";
      })
  },
})

export default contentSlice.reducer;