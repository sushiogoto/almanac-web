import { GET_NEWS_STARTED } from 'constants/news';

export default {
  getNews: () => {
    return (dispatch) => {
      dispatch({type : GET_NEWS_STARTED });

      return fetch('https://github-note-taker.firebaseio.com/', {
        method: 'get'
      }).then( (result) =>
        // alert(JSON.stringify(result));
        result
      );
    };
  }
};
