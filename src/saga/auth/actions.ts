import { LoginCredentials } from "../../components/types";

// actions.js
export const LOGIN_REQUEST = "LOGIN_REQUEST" as const;

export const loginRequest = (formValues: LoginCredentials) => ({
  type: LOGIN_REQUEST,
  payload: formValues,
});
