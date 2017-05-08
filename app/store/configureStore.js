import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from '../reducers'

export default function configureStore(initialState) {
  const logger = createLogger()
  const store = createStore(
    reducers,
    applyMiddleware(
      logger,
      thunk)
  )
  return store
}
