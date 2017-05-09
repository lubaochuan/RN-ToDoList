import { combineReducers } from 'redux'
import todos from './items'
import uid from './user'

import { NavigatorListTab } from '../components/listTab/navigationConfiguration'
import { NavigatorMeTab } from '../components/meTab/navigationConfiguration'
import { tabBarReducer } from '../components/tabBar/navigationConfiguration'

const reducers = combineReducers({
  uid,
  todos,
  tabBar: tabBarReducer,
  listTab: (state,action) => NavigatorListTab.router.getStateForAction(action,state),
  meTab: (state,action) => NavigatorMeTab.router.getStateForAction(action,state)
})

export default reducers
