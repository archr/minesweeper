import { combineReducers } from 'redux'
import { levelsReducer } from './levels'
import { settingsReducer } from './settings'

export default combineReducers({
  levels: levelsReducer,
  settings: settingsReducer
})
