import makeCall from ".";
import { LoginCredentials } from "../components/types";
import apiRoutes from "./apiRoutes";
import { ApiResponse, IAPICallConfig } from "./types";

export const login = async (formValues: LoginCredentials): ApiResponse => {
  const config: IAPICallConfig = {
    route: apiRoutes.auth.login,
    method: "POST",
    body: formValues,
    isSecureRoute: false,
  };
  // const { data } = makeCall(config);

  // window.localStorage.setItem(localStorageKeys.user);

  return makeCall(config);
};
