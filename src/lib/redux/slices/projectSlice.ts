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


export const fetchUpdatePicture = createAsyncThunk<any, { action: string, page: string, sectionId: string, content: string, contentId: string, value: string, oldPubId: string, newPubId: string }, { rejectValue: string }>(
  "api/fetchUpdateProject", async (params, { rejectWithValue }) => {
    const { data } = await axios.put("/api/project", params);
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    return data;
  });

export const fetchAddPicture = createAsyncThunk<any, { page: string, sectionId: string, content: string, value: string, newPubId: string }, { rejectValue: string }>(
  "api/fetchAddPicture", async (params, { rejectWithValue }) => {
    const { data } = await axios.post("/api/project", params);
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    return data;
  });

export const fetchDeletePicture = createAsyncThunk<any, { action: string, page: string, sectionId: string, content: string, contentId: string, oldPubId: string }, { rejectValue: string }>(
  "api/fetchDeletePicture", async (params, { rejectWithValue }) => {
    const { data } = await axios.put("/api/project", params);
    if (!data) {
      return rejectWithValue("Server Error!");
    }
    return data;
  });

/////////text//////////

export const fetchUpdateText = createAsyncThunk<any, { action: string, page: string, sectionId: string, contentId: string, value: string }, { rejectValue: string }>(
  "api/fetchUpdateText", async (params, { rejectWithValue }) => {
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
    addPicture: (state, action) => {
      const { page, sectionId, content, value, newPubId } = action.payload;
      state.data[page][sectionId][content].push({ url: value, public_id: newPubId });
    },
    deletePicture: (state, action) => {
      const { page, sectionId, content, oldPubId } = action.payload;
      state.data[page][sectionId][content] = state.data[page][sectionId][content].filter((item: { url: string, public_id: string }) => item.public_id !== oldPubId);
    },
    updatePicture: (state, action) => {
      const { page, sectionId, content, oldPubId, newPubId, value } = action.payload;
      state.data[page][sectionId][content] = state.data[page][sectionId][content].map((item: { url: string, public_id: string }) => {
        if (item.public_id === oldPubId) {
          return { ...item, url: value, public_id: newPubId }
        } else {
          return item
        }
      });
    },
    updateText: (state, action) => {
      const { page, sectionId, contentId, value } = action.payload;
      state.data[page][sectionId].content = state.data[page][sectionId].content.map((item: {value: string, type: string, explan: string, label: string}, id: number) => {
        return contentId === id ? item.value = value : item
      })
    },
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
      ///fetchUpdatePicture
      .addCase(fetchUpdatePicture.pending, (state) => {
        state.data = null;
        state.isLoading = "loading";
      })
      .addCase(fetchUpdatePicture.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = "loaded";
      })
      .addCase(fetchUpdatePicture.rejected, (state) => {
        state.data = null;
        state.isLoading = "error";
      })
  },
})

export default projectSlice.reducer;