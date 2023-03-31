export const cuponReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CUPONES':
      return action.payload
    default:
      return state
  }
}

export const setCupon = object => ({
  type: 'ADD_CUPONES',
  payload: object,
})
