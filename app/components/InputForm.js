'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native'
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

export default class InputForm extends Component {
  onUpdte=() => {
    var form = this.refs.form
    //console.log('form: '+form)
    var value = form.getValue()
    //console.log('value: '+JSON.stringify(value))
    if (value) {
      this.props.onUpdate(value, this.props.id)
    }
  }

  render() {
    const {item} = this.props
    return(
      <View style={styles.todo}>
        <Form
          ref="form"
          type={ToDo}
          //onChange={this._onChange}
          options={options}
          value={item}/>
        <TouchableHighlight
          style={[styles.button, styles.saveButton]}
          onPress={this.onUpdte}
          underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
