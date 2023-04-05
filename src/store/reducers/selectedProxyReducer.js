const initialState = {
  access_ips: [],
  auto_renewal: null,
  country_id: 'ru',
  date_end: '2023-11-18T16:16:26.258380+00:00',
  date_start: '2023-02-21T16:16:26.258380+00:00',
  id: 19442,
  internal_ip: null,
  ip: '68.36.66.124',
  ip_type: 2,
  ip_version: 4,
  order_id: 847,
  password: 'rcxhQAKW',
  port_http: 63260,
  port_socks5: 63261,
  suspended_till: null,
  tags: [],
  username: 'x9HaKKVW',
}

export const selectedProxyReducer = (state = initialState, action) => {
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
