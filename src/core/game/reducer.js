import { gameActions } from './actions'
import engine from './engine'

const initialState = {
  rows: 0,
  cols: 0,
  mines: 0,
  spaces: null,
  spacesCleared: 0,
  over: false
}

export function gameReducer (state = initialState, { type, payload }) {
  if (type === gameActions.GAME_NEW) {
    return {
      ...state,
      rows: payload.level.rows,
      cols: payload.level.cols,
      mines: payload.level.mines,
      spacesCleared: 0,
      spaces: engine.create(
        payload.level.rows,
        payload.level.cols,
        payload.level.mines
      ),
      over: false
    }
  }

  if (type === gameActions.GAME_SELECTED_SPACE && !state.over) {
    return {
      ...state,
      ...engine.open(payload.row, payload.col, { ...state })
    }
  }

  return state
}
