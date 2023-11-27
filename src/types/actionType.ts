// import { INewsListItem } from "./newsType";

// export enum NewsActionType {
//   //константы для Actions
//   NEWS_REQUEST = "NEWS_REQUEST",
//   NEWS_SUCCESS = "NEWS_SUCCESS",
//   NEWS_FAILURE = "NEWS_FAILURE",
// }
// //типы для кейсов состояний
// export interface INewsFetching {
//   type: NewsActionType.NEWS_REQUEST;
//   text?: string;
// }

// export interface INewsFetched {
//   type: NewsActionType.NEWS_SUCCESS;
//   payload: INewsListItem[];
//   text?: string;
// }

// export interface INewsFetchingError {
//   type: NewsActionType.NEWS_FAILURE;
//   text?: string;
// }

// export type NewsAction = INewsFetching | INewsFetched | INewsFetchingError;

export const FETCH_NEWS_REQUEST = "FETCH_NEWS_REQUEST";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";
