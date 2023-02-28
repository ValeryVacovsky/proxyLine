import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { useDispatch } from 'react-redux'
import getAllTexts, { getAuthText } from '../../common/getAllTexts'
import { useSelector } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

function AuthIntro({ navigation }) {
  const language = useSelector(res => res.textReducer.languages_get.language)
  const dispatch = useDispatch()

  useEffect(() => {
    // TODO: когда будет логика на Main или Auth переходить, добавить сюда получение текстов main
    getAuthText(dispatch, language).then(() => {
      SplashScreen.hide()
      navigation.navigate('Auth')
    })
    // TODO: обработать случай, если апи не вернул тексты или произошла ошибка
    getAllTexts(dispatch, language)
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
