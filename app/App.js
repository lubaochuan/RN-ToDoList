// setup redux store for the app container

'use strict';
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  AsyncStorage,
} from 'react-native'
import { Provider } from 'react-redux'
import Container from './components/Container'
import configureStore from './store/configureStore'
import { syncFirebase } from './firebase/firebaseApp'

const store = configureStore()
syncFirebase(store)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container navigation={this.props.navigation} />
      </Provider>
    )
  }
}