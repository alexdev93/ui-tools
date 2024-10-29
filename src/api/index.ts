import axios, { AxiosResponse } from "axios";
import {
  API_ROUTE,
  ApiResponse,
  HeaderObj,
  IAPICallConfig,
  IUserModel,
  localStorageKeys,
} from "./types";
import APIError from "./APIError";
import { baseErrors } from "./ErrorCodes";
import { decodeToken, isJwtTokenExpired } from "../utils";
import { publicRoutes, routeConstants } from "../utils/routes";
import apiRoutes from "./apiRoutes";

const makeCall = async (config: IAPICallConfig): ApiResponse => {
  let accessToken;

  try {
    const fullURL = `${API_ROUTE}/${config.route}`;

    const header: HeaderObj = {};
    const user: IUserModel | undefined = JSON.parse(
      window.localStorage.getItem(localStorageKeys.user) || "{}"
    );

    if (config.isSecureRoute && user) {
      accessToken = user?.accessToken || "";
      // Refresh token if token is expired
      const refreshedAccessToken = await refreshAuth(user);
      if (typeof refreshedAccessToken === "string")
        accessToken = refreshedAccessToken;

      header.Authorization = `Bearer ${accessToken}`;
    }

    const response: AxiosResponse = await axios({
      method: config.method,
      params: config.query,
      data: config.body,
      url: fullURL,
      headers: { ...header },
      responseType: "json",
      onUploadProgress: config.onUploadProgress,
    });
    if (response.statusText === "OK") {
      return response.data;
    } else {
      throw new APIError(response.data?.code, response.data?.message);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.response) {
      const { response } = error;
      if (error instanceof APIError) throw error;
      else throw new APIError(response.data?.code, response.data?.message);
    }
    throw new APIError(baseErrors.NETWORK);
  }
};

export const refreshAuth = async (user: IUserModel) => {
  try {
    const decodedAccessToken = user?.accessToken
      ? decodeToken(user?.accessToken)
      : undefined;
    if (!decodedAccessToken || isJwtTokenExpired(user?.refreshToken ?? "")) {
      localStorage.removeItem(localStorageKeys.user);
      const isPublicRoute = publicRoutes.find((item: unknown) =>
        window.location.hash.includes(item as string)
      );
      if (!isPublicRoute) window.location.replace(`#/${routeConstants.login}`);
      return;
    } else if (isJwtTokenExpired(user?.accessToken ?? "")) {
      const refreshedAccessToken = await refreshAccessToken(
        user?.refreshToken ?? ""
      );

      const updateData = {
        ...user,
        accessToken: refreshedAccessToken ?? "",
      };

      localStorage.setItem(localStorageKeys.user, JSON.stringify(updateData));

      return updateData.accessToken;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    throw {
      messasge: "Couldn't refresh token",
    };
  }
};

const refreshAccessToken = async (refreshToken: string) => {
  try {
    const response: {
      data: {
        data: string;
      };
    } = await axios.post(`${API_ROUTE}${apiRoutes.auth.refreshToken}`, {
      refreshToken,
    });

    if (response) {
      return response.data.data;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error?.response?.data) {
      const { response } = error;
      if (error instanceof APIError) throw error;
      else
        throw {
          message: response.data?.message,
          responseEnum: response?.data?.responseEnum,
        };
    } else {
      throw new APIError(baseErrors.NETWORK);
    }
  }
};

export default makeCall;
