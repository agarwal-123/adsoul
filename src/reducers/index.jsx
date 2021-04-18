import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
const appReducer = combineReducers({ count: countReducer });

const rootReducer = (state, action) => {
  if (action?.type === "CLEAR_STORE.clear") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
