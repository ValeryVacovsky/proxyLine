import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import LayoutAuth from '../../componets/LayoutAuth'
import LogoIntroBig from '../../image/Svg/LogoIntroBig'
import { useDispatch } from 'react-redux'
import getAllTexts from '../../common/getAllTexts'
import { useSelector } from 'react-redux'

function AuthIntro({ navigation }) {
  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        e.preventDefault()
      }),
    [navigation],
  )
  const language = useSelector(res => res.textReducer.languages_get.language)
  const dispatch = useDispatch()
  useEffect(() => {
    try {
      getAllTexts(dispatch, language)
    } catch {
      getAllTexts(dispatch)
    } finally {
      setTimeout(() => navigation.navigate('Auth'), 5000)
    }
  }, [dispatch, language, navigation])

  return (
    <LayoutAuth>
      <View style={styles.header}>
        <LogoIntroBig width={201} height={36} style={styles.mainLogo} onPress={() => navigation.push('Auth')} />
      </View>
    </LayoutAuth>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#0F1218',
  },
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 201,
    height: 36,
  },
})

export default AuthIntro
