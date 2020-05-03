import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './../../../components/Dashboard';

class AdminLayoutRoute extends Component {
  render() {
    const { component: YourComponent, ...remainProps } = this.props;
    console.log('remainProps:',remainProps);
    return (
      <Route
        {...remainProps}
        render={routeProps => {
          return (
            <Dashboard >
              <YourComponent  {...routeProps} />
            </Dashboard>
          );
        }}
      />
    );
  }
}

AdminLayoutRoute.propTypes = {
  path: PropTypes.string,
  exact: PropTypes.bool,
  component: PropTypes.func,
  name: PropTypes.string,
};

export default AdminLayoutRoute;