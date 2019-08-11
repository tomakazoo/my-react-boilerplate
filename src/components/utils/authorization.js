import React, { Component } from "react";
import { hasRole } from "./roleHelper";
import { connect } from "react-redux";
import { isEmpty } from "lodash";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import PropTypes from "prop-types";

export function authorize({ ChildComponent, roles = [], redirectPath }) {
  class Authentication extends Component {
    constructor(props) {
      super(props);

      this.checkAuth = this.checkAuth.bind(this);
    }
    userRoles = !isEmpty(this.props.user) ? this.props.user.roles : [];

    componentWillMount() {
      this.checkAuth(this.props);
    }

    componentWillReceiveProps(nextProps) {
      this.checkAuth(nextProps);
    }

    checkAuth = props => {
      const canRedirect =
        redirectPath && redirectPath !== props.location.pathname;
      const shouldRedirect = !hasRole(roles, this.userRoles);
      if (canRedirect && shouldRedirect) {
        this.props.history.push(redirectPath);
      }
    };

    render() {
      return !isEmpty(this.props.user) ? (
        <ChildComponent
          userRoles={this.userRoles}
          redirectPath={redirectPath}
          {...this.props}
        />
      ) : null;
    }
  }
  Authentication.propTypes = {
    user: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  function mapStateToProps(state) {
    return {
      user: state.app.user
    };
  }

  return compose(
    withRouter,
    connect(mapStateToProps)
  )(Authentication);
}
