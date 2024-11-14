import { LoginCredentials, SignUpCredentials } from "../components/types";
import { LOGIN_REQUEST, SIGNUP_REQUEST } from "./actionType";

export const loginUser = (formValues: LoginCredentials) => ({
  type: LOGIN_REQUEST,
  payload: formValues,
});

export const signupUser = (formValues: SignUpCredentials) => ({
  type: SIGNUP_REQUEST,
  payload: formValues,
})