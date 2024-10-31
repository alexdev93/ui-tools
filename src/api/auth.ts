import makeCall from ".";
import { LoginCredentials } from "../components/types";
import apiRoutes from "./apiRoutes";
import { IAPICallConfig } from "./types";

export const login = async (formValues: LoginCredentials) => {
  const config: IAPICallConfig = {
    route: apiRoutes.auth.login,
    method: "POST",
    body: formValues,
    isSecureRoute: false,
  };

  return makeCall(config);
};
