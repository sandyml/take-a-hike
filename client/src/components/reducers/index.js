import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import usersReducer from "./usersReducer";
import visitsReducer from "./visitsReducer";
import trailheadsReducer from "./trailheadsReducer";

// the combineReducers like it says will combine it which is called a rootReducer 
// rootReducer will have access to all of these states separated by key 
export default combineReducers({
 errorsReducer,
 usersReducer,
 visitsReducer,
 trailheadsReducer
})

// TODO: Create folders for these two models tentative 
   // [] hikesReducer