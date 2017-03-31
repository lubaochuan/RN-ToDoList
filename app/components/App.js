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
      passProps: {item: rowData, id: rowID, update: this.updateItem}
    });
  }

  updateItem=(item, index) => {
    const {items} = this.state
    //console.log("updated item:"+JSON.stringify(item))
    //console.log("item index:"+index)
    if (index) {
      items[index] = item
    }else {
      items.push(item)
    }
    //console.log("items in new state:"+JSON.stringify(items))
    this.setState({items: items})

    this.props.navigator.pop()
  }

  deleteItem(index) {}

  render() {
    const {items} = this.state

    return (
      <View style={{flex:1}}>
        <Title> TO DOs </Title>
        <ToDoList
          items={items}
          onPressItem={this.openItem}
          onUpdateItem={this.updateItem}
          navigator={navigator} />
      </View>
    );
  }
}
