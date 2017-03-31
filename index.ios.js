'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';
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
    var routeId = route.id;
    if (routeId === 'ToDoList') {
      return (
        <App navigator={navigator} />
      );
    }
    if (routeId === 'ToDoEdit') {
      return (
        <View style={{flex:1}}>
          <ToDoEdit navigator={navigator} item={route.item} />
        </View>
      );
    }
  }
}

AppRegistry.registerComponent('RN_ToDoList', () => RN_ToDoList);
