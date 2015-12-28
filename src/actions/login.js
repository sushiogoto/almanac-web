import { fetch } from 'redux-auth';

export const REQUEST_LOGIN_START    = 'REQUEST_LOGIN_START';
export const REQUEST_LOGIN_COMPLETE = 'REQUEST_LOGIN_COMPLETE';
export const REQUEST_LOGIN_ERROR    = 'REQUEST_LOGIN_ERROR';
// export const DISMISS_REQUEST_LOGIN_SUCCESS_MODAL    = 'DISMISS_REQUEST_LOGIN_SUCCESS_MODAL';
// export const DISMISS_REQUEST_LOGIN_ERROR_MODAL    = 'DISMISS_REQUEST_LOGIN_ERROR_MODAL';

// export function dismissRequestLoginSuccessModal() {
//   return { type: DISMISS_REQUEST_LOGIN_SUCCESS_MODAL };
// }
// export function dismissRequestLoginErrorModal() {
//   return { type: DISMISS_REQUEST_LOGIN_ERROR_MODAL };
// }
export function requestLoginStart (key) {
  return { type: REQUEST_LOGIN_START, key };
}
export function requestLoginComplete (key) {
  return { type: REQUEST_LOGIN_COMPLETE, key };
}
export function requestLoginError (key) {
  return { type: REQUEST_LOGIN_ERROR, key };
}
export function requestLogin (url, key) {
  return dispatch => {
    dispatch(requestLoginStart(key));

    return fetch(url, {
      credentials: 'include'
    })
      .then(resp => {
        console.log();
        if (resp && resp.statusText === 'OK') {
          dispatch(requestLoginComplete(key));
        } else {
          dispatch(requestLoginError(key));
        }

        return resp.json();
      })
      .then(json => {
        console.log('@-->resp json', json);
        return json;
      })
      .catch(resp => {
        console.log('fail', resp);
        dispatch(requestLoginError(key));
      });
  };
}
