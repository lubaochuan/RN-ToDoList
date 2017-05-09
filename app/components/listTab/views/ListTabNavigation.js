'use strict'
import React, { Component } from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorListTab } from '../navigationConfiguration'
import { connect } from 'react-redux'
import { Icon } from 'react-native-elements'

const mapStateToProps = (state) => {
 return {
  navigationState: state.listTab
  }
}

class ListTabNavigation extends Component {
  static navigationOptions = {
    tabBarLabel: 'TODOs',
    tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
  }

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorListTab
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps)(ListTabNavigation)
