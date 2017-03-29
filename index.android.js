'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

var ToDoList = require('./app/components/ToDoList');
var ToDoEdit = require('./app/components/ToDoEdit');

export default class RN_ToDoList extends Component {
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
  renderScene(route, navigator) {
    var routeId = route.id;
    if (routeId === 'ToDoList') {
      return (
        <View style={{flex:1}}>
          <ToDoList
            navigator={navigator} />
        </View>
      );
    }
    if (routeId === 'ToDoEdit') {
      return (
        <View style={{flex:1}}>
          <ToDoEdit
            navigator={navigator} />
        </View>
      );
    }
  }
}

AppRegistry.registerComponent('RN_ToDoList', () => RN_ToDoList);
