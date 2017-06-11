
export const settingsActions = {
  SETTINGS_SELECTED_LEVEL: 'SETTINGS_SELECTED_LEVEL',
  SETTINGS_CHANGED_VALUE: 'SETTINGS_CHANGED_VALUE',

  selectedLevel: (level) => ({
    type: settingsActions.SETTINGS_SELECTED_LEVEL,
    payload: {
      level
    }
  }),

  changedValue: (attr, value) => ({
    type: settingsActions.SETTINGS_CHANGED_VALUE,
    payload: {
      attr,
      value
    }
  })
}
