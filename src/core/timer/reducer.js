import { timerActions } from './actions'

const initialState = {
  time: 0
}

export function timerReducer (state = initialState, { type, payload }) {
  if (type === timerActions.TIMER_START) {
    return {
      ...state,
      offset: payload.offset
    }
  }

  if (type === timerActions.TIMER_STOP) {
    return {
      ...initialState
    }
  }

  if (type === timerActions.TIMER_TICK) {
    return {
      ...state,
      time: state.time + (payload.time - state.offset),
      offset: payload.time
    }
  }

  return state
}
