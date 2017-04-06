'use strict';
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native'
import { createStore } from "redux"
import { Provider } from 'react-redux'

// Import the reducer and create a store
import { reducer } from './app/todoListRedux'
const store = createStore(reducer)

import App from './app/components/App'
import ToDoEdit from './app/components/ToDoEdit'

class RN_ToDoList extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{id: 'ToDoList', name: 'Index'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }} />
    );
  }

  renderScene = (route, navigator) => {
    var routeId = route.id

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
