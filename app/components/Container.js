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
var styles = require('../styles')

import { itemActionCreators } from '../actions/items'
import ToDoList from './ToDoList'
import { firebaseApp } from '../firebase/firebaseApp'
import * as ItemsActions from '../actions/items'

const mapStateToProps = (state) => ({
  authorizing: state.authorizing,
  authorized: state.authorized,
  error: state.error,
  items: state.onlineList,
})

class Container extends Component {
  componentWillMount() {
    const {dispatch} = this.props
    //dispatch(itemActionCreators.loadOnlineTodos())
  }

  openItem=(rowData, rowID) => {
    this.props.navigation.navigate(
      'Edit',
      {item: rowData, id: rowID, update: this.updateItem});
  }

  updateItem=(item, id) => {
    const {dispatch} = this.props

    if (id) {
      dispatch(itemActionCreators.updateTodo(item, id))
    }else {
      dispatch(itemActionCreators.addTodo(item))
    }
    this.props.navigation.goBack(null)
  }

  /*https://facebook.github.io/react-native/docs/alert.html*/
  alertMenu=(rowData, rowID) => {
    console.dir("rowData.id: "+rowData.id)
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
    const {dispatch} = this.props
    dispatch(itemActionCreators.deleteTodo(id))
  }

  logout= async () => {
    console.log('try to logout')
    try {
      await firebaseApp.auth().signOut();
      this.props.navigator.push({
        name: "Login"
      })
    } catch (error) {
      console.log(error);
    }
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
