
export const timerActions = {
  TIMER_START: 'TIMER_START',
  TIMER_STOP: 'TIMER_STOP',
  TIMER_TICK: 'TIMER_TICK',

  start: (offset) => ({
    type: timerActions.TIMER_START,
    payload: { offset }
  }),

  stop: () => ({
    type: timerActions.TIMER_STOP
  }),

  tick: (time) => ({
    type: timerActions.TIMER_TICK,
    payload: { time }
  })
}
