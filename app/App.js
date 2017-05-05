// setup redux store for the app container

'use strict';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './components/Login'
import { Tabs } from './config/router'

const mapStateToProps = (state) => ({
  authorized: state.authorized
})

class App extends Component {
  render() {
    const {authorized} = this.props
    if (authorized) {
      return (<Tabs />)
    }else{
      //dispatch(checkUserExists());
      return (<Login />)
    }
  }
}

export default connect(mapStateToProps)(App)
