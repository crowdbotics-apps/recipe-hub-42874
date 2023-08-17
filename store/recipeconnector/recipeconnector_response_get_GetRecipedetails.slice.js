import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const recipeconnector_get_api_v1_userrecipe_id_read = createAsyncThunk("recipeconnector_response_get_GetRecipedetails/recipeconnector_get_api_v1_userrecipe_id_read", async payload => {
  const response = await apiService.recipeconnector_get_api_v1_userrecipe_id_read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const recipeconnector_response_get_GetRecipedetailsSlice = createSlice({
  name: "recipeconnector_response_get_GetRecipedetails",
  initialState,
  reducers: {},
  extraReducers: {
    [recipeconnector_get_api_v1_userrecipe_id_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [recipeconnector_get_api_v1_userrecipe_id_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [recipeconnector_get_api_v1_userrecipe_id_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  recipeconnector_get_api_v1_userrecipe_id_read,
  slice: recipeconnector_response_get_GetRecipedetailsSlice
};