import { combineReducers } from "redux";
import { appsListReducer } from "./appsListReducer";
import { appsStatsReducer } from "./appsStatsReducer";

const appReducer = combineReducers({
  appsList: appsListReducer,
  appsStats: appsStatsReducer,
});

const rootReducer = (state, action) => {
  if (action?.type === "CLEAR_STORE.clear") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
