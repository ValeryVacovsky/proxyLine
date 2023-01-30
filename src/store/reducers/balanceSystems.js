const initialState = {
  BalanceSystems: [],
}

export const BalanceSystems = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_BALANCE':
      return { BalanceSystems: action.payload }
    default:
      return state
  }
}

export function setBalance(payload) {
  return {
    type: 'SET_BALANCE',
    payload,
  }
}
