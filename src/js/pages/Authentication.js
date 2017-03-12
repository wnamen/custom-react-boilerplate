import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      console.log(this.props.authenticated);
      if (!this.props.authenticated) {
        browserHistory.push('/login');
      }
    }

    componentWillUpdate(nextProps) {
      console.log(this.props.authenticated);

      if (!nextProps.authenticated) {
        browserHistory.push('/login');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authentication.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
