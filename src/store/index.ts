// store.js
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "../saga/rootSaga"; // Import rootSaga

const placeholderReducer = (state = {}) => state;

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    placeholder: placeholderReducer, // Placeholder reducer, add actual reducers as needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga); // Run rootSaga which includes all watcher sagas

export default store;
