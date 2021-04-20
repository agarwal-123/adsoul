import { SET_APPS_LIST } from "../actionTypes/appsActionType";


export const getAppsList = () => async(dispatch) => {
  let res=await fetch('https://api.npoint.io/adf6676a313fa01f787d')
  let parsed= await res.json()
  dispatch({ type: SET_APPS_LIST, payload:parsed });
};

