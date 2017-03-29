'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var ToDoList = require('./app/components/ToDoList');
var ToDoEdit = require('./app/components/ToDoEdit');

export default class RN_ToDoList extends Component {
  render() {
    return (

      <View style={{flex:1}}>
        <ToDoList />
      </View>
/*
      <View style={{flex:1}}>
        <ToDoEdit />
      </View>
*/
    );
  }
}

AppRegistry.registerComponent('RN_ToDoList', () => RN_ToDoList);
