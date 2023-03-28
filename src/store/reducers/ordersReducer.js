export const ordersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ORDERS':
      return { ...state, orders: action.payload }
    default:
      return state
  }
}

export const setOrders = object => ({
  type: 'ADD_ORDERS',
  payload: object,
})
