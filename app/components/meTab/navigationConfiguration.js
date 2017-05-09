'use strict'

import { StackNavigator } from 'react-navigation'

// Screens
import Me from './views/Me'

const routeConfiguration = {
  Me: { screen: Me },
//  TabOneScreenTwo: { screen: TabOneScreenTwo },
}

// going to disable the header for now
const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'Me'
}

export const NavigatorMeTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
