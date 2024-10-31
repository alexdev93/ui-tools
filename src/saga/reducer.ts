// // reducer.js
// import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./actions";

// const initialState = {
//   isAuthenticated: null,
//   error: null,
// };

// export const authReducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case LOGIN_SUCCESS:
//       return { ...state, token: action.payload, error: null };
//     case LOGIN_FAILURE:
//       return { ...state, error: action.payload };
//     default:
//       return state;
//   }
// };
