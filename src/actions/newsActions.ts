/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FETCH_NEWS_FAILURE,
  FETCH_NEWS_REQUEST,
  FETCH_NEWS_SUCCESS,
} from "../types/actionType";
import axios from "axios";

// export const fetchNewsRequest = () => {
//   return {
//     type: FETCH_NEWS_REQUEST,
//   };
// };

// export const fetchNewsSuccess = (news: INewsListItem[]) => {
//   return {
//     type: FETCH_NEWS_SUCCESS,
//     payload: news,
//   };
// };

// export const fetchNewsFailure = (error: string) => {
//   return {
//     type: FETCH_NEWS_FAILURE,
//     payload: error,
//   };
// };

// const fetchNews = () => {
//   const dispatch = useDispatch();
//   return async () => {
//     try {
//       dispatch(fetchNewsRequest());
//       const response = await axios.get<INewsListItem[]>(
//         "http://localhost:3000/news",
//       );

//       dispatch(fetchNewsSuccess(response.data));
//     } catch (error: any) {
//       if (axios.isAxiosError(error) && error.response) {
//         dispatch(fetchNewsFailure(error.response.data));
//       } else {
//         dispatch(fetchNewsFailure(error.message));
//       }
//     }
//   };
// };

export const fetchNews = () => {
  return (dispatch: any) => {
    dispatch({ type: FETCH_NEWS_REQUEST });
    axios
      .get("http://localhost:3000/news")
      .then((response) =>
        dispatch({ type: FETCH_NEWS_SUCCESS, payload: response.data }),
      )
      .catch((err) => {
        dispatch({ type: FETCH_NEWS_FAILURE, payload: err.message });
      });
  };
};

export default fetchNews;
