export const API_ROUTE = `${import.meta.env.VITE_API_ROUTE}`;
import { AxiosProgressEvent, Method } from "axios";

export type ApiResponse = Promise<Response>;

// Error Response Type
export interface Response {
  data: unknown;
  error: string;
  message: string;
  path: string;
  statusCode: number;
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

// User Data Type Example
export interface User {
  id: number;
  username: string;
  email: string;
}

// export interface IUserModelLean {
//   _id: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   profileImage?: string;
//   username?: string;
//   status?: UserStatusEnums;
// }

export interface IRoleModel extends ITimeStamp {
  name: string;
  // description: string;
  // privileges: IPrivilegeModel;
  createdBy: string;
}

export interface IUserModel {
  // emailVerified: boolean;
  // isSystemAdmin: boolean;
  // isDeveloper?: boolean;
  // role: IRoleModel;
  id?: string;
  accessToken?: string;
  refreshToken?: string;
  // suspensionReport?:
  //   | string
  //   | {
  //       reason: string;
  //       _id: string;
  //     };
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
