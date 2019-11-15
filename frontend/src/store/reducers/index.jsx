import { combineReducers } from "redux";
import users from "./users";
import production from "./production";

export default combineReducers({
  users,
  production
});
