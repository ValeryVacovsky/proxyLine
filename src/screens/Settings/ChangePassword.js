import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ScrollView, StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import LayoutMain from '../../componets/LayoutMain'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'

function ChangePassword({ navigation }) {
  const [text, setText] = useState({})
  const balanceText = useSelector(res => res.textReducer.settings)
  useEffect(() => {
    setText(balanceText.payload)
  }, [balanceText])
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <HeaderTintBack style={{ bottom: 1 }} />
          <Text style={{ color: '#CBCBCB', fontWeight: '600', fontSize: 14, lineHeight: 15 }}> Настройки</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  return (
    <LayoutMain style={{ width: '100%' }}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View>
            <Text style={styles.text}>{text?.texts?.t16 && 'Новый пароль'}</Text>
            <View style={styles.dataProxyes}>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                }}>
                <TextInput
                  style={{
                    backgroundColor: '#1E2127',
                    color: 'white',
                    height: 44,
                    minWidth: '90%',
                    marginBottom: 14,
                    borderRadius: 8,
                    borderWidth: 1,
                    paddingLeft: 20,
                    paddingTop: 14,
                    paddingBottom: 14,
                    borderColor: '#333842',
                  }}
                />
              </View>
            </View>
            <Text style={styles.text}>{text?.texts?.t17 && 'Повторите новый пароль'}</Text>
            <View style={styles.dataProxyes}>
              <View
                style={{
                  alignItems: 'center',
                  width: '100%',
                }}>
                <TextInput
                  style={{
                    backgroundColor: '#1E2127',
                    color: 'white',
                    height: 44,
                    minWidth: '90%',
                    borderRadius: 8,
                    borderWidth: 1,
                    paddingLeft: 20,
                    paddingTop: 14,
                    paddingBottom: 14,
                    borderColor: '#333842',
                  }}
                />
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
                onPress={() => navigation.navigate('Settings')}>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 13,
                    color: '#FAC637',
                    paddingBottom: 18,
                    paddingTop: 18,
                  }}>
                  {text?.texts?.t18 && 'Применить'}
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.textSmallh1}>{text?.texts?.t19 && 'Требования к паролю'}</Text>
            <Text style={styles.textSmall}>
              {text?.texts?.t20 && '1. 8 и более символов.'}
              {'\n'}
              {text?.texts?.t21 && '2. Непохож на email.'}
              {'\n'}
              {text?.texts?.t22 && '3. Прописные и строчые буквы.'}
              {'\n'}
              {text?.texts?.t23 && '4. Хотя бы одна цифра.'}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
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
  },
  textSmallh1: {
    color: '#CBCBCB',
    fontSize: 15,
    fontWeight: '600',
    paddingLeft: 20,
    marginTop: 40,
  },
  textSmall: {
    color: '#CBCBCB',
    fontSize: 14,
    fontWeight: '400',
    paddingLeft: 20,
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
  },
})

export default ChangePassword
