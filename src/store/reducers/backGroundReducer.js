const initialState = {
  backGroundOpacity: false,
}

export const backGroundReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_STATUS':
      return { authStatus: action.payload }
    default:
      return state
  }
}
