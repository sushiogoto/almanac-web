import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';
import newsReducer            from './news';
import loginReducer            from './login';

export default combineReducers({
  news: newsReducer,
  auth: loginReducer,
  routing: routeReducer
});
