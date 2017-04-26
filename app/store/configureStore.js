import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { reducer } from '../reducers/items'

export default function configureStore() {
  const logger = createLogger()
  const store = createStore(
    reducer,
    applyMiddleware(
      logger,
      thunk)
  )
/*
  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }
*/
  return store
}
