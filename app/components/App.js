'use strict';
import React, { Component } from 'react'
import {
  View,
  Navigator,
} from 'react-native'
import { actionCreators } from '../todoListRedux'
import ToDoList from './ToDoList'
import Title from './Title'

const mapStateToProps = (state) => ({
  items: state.items,
})

class App extends Component {
  openItem=(rowData, rowID) => {
    this.props.navigator.push({
      id: 'ToDoEdit',
      passProps: {item: rowData, id: rowID, update: this.updateItem}
    });
  }

  updateItem=(item, index) => {
    const {dispatch} = this.props
    dispath(actionCreators.update(item,))
    if (index) {
      dispath(actionCreators.update(item, index))
    }else {
      dispath(actionCreators.add(item))
    }
    this.props.navigator.pop()
  }

  deleteItem(index) {}

  render() {
    const {items} = this.props

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

export default connect(mapStateToProps)(App)
