import { createReducer }     from '../utils';
import { GET_NEWS } from 'constants/news';

const initialState = [];
export default createReducer(initialState, {
  [GET_NEWS] : (state) =>
      console.log('showing state change ', state)
});
