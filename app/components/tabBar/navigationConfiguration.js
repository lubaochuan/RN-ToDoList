'use strict'
import { TabNavigator } from 'react-navigation'
// Tab-Navigators
import ListTabNavigation from '../listTab/views/ListTabNavigation'
import MeTabNavigation from '../meTab/views/MeTabNavigation'

const routeConfiguration = {
  ListTabNavigation: { screen: ListTabNavigation },
  MeTabNavigation: { screen: MeTabNavigation }
}

const tabBarConfiguration = {
/*
  //...other configs
tabBarOptions:{
    // tint color is passed to text and icons (if enabled) on the tab bar
    activeTintColor: 'white',
    inactiveTintColor: 'blue',
// background color is for the tab component
    activeBackgroundColor: 'blue',
    inactiveBackgroundColor: 'white',
  }
*/
}

export const TabBar = TabNavigator(routeConfiguration,tabBarConfiguration)

export const tabBarReducer = (state,action) => {
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, index:0 }
  } else {
    return TabBar.router.getStateForAction(action,state)
  }
}
