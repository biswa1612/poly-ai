import { combineReducers } from "redux";
import snippets from './snippets';  //post reducer
import auth from './Auth';  // auth reducer
//to combine reducers
export default combineReducers({
   snippets,
   auth
});

//every reducer has its own state so when we combine reducers the name we give in key-value pair is used to access it for ex state.posts