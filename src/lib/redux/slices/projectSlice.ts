import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';





export const fetchGetProject = createAsyncThunk<any, undefined, { rejectValue: string }>(
  "api/fetchGetProject", async (_, { rejectWithValue }) => {
    const { data } = await axios.get("/api/project");
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    return data;
});

export const fetchUpdateUserProject = createAsyncThunk<any,{value: string; label: string}, { rejectValue: string }>(
  "api/fetchUpdateUserProject", async (params, { rejectWithValue }) => {
    const { data } = await axios.put("/api/project", params);
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    return data;
});


export type ProjectState = {
  data: any | null;
  isLoading: "idle" | "loading" | "loaded" | "error";
  error: string | null;
}

const initialState: ProjectState = {
  data: null,
  isLoading: "idle",
  error: null,
}

export const projectSlice = createSlice({
  name: 'mainContent',
  initialState,
  reducers: {
    // saveContent: (state, action) => {
    //   state.data = ({...state.data, user: {...state?.data?.user, [`${action.payload.label}`]: action.payload.value}});
    // },
  },
  extraReducers: (builder) => {
    builder
      ///fetchGetProject
      .addCase(fetchGetProject.pending, (state) => {
        state.data = null;
        state.isLoading = "loading";
      })
      .addCase(fetchGetProject.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = "loaded";
      })
      .addCase(fetchGetProject.rejected, (state) => {
        state.data = null;
        state.isLoading = "error";
      })
  },
})

export default projectSlice.reducer;