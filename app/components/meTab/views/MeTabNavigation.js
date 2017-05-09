'use strict'
import React, { Component } from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorMeTab } from '../navigationConfiguration'
import { connect } from 'react-redux'
import { Icon } from 'react-native-elements';

const mapStateToProps = (state) => {
  return {
    navigationState: state.meTab
  }
}

class MeTabNavigation extends Component {
  static navigationOptions = {
    tabBarLabel: 'Me',
    tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
  }

  render(){
    const { navigationState, dispatch } = this.props
    return (
      <NavigatorMeTab
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

export default connect(mapStateToProps)(MeTabNavigation)
