import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import LayoutAuth from '../../componets/LayoutAuth'

import LogoIntroSmall from '../../image/Svg/LogoIntroSmall'
import postRegisterCode from '../../api/postRegisterCode'

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

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
  authUnderLogo: {
    color: '#CBCBCB',
    textAlign: 'center',
    paddingBottom: 30,
  },
  auth: {
    color: 'white',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  haveAcc: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 24,
  },
  publickOfferText: {
    color: '#CBCBCB',
    textAlign: 'center',
    fontSize: 12,
  },
  publickOfferTextUnderline: {
    color: '#CBCBCB',
    textDecorationLine: 'underline',
    fontSize: 12,
  },
})

function AuthRegister({ navigation }) {
  const [commonFormError, setCommonFormError] = useState('')
  const [focusOnEmail, setFocusOnEmail] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const onSubmit = async data => {
    const res = await postRegisterCode(data)
    if (res?.data?.success === true) {
      await AsyncStorage.setItem('@sign_up_email', data.email)
      navigation.navigate('Code')
    } else {
      setCommonFormError('Invalid email or password')
      console.log(123)
    }
  }
  // () => navigation.navigate('Intro')
  return (
    <LayoutAuth>
      <View style={styles.header}>
        <LogoIntroSmall width={132} height={24} style={styles.mainLogo} />
      </View>
      <View style={styles.authForm}>
        <View>
          <Text style={styles.authLogo} onPress={() => navigation.navigate('Code')}>
            Регистрация
          </Text>
          <Text style={styles.authUnderLogo}>Пароль будет отправлен на Ваш email</Text>
          {commonFormError && <Text style={{ color: 'white', textAlign: 'center' }}>{commonFormError}</Text>}
          {errors.email ? (
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.label}>Email</Text>
              <Text style={{ color: 'white', fontSize: 12 }}>Введите логин</Text>
            </View>
          ) : (
            <Text style={styles.label}>Email</Text>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: {
                value: EMAIL_REGEX,
                message: 'email error',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                onFocus={() => setFocusOnEmail(true)}
                onBlur={() => setFocusOnEmail(false)}
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
                  borderColor: (focusOnEmail && '#fac637') || (errors.email && 'rgb(138,0,0)') || '#333842',
                }}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />
          <Text style={styles.publickOfferText}>
            Регистрируясь вы принимаете
            <Text onPress={() => {}} style={styles.publickOfferTextUnderline}>
              {' '}
              публичную оферту&#160;
            </Text>
            <Text> и </Text>
            <Text onPress={() => navigation.navigate('Agrement')} style={styles.publickOfferTextUnderline}>
              политику конфиденциальности
            </Text>
          </Text>
        </View>
        <View style={{ marginBottom: 25 }}>
          <Text style={styles.haveAcc}>
            {' '}
            Уже есть аккаунт? &#160;
            <Text style={styles.auth} onPress={() => navigation.navigate('Auth')}>
              Авторизация
            </Text>
          </Text>
          <TouchableOpacity onPress={handleSubmit(onSubmit)} activeOpacity={0.8}>
            <SuperEllipseMaskView
              radius={{
                topLeft: 12,
                topRight: 12,
                bottomLeft: 12,
                bottomRight: 12,
                marginBottom: 20,
              }}>
              <View style={styles.buttonInner}>
                <Text style={styles.buttonInnerText}>Зарегистрироваться</Text>
              </View>
            </SuperEllipseMaskView>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutAuth>
  )
}

export default AuthRegister
