import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import reducers from '../reducers'
import sagas from '../sagas'

const logger = createLogger({
  collapsed: true
})

export default function configureStore () {
  const sagaMiddleware = createSagaMiddleware()
  let middleware = applyMiddleware(sagaMiddleware, logger)

  const devToolsExtension = window.devToolsExtension
  if (typeof devToolsExtension === 'function') {
    middleware = compose(middleware, devToolsExtension())
  }

  const store = createStore(reducers, middleware)
  sagaMiddleware.run(sagas)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
