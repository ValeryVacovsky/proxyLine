import React, { useEffect, useState, useCallback, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import LayoutMain from '../../componets/LayoutMain'
import { setAuth } from '../../store/reducers/authReducer'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import BottomSheetForm from '../../componets/BottomSheetForm'
import BottomSheetOutAccount from '../../componets/UI/Settings/BottomSheetOutAccount'
import { clearOrder } from '../../store/reducers/orderReducer'
import { getAuthText } from '../../common/getAllTexts'

function AccountInfo({ navigation }) {
  const [login, setLogin] = useState('')
  const balance = useSelector(data => data.balanceReducer)
  const language = useSelector(res => res.textReducer.languages_get.language)
  const dispatch = useDispatch()
  const text = useSelector(res => res.textReducer.settings.payload)
  useEffect(() => {
    async function getLogin() {
      const loginStorage = await AsyncStorage.getItem('@login')
      setLogin(loginStorage)
    }
    getLogin()
  }, [])
  const handleRightNavigate = () => {
    dispatch(setAuth(false))
    getAuthText(dispatch, language).then(() => {
      navigation.navigate('Auth')
      AsyncStorage.setItem('@role', String('unauth'))
      AsyncStorage.setItem('@Orders', '')

      dispatch(clearOrder(''))
    })
  }
  const sheetRef = useRef(null)
  const snapPoints = useMemo(() => ['30%'], [])
  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index)
  }, [])
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close()
  }, [])
  const handleOpenOut = () => {
    handleSnapPress(0)
  }
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <TouchableOpacity activeOpacity={0.7}>
          <TouchableOpacity style={styles.balanceIcon} activeOpacity={0.8} onPress={handleOpenOut}>
            <Text style={styles.navigationRightText}>{text?.texts?.t6 || 'Выйти'}</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.navigationLeftContainer}>
          <HeaderTintBack style={{ bottom: 1 }} />
          <Text style={styles.navigationLeftText}> {text?.buttons?.b2}</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])

  return (
    <LayoutMain style={{ width: '100%' }}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.text}>{text?.texts?.t7 && 'Данные аккаунта'}</Text>
          <View style={styles.dataProxyes}>
            <View style={styles.mainInfoContainer}>
              <View style={styles.mainInfoContainerItem}>
                <Text style={styles.mainInfoContainerLeftText}>{text?.texts?.t8 || 'Логин'}</Text>
                <Text style={styles.mainInfoContainerRightText}>{login}</Text>
              </View>
              <TouchableOpacity style={styles.mainInfoContainerItem} onPress={() => navigation.navigate('Balance')}>
                <Text style={styles.mainInfoContainerLeftText}>{text?.texts?.t28 || 'Баланс'}</Text>
                <View style={{ marginLeft: 15 }}>
                  <Text style={{ color: 'white', fontWeight: '700', fontSize: 15 }}>$ {balance.balance / 100}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.dataProxyesButton}>
            <TouchableOpacity
              style={styles.buttonContainer}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Resset')}>
              <Text style={styles.buttonText}>{text?.buttons?.b0 || 'Сменить пароль'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
      <BottomSheetForm
        navigation={navigation}
        sheetRef={sheetRef}
        snapPoints={snapPoints}
        handleClosePress={handleClosePress}>
        <BottomSheetOutAccount
          text={text}
          handleRightNavigate={handleRightNavigate}
          handleClosePress={handleClosePress}
        />
      </BottomSheetForm>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    paddingLeft: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  circleGradient: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  visit: {
    margin: 4,
    paddingHorizontal: 6,
    textAlign: 'center',
    backgroundColor: 'white',
    color: '#008f68',
    fontSize: 12,
  },
  dataProxyes: {
    width: '100%',
    alignItems: 'center',
  },
  dataProxyesButton: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  navigationRightText: {
    color: '#FAC637',
    fontWeight: '600',
    fontSize: 15,
  },
  navigationLeftContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  navigationLeftText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
  },
  mainInfoContainer: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#1E2127',
    marginBottom: 1,
  },
  mainInfoContainerItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 17,
    paddingTop: 17,
    alignItems: 'center',
    width: '90%',
  },
  mainInfoContainerLeftText: {
    fontWeight: '600',
    fontSize: 15,
    color: '#CBCBCB',
  },
  mainInfoContainerRightText: {
    fontWeight: '700',
    fontSize: 14,
    color: 'white',
  },
  buttonContainer: {
    backgroundColor: '#1E2127',
    width: '90%',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 20,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 13,
    color: '#FAC637',
    paddingBottom: 18,
    paddingTop: 18,
  },
  headerLeftTintContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftTintText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
  },
})

export default AccountInfo
