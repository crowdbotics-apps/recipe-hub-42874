import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_userrecipe_list = createAsyncThunk(
  "userRecipes/api_v1_userrecipe_list",
  async payload => {
    const response = await apiService.api_v1_userrecipe_list(payload)
    return response.data
  }
)
export const api_v1_userrecipe_create = createAsyncThunk(
  "userRecipes/api_v1_userrecipe_create",
  async payload => {
    const response = await apiService.api_v1_userrecipe_create(payload)
    return response.data
  }
)
export const api_v1_userrecipe_retrieve = createAsyncThunk(
  "userRecipes/api_v1_userrecipe_retrieve",
  async payload => {
    const response = await apiService.api_v1_userrecipe_retrieve(payload)
    return response.data
  }
)
export const api_v1_userrecipe_update = createAsyncThunk(
  "userRecipes/api_v1_userrecipe_update",
  async payload => {
    const response = await apiService.api_v1_userrecipe_update(payload)
    return response.data
  }
)
export const api_v1_userrecipe_partial_update = createAsyncThunk(
  "userRecipes/api_v1_userrecipe_partial_update",
  async payload => {
    const response = await apiService.api_v1_userrecipe_partial_update(payload)
    return response.data
  }
)
export const api_v1_userrecipe_destroy = createAsyncThunk(
  "userRecipes/api_v1_userrecipe_destroy",
  async payload => {
    const response = await apiService.api_v1_userrecipe_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const userRecipesSlice = createSlice({
  name: "userRecipes",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_userrecipe_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_userrecipe_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userrecipe_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userrecipe_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_userrecipe_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userrecipe_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userrecipe_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_userrecipe_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userrecipe_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userrecipe_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_userrecipe_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userrecipe_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userrecipe_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_userrecipe_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userrecipe_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userrecipe_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_userrecipe_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_userrecipe_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_userrecipe_list,
  api_v1_userrecipe_create,
  api_v1_userrecipe_retrieve,
  api_v1_userrecipe_update,
  api_v1_userrecipe_partial_update,
  api_v1_userrecipe_destroy,
  slice: userRecipesSlice
}
