const initialState = {
  filter: {
    ip_type: [],
    status: [],
    ip_version: [],
    typesIP: [],
    id: [],
    auto_renewal: [],
    // start_date_from: [],
    // start_date_to: [],
    dateCreate: [],
    dateOver: [],
    ip: [],
    port: [],
    orders: [],
    countries: [],
    countries_exclude: [],
    tags: [],
    tags_exclude: [],
    access_ips: [],
    access_ips_exclude: [],
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
