'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Navigator,
  TouchableOpacity,
} from 'react-native'
var styles = require('../styles')
import InputForm from './InputForm'
var t = require('tcomb-form-native')
let Form = t.form.Form

var ToDo = t.struct({txt: t.Str, complete: t.Bool});

var options = {
  fields: {
    txt: {
      label: 'To-Do Item',
      placeholder: 'enter a to do item here',
      autoFocus: true
    }
  }
};

export default class ToDoEdit extends Component {
  constructor() {
    super();
    //this.onUpdate = this.onUpdate.bind(this);
  }

  render() {
    return (
      <Navigator
        renderScene={this.renderScene}
        navigator={this.props.navigator}
        navigationBar={
          <Navigator.NavigationBar style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}
              routeMapper={NavigationBarRouteMapper(this.props)} />
        } />
    )
  }

  renderScene=(route, navigator) => {
    return(
      <InputForm
        item={this.props.item}
        id={this.props.id}
        onUpdate={this.props.onUpdate}/>
    );
  }
}

var NavigationBarRouteMapper = props => ({
  LeftButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={() => navigator.parentNavigator.pop()}>
        <Text style={styles.back}>
          {"<"}
        </Text>
      </TouchableOpacity>
    );
  },
  RightButton(route, navigator, index, navState) {
    return null;
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.pageTitle}>
          {props.item.txt || 'New Item'}
        </Text>
      </TouchableOpacity>
    );
  }
})

module.exports = ToDoEdit;
