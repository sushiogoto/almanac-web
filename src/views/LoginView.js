import React from 'react';
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ActionCreators from 'actions/auth';
<<<<<<< HEAD
import localStorage from 'redux-localstorage';
=======
>>>>>>> afc6dc187dc636f25748600032d241ac6bef4c2e

const mapStateToProps = (state) => ({
  routerState: state.routing,
  auth: state.auth.data
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch)
});

export class LoginView extends React.Component {

  static propTypes = {
    isFetching: React.PropTypes.bool,
    actions: React.PropTypes.object,
    auth: React.PropTypes.object
  }

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    if (this.props.actions.requestAuth) {
      return this.props.actions.requestAuth();
    }
  }

  componentWillReceiveProps (nextProps) {
    return nextProps;
  }

  render () {
    const { isFetching, auth } = this.props;
    let loginContainerPending;

    if (!isFetching && auth) {
      loginContainerPending = <Button onClick={ () => auth.show() }>Sign In</Button>;
    } else {
      loginContainerPending = <p>Login</p>;
    }
    return (
      // TODO: refactor this chunk using refs
      <div className='login-box'>
        { loginContainerPending }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
