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
import Title from './Title'
var styles = require('../styles')
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

  onChange() {}
  onUpdate() {}

  render() {
    return (
      <Navigator
        renderScene={this.renderScene.bind(this)}
        navigator={this.props.navigator}
        navigationBar={
          <Navigator.NavigationBar style={{backgroundColor: '#246dd5'}}
              routeMapper={NavigationBarRouteMapper(this.props)} />
        } />
    )
  }

  renderScene(route, navigator) {
    return(
      <View style={styles.todo}>
        <Form
          ref="form"
          type={ToDo}
          onChange={this.onChange}
          options={options}
          value={this.props.item}/>
        <TouchableHighlight
          style={[styles.button, styles.saveButton]}
          onPress={this.onUpdate}
          underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
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
