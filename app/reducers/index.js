import { combineReducers } from 'redux'
import todos from './items'
import uid from './user'

const reducers = combineReducers({
  uid,
  todos
})

export default reducers
