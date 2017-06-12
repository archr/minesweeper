import { createStore } from 'redux'
import persistState from 'redux-localstorage'
import reducers from '../reducers'

export default function configureStore () {
  const store = createStore(reducers, persistState('settings'))

  return store
}
