import { combineReducers } from 'redux'
import { levelsReducer } from './levels'
import { settingsReducer } from './settings'
import { gameReducer } from './game'
import { timerReducer } from './timer'

export default combineReducers({
  levels: levelsReducer,
  settings: settingsReducer,
  game: gameReducer,
  timer: timerReducer
})
