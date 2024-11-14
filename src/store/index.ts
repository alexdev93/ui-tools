import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "../saga/rootSaga"; // Import rootSaga

const placeholderReducer = (state = {}) => state; // Placeholder reducer, replace with actual reducers

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the store without thunk middleware, only saga middleware
const store = configureStore({
  reducer: {
    placeholder: placeholderReducer, // Placeholder reducer, add actual reducers as needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), // Disable thunk middleware and add saga
});

// Run the root saga
sagaMiddleware.run(rootSaga);

export default store;
