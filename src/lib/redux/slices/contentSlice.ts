import { IContent } from '@/types';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';





export const fetchGetContent = createAsyncThunk<any, undefined, { rejectValue: string }>(
  "api/fetchGetContent", async (_, { rejectWithValue }) => {
    const { data } = await axios.get("/api/content");
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    const content: any = data
    return content;
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