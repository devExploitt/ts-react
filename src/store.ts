/* eslint-disable no-console */
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./features/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
export type AppDispatch = typeof store.dispatch; //Получаем типизацию store.dispatch
