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
import { Provider } from 'react-redux'
import App from './app/components/App'
import ToDoEdit from './app/components/ToDoEdit'
import Login from './app/components/Login'
import { firebaseApp } from './app/firebase/firebaseApp'
import configureStore from './app/store/configureStore'

const store = configureStore()

/*
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import { reducer } from './app/reducers/items'

const logger = createLogger()

// Add the autoRehydrate middleware to your redux store
const store = createStore(
  reducer,
  applyMiddleware(
    logger,
    thunk
  ),
  //autoRehydrate()
)
*/
class RN_ToDoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userLoaded: false,
      initialView: null
    }
    firebaseApp.auth().onAuthStateChanged((user) => {
      let initialView = user ? "ToDoList" : "Login";
      this.setState({
        userLoaded: true,
        initialView: initialView
      })
    });
  }

  render() {
    if (this.state.userLoaded) {
      return (
        <Navigator
          initialRoute={{id: this.state.initialView}}
          renderScene={this.renderScene}
          configureScene={(route) => {
            if (route.sceneConfig) {
              return route.sceneConfig;
            }
            return Navigator.SceneConfigs.FloatFromRight;
          }}/>)
    } else {
      return null
    }
  }

  renderScene = (route, navigator) => {
    var routeId = route.id

    if (routeId === 'Login') {
      return (
        <Login navigator={navigator} />
      );
    }
    if (routeId === 'ToDoList') {
      return (
        <Provider store={store}>
          <App navigator={navigator} />
        </Provider>
      );
    }
    if (routeId === 'ToDoEdit') {
      const {item, id, update} = route.passProps
      return (
        <View style={{flex:1}}>
          <ToDoEdit navigator={navigator} item={item} id={id} onUpdate={update} />
        </View>
      );
    }
  }
}

AppRegistry.registerComponent('RN_ToDoList', () => RN_ToDoList);
