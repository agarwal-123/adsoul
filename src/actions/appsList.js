import { SET_APPS_LIST } from "../actionTypes/appsActionType";


export const getAppsList = () => async(dispatch) => {
  let res=await fetch('https://api.npoint.io/4ca5aaf459a573940672')
  let parsed= await res.json()
  // console.log(parsed)
  dispatch({ type: SET_APPS_LIST, payload:parsed });
};

