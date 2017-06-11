export const gameActions = {
  GAME_NEW: 'GAME_NEW',
  GAME_SELECTED_SPACE: 'GAME_SELECTED_SPACE',
  GAME_FLAGGED_SPACE: 'GAME_FLAGGED_SPACE',

  newGame: level => ({
    type: gameActions.GAME_NEW,
    payload: { level }
  }),

  selectedSpace: (row, col) => ({
    type: gameActions.GAME_SELECTED_SPACE,
    payload: { row, col }
  }),

  flaggedSpace: (row, col) => ({
    type: gameActions.GAME_FLAGGED_SPACE,
    payload: { row, col }
  })
}
