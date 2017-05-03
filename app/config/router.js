import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { Icon } from 'react-native-elements';
import Container from '../components/Container'
import ToDoEdit from '../components/ToDoEdit'
import Me from '../components/Me';

export const TodosStack = StackNavigator({
  Todos: {
    screen: Container,
    navigationOptions: {
      title: 'TO DOs',
    },
  },
  Edit: {
    screen: ToDoEdit,
  },
});

export const Tabs = TabNavigator({
  List: {
    screen: TodosStack,
    navigationOptions: {
      tabBarLabel: 'TODOs',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
});
