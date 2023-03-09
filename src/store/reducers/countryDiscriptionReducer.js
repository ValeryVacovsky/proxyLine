const initialState = {
  country: {},
}

export const countryDiscriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNTRY_DISCRIPTION':
      return { country: action.payload }
    default:
      return state
  }
}

export function setCountryDiscription(payload) {
  return {
    type: 'SET_COUNTRY_DISCRIPTION',
    payload,
  }
}
