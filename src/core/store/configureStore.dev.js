import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import persistState from 'redux-localstorage'
import reducers from '../reducers'
import sagas from '../sagas'

const logger = createLogger({
  collapsed: true
})

export default function configureStore () {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = applyMiddleware(sagaMiddleware, logger)
  const enhancer = compose(middleware, persistState('settings'))
  const store = createStore(reducers, enhancer)
  sagaMiddleware.run(sagas)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
