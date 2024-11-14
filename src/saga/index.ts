/* eslint-disable @typescript-eslint/no-explicit-any */
import { call, takeLatest } from "redux-saga/effects";
import type { SagaIterator } from "redux-saga";
import { login, signup } from "../api/auth";
import { loginUser, signupUser } from "./actions";
import { localStorageKeys } from "../api/types";
import { LOGIN_REQUEST, SIGNUP_REQUEST } from "./actionType";

function* loginSaga(action: ReturnType<typeof loginUser>): SagaIterator {
  try {
    const response: any = yield call(login, action.payload);
    const serializedResponse = JSON.stringify(response);
    window.localStorage.setItem(localStorageKeys.user, serializedResponse);
  } catch (error: any) {
    console.error("LOGIN FAILED :", error);
  }
}

function* signupSaga(action: ReturnType<typeof signupUser>): SagaIterator {
  try {
    const response: any = yield call(signup, action.payload);
    console.log(response);
  } catch (error: any) {
    console.error("SIGNUP FAILED :", error);
  }
}

export function* watchLogin(): SagaIterator {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}

export function* watchSignUp(): SagaIterator {
  yield takeLatest(SIGNUP_REQUEST, signupSaga);
}
