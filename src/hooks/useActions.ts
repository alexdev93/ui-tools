// hooks/useActions.ts
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../saga/actions";

const useActions = () => {
  const dispatch = useDispatch();

  return {
    ...bindActionCreators(actions, dispatch),
    // ...bindActionCreators(otherActions, dispatch),
  };
};

export default useActions;
