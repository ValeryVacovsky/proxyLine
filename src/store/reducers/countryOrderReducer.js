const initialState = {
  country: [],
}

export const countryOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNTRY':
      return { country: action.payload }
    default:
      return state
  }
}

export function setCountry(payload) {
  return {
    type: 'SET_COUNTRY',
    payload,
  }
}
