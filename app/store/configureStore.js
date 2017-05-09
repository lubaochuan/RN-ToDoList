import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from '../reducers'

const middleware = () => {
  return applyMiddleware(createLogger())
}

export default createStore(
  reducers,
  middleware(),
)
