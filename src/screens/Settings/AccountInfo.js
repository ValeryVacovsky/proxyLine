import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import LayoutMain from '../../componets/LayoutMain'
import ViewIcon from '../../image/Svg/ViewIcon'
import ViewIconOff from '../../image/Svg/ViewIconOff'

function AccountInfo({ navigation }) {
  const [passwordVisibiliti, setPasswordVisibiliti] = useState(false)
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <TouchableOpacity activeOpacity={0.7}>
          <TouchableOpacity style={styles.balanceIcon} activeOpacity={0.8} onPress={() => navigation.navigate('Main')}>
            <Text style={{ color: '#FAC637', fontWeight: '600', fontSize: 15 }}>Выйти</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  return (
    <LayoutMain style={{ width: '100%' }}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.text}>Данные аккаунта</Text>
          <View style={styles.dataProxyes}>
            <View
              style={{
                alignItems: 'center',
                width: '100%',
                backgroundColor: '#1E2127',
                marginBottom: 1,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 17,
                  paddingTop: 17,
                  alignItems: 'center',
                  width: '90%',
                }}>
                <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>Логин</Text>
                <Text style={{ fontWeight: '700', fontSize: 14, color: 'white' }}>4829002398</Text>
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                width: '100%',
                backgroundColor: '#1E2127',
                marginBottom: 1,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingBottom: 17,
                  paddingTop: 17,
                  alignItems: 'center',
                  width: '90%',
                }}>
                <Text style={{ fontWeight: '600', fontSize: 15, color: '#CBCBCB' }}>Пароль</Text>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 13,
                      color: 'white',
                      marginRight: 10,
                    }}>
                    {!passwordVisibiliti ? '************' : 12341234123}
                  </Text>
                  <Pressable activeOpacity={0.8} hitSlop={15}>
                    {!passwordVisibiliti ? (
                      <ViewIcon style={{ bottom: 2 }} onPress={() => setPasswordVisibiliti(prev => !prev)} />
                    ) : (
                      <ViewIconOff style={{ bottom: 2 }} onPress={() => setPasswordVisibiliti(prev => !prev)} />
                    )}
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.dataProxyesButton}>
            <TouchableOpacity
              style={{
                backgroundColor: '#1E2127',
                width: '90%',
                alignItems: 'center',
                borderRadius: 12,
                marginTop: 20,
              }}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Resset')}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 13,
                  color: '#FAC637',
                  paddingBottom: 18,
                  paddingTop: 18,
                }}>
                Сменить пароль
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
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
    fontSize: 18,
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
})

export default AccountInfo
