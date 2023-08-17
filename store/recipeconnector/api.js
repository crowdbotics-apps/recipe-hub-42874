import axios from "axios"
import { RECIPE_CONNECTOR_TOKEN } from "react-native-dotenv"
const recipeconnector = axios.create({
  baseURL: "https://recipe-hub-42874.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${RECIPE_CONNECTOR_TOKEN}`
  }
})
function recipeconnector_get_api_v1_userrecipe_list(payload) {
  return recipeconnector.get(`/api/v1/userrecipe/`)
}
function recipeconnector_get_api_v1_userrecipe_id_read(payload) {
  return recipeconnector.get(`/api/v1/userrecipe/${payload.id}/`)
}
export const apiService = {
  recipeconnector_get_api_v1_userrecipe_list,
  recipeconnector_get_api_v1_userrecipe_id_read
}
