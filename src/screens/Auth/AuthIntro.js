import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage'

import getAllTexts, { getAuthText } from '../../common/getAllTexts'

import useCountryDiscription from '../../hooks/useCountryDiscription'

import { setAuth } from '../../store/reducers/authReducer'

function AuthIntro({ navigation }) {
  useCountryDiscription()
  const language = useSelector(res => res.textReducer.languages_get.language)
  const dispatch = useDispatch()

  useEffect(() => {
    async function comeIn() {
      const role = await AsyncStorage.getItem('@role')
      if (role === 'default') {
        try {
          await getAllTexts(dispatch, language)
          SplashScreen.hide()
          dispatch(setAuth(true))
          navigation.navigate('Main')
        } catch (error) {
          console.log(error)
        }
      } else {
        try {
          await getAuthText(dispatch, language)
          SplashScreen.hide()
          dispatch(setAuth(false))
          navigation.navigate('Auth')
        } catch (error) {
          console.log(error)
        }
      }
    }
    void comeIn()
    setTimeout(() => navigation.navigate('Test'), 1000)
  }, [dispatch, language, navigation])

  return <View style={styles.sectionContainer} />
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0F1218',
  },
})

export default AuthIntro
