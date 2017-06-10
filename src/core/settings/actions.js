
export const settingsActions = {
  SETTINGS_SELECTED_LEVEL: 'SETTINGS_SELECTED_LEVEL',

  selectedLevel: (level) => ({
    type: settingsActions.SETTINGS_SELECTED_LEVEL,
    payload: {
      level
    }
  })
}
