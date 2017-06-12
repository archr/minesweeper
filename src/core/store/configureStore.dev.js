import { applyMiddleware, compose, createStore } from 'redux'
import createLogger from 'redux-logger'
import persistState from 'redux-localstorage'
import reducers from '../reducers'

const logger = createLogger({
  collapsed: true
})

export default function configureStore () {
  const middleware = applyMiddleware(logger)
  const enhancer = compose(middleware, persistState('settings'))
  const store = createStore(reducers, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
