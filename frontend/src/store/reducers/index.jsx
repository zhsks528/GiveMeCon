import { combineReducers } from "redux";
import users from "./users";
import production from "./production";
import trend from "./trend";

export default combineReducers({
  users,
  production,
  trend
});
