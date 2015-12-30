import * as types from 'constants/auth';

const initialState = {
  isFetching: false
};

export default function authReducer (state = initialState, action) {
  switch (action.type) {
  case types.REQUEST_AUTH_STARTED:
    return Object.assign({}, state, {
  //     isFetching: true
    });

  case types.REQUEST_AUTH_COMPLETED:
    return Object.assign({}, state, {
      isFetching: false,
      data: action.auth
    });

  case types.REQUEST_AUTH_ERROR:
    return Object.assign({}, state, {
      // TODO: error handling
    });

  case types.DISMISS_REQUEST_AUTH_SUCCESS_MODAL:
    return Object.assign({}, state, {
      showSuccessModal: false,
      lastRequestUrl: null
    });

  case types.DISMISS_REQUEST_AUTH_ERROR_MODAL:
    return Object.assign({}, state, {
      showErrorModal: false,
      lastRequestUrl: null
    });

  default:
    return state;
  }
}
