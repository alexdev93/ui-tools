/* eslint-disable @typescript-eslint/no-explicit-any */
// hooks/useActions.ts
import { useDispatch } from "react-redux";
import { loginUser, signupUser } from "../saga/actions";
// import { bindActionCreators } from "redux";
// import * as actions from "../saga/actions";

const useActions = () => {
  const dispatch = useDispatch();
  return {
    signupUser: (data: any) => dispatch(signupUser(data)),
    loginUser: (data: any) => dispatch(loginUser(data)),
  };
};

export default useActions;
