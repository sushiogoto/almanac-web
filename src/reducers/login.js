import * as types from 'actions/login';

const initialState = {
  showSuccessModal: false,
  showErrorModal: false,
  lastRequestUrl: null,
  buttons: {}
};

export default function loginReducer (state = initialState, action, { key }) {
  switch (action.type) {
  case types.REQUEST_TEST_START:
    return Object.assign(state, { key }, {
      buttons: {
        [key]: {
          loading: true
        }
      }
    });

  case types.REQUEST_TEST_COMPLETE:
    return Object.assign(state, { key }, {
      buttons: {
        [key]: {
          loading: false
        }
      },
      showSuccessModal: true,
      lastRequestUrl: key
    });

  case types.REQUEST_TEST_ERROR:
    return Object.assign(state, { key }, {
      buttons: {
        [key]: {
          loading: false
        }
      },
      showErrorModal: true,
      lastRequestUrl: key
    });

  default:
    return state;

  // [A.DISMISS_REQUEST_TEST_SUCCESS_MODAL]: state => state.merge({
  //   showSuccessModal: false,
  //   lastRequestUrl: null
  // }),
  //
  // [A.DISMISS_REQUEST_TEST_ERROR_MODAL]: state => state.merge({
  //   showErrorModal: false,
  //   lastRequestUrl: null
  // })
  }
}
