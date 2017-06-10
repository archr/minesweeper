const { levelsActions } = require('./actions')

const initialState = [
  { name: 'Beginner', rows: 9, cols: 9, mines: 10 },
  { name: 'Intermediate', rows: 16, cols: 16, mines: 40 },
  { name: 'Expert', rows: 16, cols: 30, mines: 99 },
  { name: 'Custom', rows: 20, cols: 30, mines: 145 }
]

export function levelsReducer (state = initialState, { type, payload }) {
  if (type === levelsActions.LEVELS_CHANGED_CUSTOM_VALUE) {
    return state.map(level => {
      if (level.name !== 'Custom') return level

      return {
        ...level,
        [payload.attr]: payload.value
      }
    })
  }

  return state
}
