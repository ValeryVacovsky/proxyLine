import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import getAllTexts, { getAuthText } from '../../common/getAllTexts'
import { useSelector } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import useCountryDiscription from '../../hooks/useCountryDiscription'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setAuth } from '../../store/reducers/authReducer'

function AuthIntro({ navigation }) {
  useCountryDiscription()
  const language = useSelector(res => res.textReducer.languages_get.language)
  const dispatch = useDispatch()

  useEffect(() => {
    async function comeIn() {
      const role = await AsyncStorage.getItem('@role')
      if (role === 'default') {
        // TODO: обработать случай, если апи не вернул тексты или произошла ошибка
        await getAllTexts(dispatch, language)
        SplashScreen.hide()
        dispatch(setAuth(true))
        navigation.navigate('Main')
      } else {
        await getAuthText(dispatch, language)
        SplashScreen.hide()
        dispatch(setAuth(false))
        navigation.navigate('Auth')
      }
    }
    void comeIn()
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
