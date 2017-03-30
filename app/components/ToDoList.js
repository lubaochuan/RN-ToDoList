'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
var styles = require('../styles');

// Row comparison function
// source: http://www.reactnativeexpress.com/listview
const rowHasChanged = (row1, row2) => row1 !== row2

// DataSource template object
const ds = new ListView.DataSource({rowHasChanged})

export default class ToDoList extends Component {
  state = {
    dataSource: ds.cloneWithRows(this.props.items)
  }

  renderItem = (rawData) => {
    return (
      <TouchableHighlight
        style={styles.item}
        onPress={this.gotoEdit.bind(this)}>
        <View sytle={styles.item}>
          <Text style={styles.text}>
            {rawData.txt}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
    <View style={{flex:1}}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderItem}
        style={styles.list}/>
        <TouchableHighlight
          style={[styles.button, styles.newButton]}
          underlayColor='#99d9f4'
          onPress={this.gotoNew.bind(this)}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>
    </View>
    );
  }

  gotoEdit() {
    this.props.navigator.push({
      id: 'ToDoEdit',
      name: 'Edit ToDo',
    });
  }

  gotoNew() {
    this.props.navigator.push({
      id: 'ToDoEdit',
      name: 'New ToDo',
    });
  }
}

module.exports = ToDoList;
