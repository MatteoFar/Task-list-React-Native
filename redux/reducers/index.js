import { combineReducers } from "redux";
import { recipes } from "./recipes";
import { tasksList } from "./taskList";

export const rootReducers = combineReducers({
  recipes,
  tasksList,
});
