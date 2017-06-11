export const gameActions = {
  GAME_NEW: 'GAME_NEW',

  newGame: (level) => ({
    type: gameActions.GAME_NEW,
    payload: { level }
  })
}
