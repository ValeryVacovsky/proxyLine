import getLanguages from '../api/adminQuery/getLanguages'
import getText from '../api/adminQuery/getText'
import {
  addAuthText,
  addFaqText,
  addGeneralText,
  addMainText,
  addOrderText,
  addOrdersText,
  addProxyText,
  addBalanceText,
  addMyproxiesText,
  addNotesText,
  addProxyInfoText,
  addSettingsText,
  addProxyCheckerText,
  addPublicOfertText,
  addPrivacyPolicyText,
  addLanguageText,
} from '../store/reducers/textReducer'

export async function getAuthText(dispatch, language) {
  const response = await getText('auth', language)
  dispatch(addAuthText(response.data.data))
}

function getAllTexts(dispatch, language) {
  const promises = [
    getText('main', language).then(response => {
      dispatch(addMainText(response.data.data))
    }),
    getText('proxy', language).then(response => {
      dispatch(addProxyText(response.data.data))
    }),
    getText('general', language).then(response => {
      dispatch(addGeneralText(response.data.data))
    }),
    getText('faq', language).then(response => {
      dispatch(addFaqText(response.data.data))
    }),
    getText('order', language).then(response => {
      dispatch(addOrderText(response.data.data))
    }),
    getText('orders', language).then(response => {
      dispatch(addOrdersText(response.data.data))
    }),
    getText('balance', language).then(response => {
      dispatch(addBalanceText(response.data.data))
    }),
    getText('myproxies', language).then(response => {
      dispatch(addMyproxiesText(response.data.data))
    }),
    getText('notes', language).then(response => {
      dispatch(addNotesText(response.data.data))
    }),
    getText('proxy-info', language).then(response => {
      dispatch(addProxyInfoText(response.data.data))
    }),
    getText('settings', language).then(response => {
      dispatch(addSettingsText(response.data.data))
    }),
    getText('proxy-checker', language).then(response => {
      dispatch(addProxyCheckerText(response.data.data))
    }),
    getText('public-ofert', language).then(response => {
      dispatch(addPublicOfertText(response.data.data))
    }),
    getText('privacy-policy', language).then(response => {
      dispatch(addPrivacyPolicyText(response.data.data))
    }),
    getLanguages('languages').then(response => {
      dispatch(addLanguageText(response.data.data))
    }),
  ]

  return Promise.allSettled(promises)
}

export default getAllTexts
