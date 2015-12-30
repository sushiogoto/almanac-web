import * as types from 'constants/auth';

const initialState = {
  showSuccessModal: false,
  showErrorModal: false,
  lastRequestUrl: null,
  buttons: {}
};

export default function authReducer(state = initialState, action)
  switch (action.type) {
    case types.REQUEST_FACEBOOK_STARTED:
      return Object.assign({}, state, {
        buttons: {
          [key]: {
            loading: true
          }
        }
      });

    case types.REQUEST_FACEBOOK_COMPLETED:
      return Object.assign({}, state, {
        buttons: {
          [key]: {
            loading: false
          }
        },
        showSuccessModal: true,
        lastRequestUrl: key
      });

    case types.REQUEST_FACEBOOK_ERROR:
      return Object.assign({}, state, {
        buttons: {
          [key]: {
            loading: false
          }
        },
        showErrorModal: true,
        lastRequestUrl: key
      });

    case types.DISMISS_REQUEST_FACEBOOK_SUCCESS_MODAL:
      return Object.assign({}, state, {
        showSuccessModal: false,
        lastRequestUrl: null
      });

    case types.DISMISS_REQUEST_FACEBOOK_ERROR_MODAL:
      return Object.assign({}, state, {
        showErrorModal: false,
        lastRequestUrl: null
      });

  }

});
