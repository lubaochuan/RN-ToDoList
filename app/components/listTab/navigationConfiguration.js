'use strict'
import { StackNavigator } from 'react-navigation'

// Screens
import Container from './views/Container'
import ToDoEdit from './views/ToDoEdit'

const routeConfiguration = {
  Todos: {
    screen: Container,
    navigationOptions: {
      title: 'TO DOs',
    },
  },
  Edit: {
    screen: ToDoEdit,
  },
}

const stackNavigatorConfiguration = {
  // going to disable the header for now
  //headerMode: 'none',
  initialRouteName: 'Todos'
}

export const NavigatorListTab = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
