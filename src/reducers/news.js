import { createReducer }     from '../utils';
import { GET_NEWS_STARTED, GET_NEWS_COMPLETED } from 'constants/news';

const initialState = [];
export default createReducer(initialState, {
  [GET_NEWS_STARTED] : (state) => state,
  [GET_NEWS_COMPLETED] : (state) => state
});
