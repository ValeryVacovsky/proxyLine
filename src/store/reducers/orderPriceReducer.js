const initialState = {
  orderPrice: [],
}

export const orderPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ORDER_PRICE':
      return { orderPrice: action.payload }
    default:
      return state
  }
}

export function setPrice(payload) {
  return {
    type: 'SET_ORDER_PRICE',
    payload,
  }
}
