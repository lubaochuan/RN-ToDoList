'use strict';
import React, { Component } from 'react'
import {
  View,
  Navigator,
  Alert,
} from 'react-native'
import { connect } from 'react-redux'

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

    if (index) {
      dispatch(actionCreators.update(item, index))
    }else {
      dispatch(actionCreators.add(item))
    }
    this.props.navigator.pop()
  }

  /*https://facebook.github.io/react-native/docs/alert.html*/
  alertMenu=(rowData, rowID) => {
    Alert.alert(
      'Quick Menu',
      null,
      [
        {text: 'Delete', onPress: ()=>this.deleteItem(rowID)},
        {text: 'Edit', onPress: ()=>this.openItem(rowData, rowID)},
        {text: 'Cancel'}
      ],
      { cancelable: false }
    )
  }

  deleteItem=(index) => {
    const {dispatch} = this.props
    dispatch(actionCreators.delete(index))
  }

  render() {
    const {items} = this.props

    return (
      <View style={{flex:1}}>
        <Title> TO DOs </Title>
        <ToDoList
          items={items}
          onOpenItem={this.openItem}
          onUpdateItem={this.updateItem}
          onDeleteItem={this.alertMenu}
          navigator={navigator} />
      </View>
    );
  }
}

export default connect(mapStateToProps)(App)
