import * as types from 'constants/newsPageView';

const initialState = {
  showReader: true
};

export default function newsPageViewReducer (state = initialState, action) {
  switch (action.type) {
  case types.SHOW_READER:
    return Object.assign({}, state, {
      showReader: true
    });

  case types.HIDE_READER:
    return Object.assign({}, state, {
      showReader: false
    });

  default:
    return state;
  }
}
