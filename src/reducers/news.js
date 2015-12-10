import { createReducer }     from '../utils';
import { FETCH_NEWS_STARTED, FETCH_NEWS_COMPLETED } from 'constants/news';

const initialState = [];
export default createReducer(initialState, {
  [FETCH_NEWS_STARTED] : (state) => state,
  [FETCH_NEWS_COMPLETED] : (state) => state
});
