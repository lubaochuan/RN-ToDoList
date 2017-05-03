// setup redux store for the app container

'use strict';
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  AsyncStorage,
} from 'react-native'
import { Provider, connect } from 'react-redux'
import Login from './components/Login'
import configureStore from './store/configureStore'
import { syncFirebase } from './firebase/firebaseApp'
import { Tabs } from './config/router';

const store = configureStore()
syncFirebase(store)

const LoginOrHome = connect(
  (state) => ({
    authorized: state.authorized
  })
)(({ authorized, dispatch }) => {
  if (authorized) {
    return (<Tabs />);
  }else{
    //dispatch(checkUserExists());
    return (<Login />);
  }
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <LoginOrHome />
      </Provider>
    );
  }
}

export default App;
