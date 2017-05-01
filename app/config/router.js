import React from 'react'
import { StackNavigator } from 'react-navigation'
import App from '../App'
import ToDoEdit from '../components/ToDoEdit'

export const TodosStack = StackNavigator({
  Todos: {
    screen: App,
    navigationOptions: {
      title: 'TO DOs',
    },
  },
  Edit: {
    screen: ToDoEdit,
  },
});
