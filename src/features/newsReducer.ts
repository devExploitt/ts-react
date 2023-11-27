/* eslint-disable @typescript-eslint/no-explicit-any */
import { Reducer } from "react";
import {
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
} from "../types/actionType";

import { INewsListItem } from "../types/newsType";
interface NewsState {
  news: INewsListItem[];
  loading: string;
}

const initialState: NewsState = {
  news: [],
  loading: "idle",
};

const newsReducer: Reducer<NewsState, any> = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return {
        ...state,
        loading: "loading",
      };
    case FETCH_NEWS_SUCCESS:
      return {
        ...state,
        loading: "idle",
        news: action.payload,
      };
    case FETCH_NEWS_FAILURE:
      return {
        ...state,
        loading: "error",
      };
    default:
      return state;
  }
};

export default newsReducer;
