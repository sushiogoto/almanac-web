import { fetch } from 'redux-auth';
import { REQUEST_FACEBOOK_STARTED, REQUEST_FACEBOOK_COMPLETED, REQUEST_FACEBOOK_ERROR,
         DISMISS_REQUEST_FACEBOOK_ERROR_MODAL, DISMISS_REQUEST_FACEBOOK_SUCCESS_MODAL } from 'constants/auth';

// export function receiveEvent (testData) {
//   return dispatch => {
//     // console.log('outer loop of receiveEvent');
//     // console.log(testData.react);
//     // let state = store.getState();
//     return dispatch({
//       type: RECEIVE_EVENT_COMPLETE,
//       data: testData
//     });
//   };
// }

export function dismissRequestFacebookSuccessModal () {
  return { type: DISMISS_REQUEST_FACEBOOK_SUCCESS_MODAL };
}
export function dismissRequestFacebookErrorModal () {
  return { type: DISMISS_REQUEST_FACEBOOK_ERROR_MODAL };
}
export function requestFacebookStart (key) {
  return { type: REQUEST_FACEBOOK_STARTED, key };
}
export function requestFacebookComplete (key) {
  return { type: REQUEST_FACEBOOK_COMPLETED, key };
}
export function requestFacebookError (key) {
  return { type: REQUEST_FACEBOOK_ERROR, key };
}
export function requestFacebook (url, key) {
  return dispatch => {
    dispatch(requestFacebookStart(key));

    return fetch(url, {
      credentials: 'include'
    })
      .then(resp => {
        console.log();
        if (resp && resp.statusText === 'OK') {
          dispatch(requestFacebookComplete(key));
        } else {
          dispatch(requestFacebookError(key));
        }

        return resp.json();
      })
      .then(json => {
        console.log('@-->resp json', json);
        return json;
      })
      .catch(resp => {
        console.log('fail', resp);
        dispatch(requestFacebookError(key));
      });
  };
}
