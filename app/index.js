// setup redux store for the app container

'use strict';
import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import App from './App'
import configureStore from './store/configureStore'

const store = configureStore()

console.disableYellowBox = true;

class RN_ToDoList extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default RN_ToDoList;
