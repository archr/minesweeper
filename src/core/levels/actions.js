export const levelsActions = {
  LEVELS_CHANGED_CUSTOM_VALUE: 'LEVELS_CHANGED_CUSTOM_VALUE',

  changedCustomValue: (attr, value) => ({
    type: levelsActions.LEVELS_CHANGED_CUSTOM_VALUE,
    payload: {
      attr,
      value
    }
  })
}
