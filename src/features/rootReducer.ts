import { combineReducers } from "redux";
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
  news: newsReducer,
} as const);

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
