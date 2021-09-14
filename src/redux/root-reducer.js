// root reducer combines all reducers
import { combineReducers } from "redux";

// reducers
import userReducer from "./user/user.reducer";

export default combineReducers({ user: userReducer });
// we export the root reducer to the store and initialize the store
