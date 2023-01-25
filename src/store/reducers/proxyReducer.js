const initialState = {
  ProxyList: [],
}

export const proxyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROXY':
      return { authStatus: action.payload }
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
