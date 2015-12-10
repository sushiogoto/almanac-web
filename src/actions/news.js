import { FETCH_NEWS_STARTED, FETCH_NEWS_COMPLETED } from 'constants/news';

export default {
  fetchNews: () => {
    return (dispatch) => {
      dispatch({type : FETCH_NEWS_STARTED });

      return fetch('http://localhost:5000/news')
        .then( result => result.json())
        .then( data => dispatch({type: FETCH_NEWS_COMPLETED, data}))
        .catch(e => console.log(e));
    };
  }
};
