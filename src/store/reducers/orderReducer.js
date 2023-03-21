export const orderReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      return [...state, action.payload]
    case 'DELETE_ORDER':
      return state.filter(object => object.id !== action.payload)
    case 'CLEAR_ORDER':
      return (state = [])
    case 'UPDATE_ORDER':
      return state.map(object => {
        if (object.id === action.payload.id) {
          return { ...object, data: { ...object.data, ...action.payload } }
        }
        return object
      })
    default:
      return state
  }
}

export const addObject = object => ({
  type: 'ADD_ORDER',
  payload: object,
})

export const clearOrder = id => ({
  type: 'CLEAR_ORDER',
  payload: id,
})

export const deleteObject = id => ({
  type: 'DELETE_ORDER',
  payload: id,
})

export const updateObject = updatedObject => ({
  type: 'UPDATE_ORDER',
  payload: updatedObject,
})
