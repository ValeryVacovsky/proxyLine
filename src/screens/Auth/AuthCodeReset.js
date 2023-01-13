import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

import { useForm, Controller } from 'react-hook-form'

import LayoutAuth from '../../componets/LayoutAuth'
import AsyncStorage from '@react-native-async-storage/async-storage'

import LogoIntroSmall from '../../image/Svg/LogoIntroSmall'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import postResetCode from '../../api/postResetCode'

let heightOffScreen = Dimensions.get('window').height

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
  buttonInnerText: {
    color: '#0F1218',
    fontWeight: '600',
    fontSize: 13,
  },
  buttonInnerBack: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginBottom: 20,
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
    fontSize: heightOffScreen > 700 ? 22 : 20,
  },
})

function AuthCodeReset({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({})
  const [commonFormError, setCommonFormError] = useState('')
  const [focusOnCode, setFocusOnCode] = useState(false)
  const onSubmit = async data => {
    const email = await AsyncStorage.getItem('@sign_up_email_reset')
    const res = await postResetCode({ email, ...data })
    if (res?.data?.success === true) {
      navigation.navigate('Auth')
    } else {
      setCommonFormError('Invalid email_code')
    }
    // try {
    //   if (res.data.success === true) {
    //     await AsyncStorage.setItem('@auth_token', resesult.data.token)
    //     console.log('Успех')
    //     navigation.navigate('Auth')
    //   }
    // } catch (error) {
    //   setCommonFormError('Invalid email_code')
    //   // console.log(error)
    // }
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
            На Ваш email будует выслан новый пароль
          </Text>
          {/* {commonFormError && (
            <Text style={{ color: 'white', textAlign: 'center', bottom: 10 }}>Введен не верный код</Text>
          )}
          <Text style={styles.label}>Код подтверждения</Text> */}
          {errors.code ? (
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.label} onPress={() => {}}>
                Код
              </Text>
              <Text style={{ color: 'white', fontSize: 12 }}>Введите код подтверждения</Text>
            </View>
          ) : (
            <View>
              {commonFormError ? (
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.label} onPress={() => {}}>
                    Код
                  </Text>
                  <Text style={{ color: 'white', fontSize: 12 }}>Не верный код подтверждения</Text>
                </View>
              ) : (
                <Text style={styles.label} onPress={() => {}}>
                  Код
                </Text>
              )}
            </View>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
              maxLength: 10,
              minLength: 7,
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
                  borderColor: (focusOnCode && '#fac637') || (errors.code && 'rgb(138,0,0)') || '#333842',
                }}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="code"
          />
          {errors.email && <Text style={{ color: 'white', marginBottom: 10 }}>Введите код</Text>}
        </View>
        <View style={{ marginBottom: 25 }}>
          <TouchableOpacity onPress={handleSubmit(onSubmit)} activeOpacity={0.8}>
            <SuperEllipseMaskView
              radius={{
                topLeft: 12,
                topRight: 12,
                bottomRight: 12,
                bottomLeft: 12,
              }}>
              <View style={styles.buttonInner}>
                <Text style={styles.buttonInnerText}>Отправить</Text>
              </View>
            </SuperEllipseMaskView>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Auth')} activeOpacity={0.8}>
            <View style={styles.buttonInnerBack}>
              <Text style={{ color: 'white', fontWeight: '600', fontSize: 13 }}>Отменить</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutAuth>
  )
}

export default AuthCodeReset
