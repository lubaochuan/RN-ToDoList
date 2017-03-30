'use strict';
import React, { Component } from 'react';
import {
  View,
  Navigator,
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoEdit from './ToDoEdit';

export default class App extends Component {
  state = {
    items: [
      {txt: 'Read a book', complete: false},
      {txt: 'Take a walk', complete: true},
      {txt: 'Do homework', complete: true},
    ]
  }

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
      const {items} = this.state
      return (
        <View style={{flex:1}}>
          <ToDoList
            items={items}
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
