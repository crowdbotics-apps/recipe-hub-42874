import axios from "axios"
const recipehubAPI = axios.create({
  baseURL: "https://recipe-hub-42874.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return recipehubAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return recipehubAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return recipehubAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_userrecipe_list(payload) {
  return recipehubAPI.get(`/api/v1/userrecipe/`)
}
function api_v1_userrecipe_create(payload) {
  return recipehubAPI.post(`/api/v1/userrecipe/`, payload)
}
function api_v1_userrecipe_retrieve(payload) {
  return recipehubAPI.get(`/api/v1/userrecipe/${payload.id}/`)
}
function api_v1_userrecipe_update(payload) {
  return recipehubAPI.put(`/api/v1/userrecipe/${payload.id}/`, payload)
}
function api_v1_userrecipe_partial_update(payload) {
  return recipehubAPI.patch(`/api/v1/userrecipe/${payload.id}/`, payload)
}
function api_v1_userrecipe_destroy(payload) {
  return recipehubAPI.delete(`/api/v1/userrecipe/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return recipehubAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return recipehubAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return recipehubAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return recipehubAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return recipehubAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return recipehubAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return recipehubAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return recipehubAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return recipehubAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return recipehubAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return recipehubAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_userrecipe_list,
  api_v1_userrecipe_create,
  api_v1_userrecipe_retrieve,
  api_v1_userrecipe_update,
  api_v1_userrecipe_partial_update,
  api_v1_userrecipe_destroy,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
