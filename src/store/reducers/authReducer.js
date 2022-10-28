const initialState = {
  authStatus: false,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_STATUS':
      return { authStatus: action.payload }
    default:
      return state
  }
}
