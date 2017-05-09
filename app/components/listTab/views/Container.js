// handles business logic with redux managed state

'use strict';
import React, { Component } from 'react'
import {
  View,
  Text,
  Navigator,
  Alert,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
var styles = require('../../../styles')

import { addTodo, updateTodo, deleteTodo } from '../../../actions/items'
import ToDoList from './ToDoList'

const mapStateToProps = (state) => ({
  uid: state.uid,
  items: state.todos
})

class Container extends Component {
  componentWillMount() {
    const {dispatch} = this.props
    console.dir(this.props.items)
  }

  openItem=(rowData, rowID) => {
    this.props.navigation.navigate(
      'Edit',
      {item: rowData, id: rowID, update: this.updateItem});
  }

  updateItem=(item, id) => {
    const {dispatch, uid} = this.props

    if (id) {
      dispatch(updateTodo(uid, item, id))
    }else {
      dispatch(addTodo(uid, item))
    }
    this.props.navigation.goBack(null)
  }

  /*https://facebook.github.io/react-native/docs/alert.html*/
  alertMenu=(rowData, rowID) => {
    Alert.alert(
      'Quick Menu',
      null,
      [
        {text: 'Delete', onPress: ()=>this.deleteItem(rowData.id)},
        {text: 'Edit', onPress: ()=>this.openItem(rowData, rowID)},
        {text: 'Cancel'}
      ],
      { cancelable: false }
    )
  }

  deleteItem=(id) => {
    const {dispatch, uid} = this.props
    dispatch(deleteTodo(uid, id))
  }

  render() {
    const {items, loading, error} = this.props

    if (loading) {
      return (
        <View style={styles.center}>
          <ActivityIndicator animating={true} />
        </View>
      )
    }

    if (error) {
      return (
        <View style={styles.center}>
          <Text>
            Failed to load items!
          </Text>
        </View>
      )
    }

    return (
      <View style={{flex:1}}>
        <ToDoList
          items={this.props.items}
          onOpenItem={this.openItem}
          onUpdateItem={this.updateItem}
          showAlertMenu={this.alertMenu}
        />
      </View>
    );
  }
}

export default connect(mapStateToProps)(Container)
