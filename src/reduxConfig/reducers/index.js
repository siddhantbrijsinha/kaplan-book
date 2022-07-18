import { combineReducers } from "redux";
import common from "./commonReducer";

const appReducer = combineReducers({
  common,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
