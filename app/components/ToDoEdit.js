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
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.item.txt || 'New Item'}`
  });

  render() {
    const { params } = this.props.navigation.state;
    return(
      <InputForm
        item={params.item}
        id={params.id}
        onUpdate={params.update}/>
    );
  }
}
