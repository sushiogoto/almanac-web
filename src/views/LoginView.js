import React from 'react';
import RequestTestButton from './partials/RequestTestButton';
import { updateDemoTheme, updateDemoEndpoint } from '../actions/demo-ui';
import { PageHeader, OverlayTrigger, Tooltip, Row, ButtonGroup, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { OAuthSignInButton } from 'redux-auth/bootstrap-theme';

// render
export class LoginView extends React.Component {
  render () {
    console.log('page endpoint', this.props.pageEndpoint);
    let endpointAttr = (this.props.pageEndpoint === 'default')
      ? ''
      : 'endpoint=\"evilUser\"';

    return (
      <OAuthSignInButton
        provider='facebook'
        endpoint={this.props.pageEndpoint}
        secondary={true}
        bsStyle='primary'>
        Facebook
      </OAuthSignInButton>
    );
  }
}

export default connect(({auth, demoUi}) => {
  return ({
    currentUserUid: auth.getIn(["user", "attributes", "provider"]) || "none",
    currentUserProvider: auth.getIn(["user", "attributes", "uid"]) || "none",
    currentUserEndpoint: auth.getIn(["user", "endpointKey"]) || "none",
    theme: demoUi.get("theme"),
    pageEndpoint: demoUi.get("endpoint")
  })
})(Main);
