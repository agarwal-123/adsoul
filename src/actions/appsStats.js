import { SET_APPS_STATS } from "../actionTypes/appsActionType";

export const getAppsStats = () => async(dispatch) => {
  let res=await fetch('https://api.npoint.io/d734975d2aee62d197ef')
  let parsed= await res.json()
  // console.log(parsed)
  dispatch({ type: SET_APPS_STATS, payload:parsed });
};