
export const timerActions = {
  TIMER_START: 'TIMER_START',
  TIMER_RESTART: 'TIMER_RESTART',
  TIMER_TICK: 'TIMER_TICK',

  start: (offset) => ({
    type: timerActions.TIMER_START,
    payload: { offset }
  }),

  restart: () => ({
    type: timerActions.TIMER_RESTART
  }),

  tick: (time) => ({
    type: timerActions.TIMER_TICK,
    payload: { time }
  })
}
