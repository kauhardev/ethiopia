import { combineReducers, createStore } from "redux";
import { ReducerCreate } from "./reducers/reducerCreate";
import { ReduserBasket } from "./reducers/reducerBasket";

  export const store = createStore(combineReducers({
    create:ReducerCreate,
    basket: ReduserBasket,
  }))