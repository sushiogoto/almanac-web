import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { responsiveStateReducer } from 'redux-responsive';
import newsReducer from 'reducers/news';
import newsPageViewReducer from 'reducers/newsPageView';
import realtimeReducer from 'reducers/realtime';
import authReducer from 'reducers/auth';

export default combineReducers({
  browser: responsiveStateReducer,
  news: newsReducer,
  newsPageView: newsPageViewReducer,
  realtime: realtimeReducer,
  auth: authReducer,
  routing: routeReducer
});
