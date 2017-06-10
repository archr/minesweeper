const { settingsActions } = require('./actions')

const initialState = {
  level: 'Expert'
}

export function settingsReducer (state = initialState, { type, payload }) {
  if (type === settingsActions.SETTINGS_SELECTED_LEVEL) {
    return {
      ...state,
      level: payload.level
    }
  }

  return state
}
