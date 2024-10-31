export const API_ROUTE = `${import.meta.env.VITE_API_ROUTE}`;
import { AxiosProgressEvent, Method } from "axios";

export type ApiResponse = Promise<Response>;

// Error Response Type
export interface Response {
  data?: unknown;
  error?: string;
  message?: string;
  path?: string;
  statusCode?: number;
}

export const localStorageKeys = {
  user: "kjdsh",
};

export interface HeaderObj {
  Authorization?: string;
  RFTOKEN?: string;
}

export interface IAPICallConfig {
  route: string;
  method: Method;
  body?: object | FormData;
  query?: object;
  header?: HeaderObj;
  isSecureRoute?: boolean;
  onUploadProgress?: (event: AxiosProgressEvent) => void;
  // cancelToken?: CancelToken;
}

export interface User {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string[];
}

export interface IRoleModel {
  id: string;
  name: string;
}

export interface IUserModel {
  id?: string;
  accessToken?: string;
  refreshToken?: string;
}

export interface ITimeStamp {
  createdAt?: string;
  updatedAt?: string;
}

export enum UserStatusEnums {
  ACTIVE = "active",
  INACTIVE = "inactive",
  PENDING = "pending",
}
