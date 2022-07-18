import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

let store = null;
const initialState = {};

const configureStore = () => {
  store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk))
  );

  return store;
};

export const dispatch = store && store.dispatch;

export const getConfiguredStore = () => {
  if (store !== null) {
    return store;
  }

  return configureStore();
};
