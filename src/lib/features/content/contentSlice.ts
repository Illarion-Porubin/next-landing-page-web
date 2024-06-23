import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';




export const fetchGetContetn = createAsyncThunk<any, undefined, { rejectValue: string }>(
  "api/fetchGetContetn", async (_, { rejectWithValue }) => {
    const { data } = await axios.get("/api/content");
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    const content: any = data
    return content;
});


export type ContentState = {
  data: any | null;
  category: string;
  isLoading: "idle" | "loading" | "loaded" | "error";
  error: string | null;
}

const initialState: ContentState = {
  data: "test",
  category: 'Лична информация',
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
      ///fetchGetContetn
      .addCase(fetchGetContetn.pending, (state) => {
        state.data = null;
        state.isLoading = "loading";
      })
      .addCase(fetchGetContetn.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = "loaded";
      })
      .addCase(fetchGetContetn.rejected, (state) => {
        state.data = null;
        state.isLoading = "error";
      })
  },
})

export default contentSlice.reducer;