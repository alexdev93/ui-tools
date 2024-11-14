import { SagaIterator } from "redux-saga";
import { takeLatest } from "redux-saga/effects";
import { LOGIN_REQUEST, SIGNUP_REQUEST } from "./actionType";
import { loginSaga, signupSaga } from ".";

export function* watchLogin(): SagaIterator {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}

export function* watchSignUp(): SagaIterator {
  yield takeLatest(SIGNUP_REQUEST, signupSaga);
}
