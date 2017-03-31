'use strict';
import React, { Component } from 'react'
import {
  View,
  Navigator,
} from 'react-native'
import ToDoList from './ToDoList'
import Title from './Title'

export default class App extends Component {
  state = {
    items: [
      {txt: 'Read a book', complete: false},
      {txt: 'Take a walk', complete: true},
      {txt: 'Do homework', complete: true},
    ]
  }

  openItem=(rowData, rowID) => {
    this.props.navigator.push({
      id: 'ToDoEdit',
      item: rowData,
    });
  }

  updateItem(item, index) {}
  deleteItem(index) {}

  render() {
    const {items} = this.state
    return (
      <View style={{flex:1}}>
        <Title> TO DOs </Title>
        <ToDoList
          items={items}
          onPressItem={this.openItem}
          navigator={navigator} />
      </View>
    );
  }
}
