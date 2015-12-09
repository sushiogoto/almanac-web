import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';
import news                   from './news';

export default combineReducers({
  news,
  routing: routeReducer
});
