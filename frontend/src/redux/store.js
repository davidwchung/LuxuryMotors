import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { getCarByIdReducer, getAllCarsReducer } from "./reducers/carReducers";
import { cartReducer } from "./reducers/cartReducers";

const allReducers = combineReducers({
  getCars: getAllCarsReducer,
  getCar: getCarByIdReducer,
  cart: cartReducer,
});

const middleware = [thunk];

const cartFromLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartFromLocalStorage,
  },
};

const store = createStore(
  allReducers,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
