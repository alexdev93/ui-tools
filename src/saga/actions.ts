import { LoginCredentials } from "../components/types";
import { LOGIN_REQUEST } from "./actionType";

export const loginUser = (formValues: LoginCredentials) => ({
  type: LOGIN_REQUEST,
  payload: formValues,
});
