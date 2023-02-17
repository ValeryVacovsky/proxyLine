const initialState = {
  filter: {
    ip_type: [],
    status: [],
    ip_version: [],
    typesIP: [],
    id: [],
    auto_renewal: [],
    dateCreate: [],
    dateOver: [],
    ip: [],
    port: [],
    orders: [],
    countries: [],
    tags: [],
    allowedIP: [],
  },
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return { filter: action.payload }
    default:
      return state
  }
}

export function setFilter(payload) {
  return {
    type: 'SET_FILTER',
    payload,
  }
}
