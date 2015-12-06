import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';
import DevTools     from 'containers/DevToolsWindow';

export function createConstants (...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}

export function createReducer (initialState, fnMap) {
  return (state = initialState, { type, payload }) => {
    const handler = fnMap[type];

    return handler ? handler(state, payload) : state;
  };
}

export function createDevToolsWindow (store) {
  const win = window.open(
    null,
    'redux-devtools', // give it a name so it reuses the same window
    `width=400,height=${window.outerHeight},menubar=no,location=no,resizable=yes,scrollbars=no,status=no`
  );

  // reload in case it's reusing the same window with the old content
  win.location.reload();

  // wait a little bit for it to reload, then render
  setTimeout(() => {
    // Wait for the reload to prevent:
    // "Uncaught Error: Invariant Violation: _registerComponent(...): Target container is not a DOM element."
    win.document.write('<div id="react-devtools-root"></div>');
    win.document.body.style.margin = '0';

    ReactDOM.render(
      <Provider store={store}>
        <DevTools />
      </Provider>
      , win.document.getElementById('react-devtools-root')
    );
  }, 10);
}

// FIXME: Leave below functions commented until usage by TopImage (parallax)

/*
 * Is mobile or tablet?
 *
 * @return {Boolean}
 */
// export function isMobileAndTablet () {
//   window.innerWidth <= 800 && window.innerHeight <= 600
//     ? true
//     : false;
// }

/*
 * Add parallax effect to element
 *
 * @param {Object} DOM element
 * @param {Integer} Animation speed, default: 30
 */
// export function setParallax (elem, speed = 30) {
//   const top = (window.pageYOffset - elem.offsetTop) / speed;
//
//   isMobileAndTablet
//     ? elem.style.backgroundPosition = `0px ${ top }px`
//     : null;
// }
