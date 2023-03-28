const initialState = {
  auth: {
    buttons: {},
    text: {},
  },
  main: {
    buttons: {},
    text: {},
  },
  faq: {
    buttons: {},
    text: {},
  },
  general: {
    buttons: {},
    text: {},
  },
  proxy: {
    buttons: {},
    text: {},
  },
  order: {
    buttons: {},
    text: {},
  },
  orders: {
    buttons: {},
    text: {},
  },
  balance: {
    buttons: {},
    text: {},
  },
  myproxies: {
    buttons: {},
    text: {},
  },
  notes: {
    buttons: {},
    text: {},
  },
  proxy_info: {
    buttons: {},
    text: {},
  },
  settings: {
    buttons: {},
    text: {},
  },
  proxy_checker: {
    buttons: {},
    text: {},
  },
  public_ofert: {
    buttons: {},
    text: {},
  },
  privacy_policy: {
    buttons: {},
    text: {},
  },
  languages: {
    text: {},
  },
  languages_get: {
    language: 'ru',
  },
}

export const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_AUTH_TEXT':
      return { ...state, auth: action }
    case 'ADD_MAIN_TEXT':
      return { ...state, main: action }
    case 'ADD_FAQ_TEXT':
      return { ...state, faq: action }
    case 'ADD_GENERAL_TEXT':
      return { ...state, general: action }
    case 'ADD_PROXY_TEXT':
      return { ...state, proxy: action }
    case 'ADD_ORDER_TEXT':
      return { ...state, order: action }
    case 'ADD_ORDERS_TEXT':
      return { ...state, orders: action }
    case 'ADD_BALANCE_TEXT':
      return { ...state, balance: action }
    case 'ADD_MYPROXIES_TEXT':
      return { ...state, myproxies: action }
    case 'ADD_NOTES_TEXT':
      return { ...state, notes: action }
    case 'ADD_PROXYINFO_TEXT':
      return { ...state, proxy_info: action }
    case 'ADD_SETTINGS_TEXT':
      return { ...state, settings: action }
    case 'ADD_PROXY_CHECKER_TEXT':
      return { ...state, proxy_checker: action }
    case 'ADD_PUBLIC_OFERT_TEXT':
      return { ...state, public_ofert: action }
    case 'ADD_PRIVACY_POLICY_TEXT':
      return { ...state, privacy_policy: action }
    case 'ADD_LANGUAGES_TEXT':
      return { ...state, languages: action }
    case 'ADD_LANGUAGE_STATUS_TEXT':
      return { ...state, languages_get: action }
    default:
      return state
  }
}

export const addAuthText = object => ({
  type: 'ADD_AUTH_TEXT',
  payload: object,
})

export const addMainText = object => ({
  type: 'ADD_MAIN_TEXT',
  payload: object,
})

export const addProxyText = object => ({
  type: 'ADD_PROXY_TEXT',
  payload: object,
})

export const addFaqText = object => ({
  type: 'ADD_FAQ_TEXT',
  payload: object,
})

export const addGeneralText = object => ({
  type: 'ADD_GENERAL_TEXT',
  payload: object,
})

export const addOrderText = object => ({
  type: 'ADD_ORDER_TEXT',
  payload: object,
})

export const addOrdersText = object => ({
  type: 'ADD_ORDERS_TEXT',
  payload: object,
})

export const addBalanceText = object => ({
  type: 'ADD_BALANCE_TEXT',
  payload: object,
})

export const addMyproxiesText = object => ({
  type: 'ADD_MYPROXIES_TEXT',
  payload: object,
})

export const addNotesText = object => ({
  type: 'ADD_NOTES_TEXT',
  payload: object,
})

export const addProxyInfoText = object => ({
  type: 'ADD_PROXYINFO_TEXT',
  payload: object,
})

export const addSettingsText = object => ({
  type: 'ADD_SETTINGS_TEXT',
  payload: object,
})

export const addProxyCheckerText = object => ({
  type: 'ADD_PROXY_CHECKER_TEXT',
  payload: object,
})

export const addPrivacyPolicyText = object => ({
  type: 'ADD_PRIVACY_POLICY_TEXT',
  payload: object,
})

export const addPublicOfertText = object => ({
  type: 'ADD_PUBLIC_OFERT_TEXT',
  payload: object,
})

export const addLanguageText = object => ({
  type: 'ADD_LANGUAGES_TEXT',
  payload: object,
})

export const addLanguageStatus = object => ({
  type: 'ADD_LANGUAGE_STATUS_TEXT',
  language: object,
})
