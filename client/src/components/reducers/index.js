import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import usersReducer from "./usersReducer";
import visitsReducer from "./visitsReducer";

// the combineReducers like it says will combine it which is called a root reducer 
// root reducer will have access to all of these states separated by key 
export default combineReducers({
 errorsReducer,
 usersReducer,
 visitsReducer
})