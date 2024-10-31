/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, takeLatest } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";
import { login } from "../api/auth";
import { loginUser } from "./actions";
import { localStorageKeys } from "../api/types";
import { LOGIN_REQUEST } from "./actionType";

function* loginSaga(action: ReturnType<typeof loginUser>): SagaIterator {
  try {
    const response: any = yield call(login, action.payload);
    const serializedResponse = JSON.stringify(response);
    window.localStorage.setItem(localStorageKeys.user, serializedResponse);
  } catch (error: any) {
    console.error("LOG IN FAILED :", error);
  }
}

export function* watchLogin(): SagaIterator {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}
