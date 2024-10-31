// store.js
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import { watchLogin } from "../saga";

const placeholderReducer = (state = {}) => state;

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    placeholder: placeholderReducer, // Add placeholder reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchLogin);

export default store;
