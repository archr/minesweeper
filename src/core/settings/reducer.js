const { settingsActions } = require('./actions')

const initialState = {
  level: 'Expert',
  zoom: 100,
  position: 'Center',
  nightMode: false
}

export function settingsReducer (state = initialState, { type, payload }) {
  if (type === settingsActions.SETTINGS_SELECTED_LEVEL) {
    return {
      ...state,
      level: payload.level
    }
  }

  if (type === settingsActions.SETTINGS_CHANGED_VALUE) {
    return {
      ...state,
      [payload.attr]: payload.value
    }
  }

  return state
}
