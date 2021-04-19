import { SET_APPS_STATS } from "../actionTypes/appsActionType";

export const appsStatsReducer = function (state = [{}], action) {
  switch (action.type) {
    case SET_APPS_STATS:
      return action.payload;
    default:
      return state;
  }
};
