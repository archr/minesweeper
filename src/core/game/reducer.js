const { gameActions } = require('./actions')

const initialState = {
  rows: 0,
  cols: 0,
  mines: 0
}

export function gameReducer (state = initialState, { type, payload }) {
  if (type === gameActions.GAME_NEW) {
    return {
      ...state,
      rows: payload.level.rows,
      cols: payload.level.cols,
      mines: payload.level.mines
    }
  }

  return state
}
