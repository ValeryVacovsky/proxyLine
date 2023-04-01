export const balanceSystemsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_BALANCE':
      return action.payload
    default:
      return state
  }
}

export function setBalanceSystems(payload) {
  return {
    type: 'SET_BALANCE',
    payload,
  }
}
