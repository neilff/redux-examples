require('../styles/main.scss');

import React from 'react';
import { connect } from 'react-redux';

import Navigator from '../components/navigation/Navigator';
import Layout from '../components/ui/Layout';
import Content from '../components/ui/Content';

import { logout } from '../actions/login';

function mapStateToProps(state) {
  return {
    username: state.session.get('username'),
    isLoggedIn: state.session.get('loggedIn'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: () => dispatch(logout()),
  };
}

const Main = ({ username, isLoggedIn, logoutUser, children }) => {
  return (
    <Layout>
      <Navigator
        logoutUser={ logoutUser }
        username={ username }
        isLoggedIn={ isLoggedIn } />
      <Content>
        { children }
      </Content>
    </Layout>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
