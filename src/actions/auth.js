import { REQUEST_AUTH_COMPLETED, REQUEST_AUTH_ERROR,
         DISMISS_REQUEST_AUTH_ERROR_MODAL, DISMISS_REQUEST_AUTH_SUCCESS_MODAL } from 'constants/auth';

export function dismissRequestAuthSuccessModal () {
  return { type: DISMISS_REQUEST_AUTH_SUCCESS_MODAL };
}
export function dismissRequestAuthErrorModal () {
  return { type: DISMISS_REQUEST_AUTH_ERROR_MODAL };
}

export function requestAuthComplete () {
  return { type: REQUEST_AUTH_COMPLETED };
}
export function requestAuthError (key) {
  return { type: REQUEST_AUTH_ERROR, key };
}
export function requestAuth () {
  return dispatch => {
    const lock = new Auth0Lock('5pWoKMNUngCsQfWM13re2EtlQHODWbbl', 'almanac-news.auth0.com');
    return dispatch({ type: REQUEST_AUTH_COMPLETED, auth: lock });
  };
}
