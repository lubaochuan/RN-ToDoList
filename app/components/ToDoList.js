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
  renderItem = (rowData, sectionID, rowID) => {
    const {txt, complete} = rowData
    return (
      <TouchableHighlight
        style={styles.item}
        onPress={() => this.props.onPressItem(rowData, rowID)}>
        <View sytle={styles.item}>
          <Text style={[styles.text, complete && styles.completed]}>
            {txt}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const {items} = this.props
    const dataSource = ds.cloneWithRows(items);

    return (
    <View style={{flex:1}}>
      <ListView
        dataSource={dataSource}
        renderRow={this.renderItem}
        style={styles.list}/>
        <TouchableHighlight
          style={[styles.button, styles.newButton]}
          underlayColor='#99d9f4'
          onPress={this.props.onPressItem}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableHighlight>
    </View>
    );
  }
}

module.exports = ToDoList;
