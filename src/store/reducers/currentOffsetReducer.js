const initialState = {
  proxy: 0,
}

export const currentOffsetReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT':
      return { proxy: action.payload }
    default:
      return state
  }
}

export function setCurrentOffset(payload) {
  return {
    type: 'SET_CURRENT',
    payload,
  }
}
