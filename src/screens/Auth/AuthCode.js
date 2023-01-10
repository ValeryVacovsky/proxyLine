import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useForm, Controller } from 'react-hook-form'

import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import LayoutAuth from '../../componets/LayoutAuth'

import LogoIntroSmall from '../../image/Svg/LogoIntroSmall'
import postRegister from '../../api/postRegister'

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
    color: 'white',
  },
  mainLogo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 132,
    height: 24,
    marginTop: 25,
  },
  header: {
    flex: 1,
    paddingTop: 20,
    marginTop: 25,
  },
  authForm: {
    flex: 2,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'space-between',
  },
  label: {
    color: 'white',
    marginBottom: 8,
    fontSize: 16,
    lineHeight: 15,
    fontWeight: '500',
  },
  buttonInner: {
    backgroundColor: '#FAC637',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  buttonInnerBack: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  input: {
    backgroundColor: '#1E2127',
    color: 'white',
    height: 44,
    minWidth: '100%',
    marginBottom: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333842',
    paddingLeft: 20,
    paddingTop: 14,
    paddingBottom: 14,
  },
  authLogo: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 22,
  },
})

function AuthCode({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({})
  const [commonFormError, setCommonFormError] = useState('')
  const [focusOnCode, setFocusOnCode] = useState(false)
  const onSubmit = async data => {
    const email = await AsyncStorage.getItem('@sign_up_email')
    console.log(email)
    try {
      const res = await postRegister({ ...data, email })
      await AsyncStorage.setItem('@auth_token', res.data.token)
      navigation.navigate('Auth')
    } catch (error) {
      setCommonFormError('Invalid email_code')
    }
  }
  return (
    <LayoutAuth>
      <View style={styles.header}>
        <LogoIntroSmall width={132} height={24} style={styles.mainLogo} />
      </View>
      <View style={styles.authForm}>
        <View>
          <Text style={styles.authLogo}>Проверочный код</Text>
          <Text style={{ color: '#CBCBCB', textAlign: 'center', paddingBottom: 30 }}>
            На Ваш email будует выслан код подтверждения
          </Text>
          {/* {commonFormError && <Text style={{ color: 'white', textAlign: 'center' }}>{commonFormError}</Text>} */}
          {/* <Text style={styles.label}>Код подтверждения</Text> */}
          {errors.email_code ? (
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.label} onPress={() => {}}>
                Код подтверждения
              </Text>
              <Text style={{ color: 'white', fontSize: 12 }}>Введите код подтверждения</Text>
            </View>
          ) : (
            <View>
              {commonFormError ? (
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.label} onPress={() => {}}>
                    Код подтверждения
                  </Text>
                  <Text style={{ color: 'white', fontSize: 12 }}>Не верный код подтверждения</Text>
                </View>
              ) : (
                <Text style={{ color: 'white', fontSize: 12 }}>Введите проверочный код</Text>
              )}
            </View>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                keyboardType="numeric"
                returnKeyType="done"
                onFocus={() => setFocusOnCode(true)}
                onBlur={() => setFocusOnCode(false)}
                style={{
                  backgroundColor: '#1E2127',
                  color: 'white',
                  height: 44,
                  minWidth: '100%',
                  marginBottom: 14,
                  borderRadius: 8,
                  borderWidth: 1,
                  paddingLeft: 20,
                  paddingTop: 15,
                  paddingBottom: 15,
                  borderColor: (focusOnCode && '#fac637') || (errors.email_code && 'rgb(138,0,0)') || '#333842',
                  marginTop: 8,
                }}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email_code"
          />
        </View>
        <View style={{ marginBottom: 25 }}>
          <TouchableOpacity onPress={handleSubmit(onSubmit)} activeOpacity={0.8}>
            <SuperEllipseMaskView
              radius={{
                topLeft: 12,
                topRight: 12,
                bottomLeft: 12,
                bottomRight: 12,
              }}>
              <View style={styles.buttonInner}>
                <Text style={{ color: '#0F1218', fontWeight: '600', fontSize: 13 }}>Отправить</Text>
              </View>
            </SuperEllipseMaskView>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Auth')} activeOpacity={0.8}>
            <SuperEllipseMaskView
              radius={{
                topLeft: 12,
                topRight: 12,
                bottomLeft: 12,
                bottomRight: 12,
                marginBottom: 20,
              }}>
              <View style={styles.buttonInnerBack}>
                <Text style={{ color: 'white', fontWeight: '600', fontSize: 13 }}>Отменить</Text>
              </View>
            </SuperEllipseMaskView>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutAuth>
  )
}

export default AuthCode
