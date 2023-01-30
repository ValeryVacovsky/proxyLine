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

export function setBalanceSystems(payload) {
  return {
    type: 'SET_BALANCE',
    payload,
  }
}
