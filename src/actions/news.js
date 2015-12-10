import { FETCH_NEWS_STARTED, FETCH_NEWS_COMPLETED } from 'constants/news';
import fetch from 'isomorphic-fetch'

export default {
  receiveNews: (data) => {
    return {
      type: FETCH_NEWS_COMPLETED,
      news: data.map(child => child.data)
      // news: data.data.children.map(child => child.data)
    };
  },

  fetchNews: (data) => {
    return (dispatch) => {
      dispatch({type : FETCH_NEWS_STARTED });

      return fetch('http://localhost:5000/news')
        .then( result => result.json())
        .then( data => {
          return { type: FETCH_NEWS_COMPLETED,
          news: data.map(child => child)}
        })
        .then( data => dispatch(data))
    };
  }

};
