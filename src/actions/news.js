import { GET_NEWS_STARTED, GET_NEWS_COMPLETED, GET_NEWS_FAILED } from 'constants/news';

export default {
  getNews: () => {
    return (dispatch) => {
      dispatch({type : GET_NEWS_STARTED });

      return fetch('http://localhost:5000/news', {
        method: 'get'
      }).then(
        (result) => dispatch({ type: GET_NEWS_COMPLETED, result }),
        (error) => dispatch({ type: GET_NEWS_FAILED, error })
      );
    };
  }
};
