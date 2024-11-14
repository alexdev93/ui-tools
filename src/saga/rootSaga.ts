// rootSaga.js
import { all } from "redux-saga/effects";
import { watchLogin, watchSignUp } from "./watcher";

export default function* rootSaga() {
  yield all([
    watchLogin(),
    watchSignUp(), // Include all watcher sagas here
  ]);
}
