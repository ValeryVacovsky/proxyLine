export const endpointReducer = (state = 'status=active', action) => {
  switch (action.type) {
    case 'ADD_ENDPOINT':
      return action.payload
    default:
      return state
  }
}

export const setEndpoint = object => ({
  type: 'ADD_ENDPOINT',
  payload: object,
})
