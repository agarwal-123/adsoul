import { SET_APPS_LIST } from "../actionTypes/appsActionType";

export const appsListReducer = function (state = [{}], action) {
  switch (action.type) {
    case SET_APPS_LIST:
      return action.payload;

    default:
      return state;
  }
};
