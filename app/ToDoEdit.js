'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native'

var t = require('tcomb-form-native');
let Form = t.form.Form;

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

class ToDoEdit extends Component {
  constructor() {
    super();
    //this.onUpdate = this.onUpdate.bind(this);
  }

  onChange() {}
  onUpdate() {}

  render() {
    return (
      <View style={styles.todo}>
        <Form
          ref="form"
          type={ToDo}
          onChange={this.onChange}
          options={options}
          value={[]}/>
        <TouchableHighlight
          style={[styles.button, styles.saveButton]}
          onPress={this.onUpdate}
          underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  todo: {
    marginTop: 100,
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  saveButton: {
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
  },
});

module.exports = ToDoEdit;
