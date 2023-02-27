const initialState = {
  balance: 0,
  balanceListLogs: [],
  balanceSystems: [],
}

export const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BALANCE_LOGS':
      return { ...state, balanceListLogs: action.payload }
    case 'ADD_BALANCE':
      return { ...state, balance: action.payload }
    default:
      return state
  }
}

export const setBalanceLogs = object => ({
  type: 'ADD_BALANCE_LOGS',
  payload: object,
})

export const setBalance = object => ({
  type: 'ADD_BALANCE',
  payload: object,
})
