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
import { bindActionCreators } from 'redux'
import * as ItemsActions from '../actions/items'

const mapStateToProps = (state) => ({
  loading: state.loading,
  error: state.error,
  items: state.items,
})

class App extends Component {
  componentWillMount() {
    const {dispatch} = this.props
    dispatch(itemActionCreators.fetchTodos())
    //this.props.fetchTodos();
  }

  openItem=(rowData, rowID) => {
    this.props.navigator.push({
      id: 'ToDoEdit',
      passProps: {item: rowData, id: rowID, update: this.updateItem}
    });
  }

  updateItem=(item, index) => {
    const {dispatch} = this.props

    if (index) {
      dispatch(itemActionCreators.updateTodo(item, index))
    }else {
      dispatch(itemActionCreators.addTodo(item))
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
    console.error("dispatch:"+dispatch)
    dispatch(itemActionCreators.deleteTodo(index))
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
      <Navigator
        renderScene={this.renderScene}
        navigator={this.props.navigator}
        navigationBar={
          <Navigator.NavigationBar style={styles.header}
              routeMapper={NavigationBarRouteMapper(this.props)} />
        }
      />
    );
  }

  renderScene=(route, navigator) => {
    return (
      <View style={{flex:1}}>
        <ToDoList
          items={this.props.items}
          onOpenItem={this.openItem}
          onUpdateItem={this.updateItem}
          onDeleteItem={this.alertMenu}
          navigator={navigator} />
      </View>);
  }
}

const NavigationBarRouteMapper = props => ({
  LeftButton(route, navigator, index, navState) {
    return null
  },
  RightButton(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}
          onPress={
            async () => {
              console.log('try to logout')
              try {
                await firebaseApp.auth().signOut();
                navigator.parentNavigator.pop()
              } catch (error) {
                console.log(error);
              }
            }}>
        <Text style={styles.back}>
          {"Log Out"}
        </Text>
      </TouchableOpacity>
    );
  },
  Title(route, navigator, index, navState) {
    return (
      <TouchableOpacity style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.pageTitle}>
          {'TO DOs'}
        </Text>
      </TouchableOpacity>
    );
  }
})

export default connect(mapStateToProps/*, mapDispatchToProps*/)(App)
