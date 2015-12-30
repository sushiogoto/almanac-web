import React from 'react';
import { NavBar } from 'components/NavBar';
import { AuthGlobals } from 'redux-auth/bootstrap-theme';
/* global styling imported */
import 'styles/core.scss';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    return (
      <div className='page-container'>
        <div className='view-container'>
          <NavBar />
          <AuthGlobals />
          {this.props.children}
        </div>
      </div>
    );
  }
}
