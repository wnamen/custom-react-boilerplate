import { createStore, compose, applyMiddleware } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const configureStore = (preloadedState) => {
  const enhancer = compose(
    applyMiddleware(thunk),
    autoRehydrate()
  );

  const store = createStore(
    rootReducer,
    preloadedState,
    enhancer
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

persistStore(configureStore);

export default configureStore
