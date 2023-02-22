const initialState = {
  tags: [],
  ips: [],
}

export const ipsTagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TAGS':
      return {
        ...state,
        tags: action.payload,
      }
    case 'SET_IPS':
      return {
        ...state,
        ips: action.payload,
      }
    default:
      return state
  }
}

export function setTags(payload) {
  return {
    type: 'SET_TAGS',
    payload,
  }
}

export function setIps(payload) {
  return {
    type: 'SET_IPS',
    payload,
  }
}
