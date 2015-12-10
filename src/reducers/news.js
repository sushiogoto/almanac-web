import { createReducer }     from '../utils';
import { FETCH_NEWS_STARTED, FETCH_NEWS_COMPLETED } from 'constants/news';

// const initialState = [];
// export default createReducer(initialState, {
//   [FETCH_NEWS_STARTED] : (state) => state,
//   [FETCH_NEWS_COMPLETED] : (state) => state
// });

let newsReducer = (state = {
  news: [],
  isFetching: false
}, action = null) => {
  switch (action.type) {
    case 'FETCH_NEWS_STARTED':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'FETCH_NEWS_COMPLETED':
      return Object.assign({}, state, {
        isFetching: false,
        data: action.news
      })
    default:
      return state;
  }
}

export default newsReducer
