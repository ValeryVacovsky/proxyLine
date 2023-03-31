const initialState = {}

export const selectedProxy = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SELECT_PROXY':
      return action.payload
    default:
      return state
  }
}

export const setSelectProxy = object => ({
  type: 'ADD_SELECT_PROXY',
  payload: object,
})
