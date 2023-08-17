import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const recipeconnector_get_api_v1_userrecipe_list = createAsyncThunk("recipeconnector_response_get_Listrecipes/recipeconnector_get_api_v1_userrecipe_list", async payload => {
  const response = await apiService.recipeconnector_get_api_v1_userrecipe_list(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const recipeconnector_response_get_ListrecipesSlice = createSlice({
  name: "recipeconnector_response_get_Listrecipes",
  initialState,
  reducers: {},
  extraReducers: {
    [recipeconnector_get_api_v1_userrecipe_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [recipeconnector_get_api_v1_userrecipe_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [recipeconnector_get_api_v1_userrecipe_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  recipeconnector_get_api_v1_userrecipe_list,
  slice: recipeconnector_response_get_ListrecipesSlice
};