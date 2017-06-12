import { combineReducers } from 'redux'
import { levelsReducer } from './levels'
import { settingsReducer } from './settings'
import { gameReducer } from './game'
import { timerReducer } from './timer'
import { leaderboardReducer } from './leaderboard'

export default combineReducers({
  levels: levelsReducer,
  settings: settingsReducer,
  game: gameReducer,
  timer: timerReducer,
  leaderboard: leaderboardReducer
})
