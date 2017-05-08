// setup redux store for the app container

'use strict';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './components/Login'
import { Tabs } from './config/router'
import Firebase from './firebase/firebaseApp'
import Database from './firebase/database'
import {
  addTodoSuccess,
  updateTodoSuccess,
  deleteTodoSuccess,
  clearTodos
} from './actions/items'
import { userAuthorized, userSignedOut } from './actions/user'

const mapStateToProps = (state) => ({
  uid: state.uid
})

class App extends Component {
  constructor(props) {
    super(props)
    const {dispatch} = this.props
    Firebase.initialize((user) => {
      console.log("auth state changed, list to database events.")
      if (user) {
        // clear todos from last login in case the app reloads
        dispatch(clearTodos())
        Database.listenToAdd(user.uid, (item) => {
          dispatch(addTodoSuccess(item))
        })
        Database.listenToUpdate(user.uid, (item) => {
          dispatch(updateTodoSuccess(item))
        })
        Database.listenToDelete(user.uid, (id) => {
          dispatch(deleteTodoSuccess(id))
        })
        dispatch(userAuthorized(user.uid))
      }else {
        dispatch(userSignedOut())
      }
    })
  }

  render() {
    const {uid, dispatch} = this.props
    if (uid) {
      return (<Tabs />)
    }else{
      //dispatch(checkUserExists());
      return (<Login />)
    }
  }
}

export default connect(mapStateToProps)(App)
