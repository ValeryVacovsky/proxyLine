const initialState = {
  proxyList: [],
}

export const proxyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROXY':
      return { proxyList: action.payload }
    default:
      return state
  }
}

export function setProxy(payload) {
  return {
    type: 'SET_PROXY',
    payload,
  }
}
