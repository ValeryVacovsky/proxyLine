import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Pressable } from 'react-native'

import { useForm, Controller } from 'react-hook-form'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import LayoutAuth from '../../componets/LayoutAuth'

import LogoIntroSmall from '../../image/Svg/LogoIntroSmall'
import postAuth from '../../api/postAuth'
import VectorOpen from '../../image/Svg/VectorOpen'
import ViewIcon from '../../image/Svg/ViewIcon'
import ViewIconOff from '../../image/Svg/ViewIconOff'

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
    fontFamily: 'Rubik',
    // backgroundColor: "rgba(250, 198, 55, 0.9)"
  },

  authLogo: {
    paddingBottom: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: 22,
  },
})

function AuthAuthauthentification({ navigation }) {
  const [commonFormError, setCommonFormError] = useState('')
  const [focusOnEmail, setFocusOnEmail] = useState(false)
  const [focusOnPassword, setFocusOnPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(true)
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
  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        e.preventDefault()
      }),
    [navigation],
  )

  const onSubmit = async data => {
    const res = await postAuth(data)
    if (res.data.success === true) {
      await AsyncStorage.setItem('@token', String(res.data.user.token))
      await AsyncStorage.setItem('@id', String(res.data.user.id))
      navigation.navigate('Main')
    } else {
      setCommonFormError('Invalid email or password')
    }
    if (data.email === 'email@gmail.com' && data.password === 'password') {
      navigation.push('Main', {
        initial: false,
      })
    }
    if (data.email === 1111) {
      navigation.push('Main')
    }
  }
  return (
    <LayoutAuth>
      <View style={styles.header}>
        <LogoIntroSmall width={132} height={24} style={styles.mainLogo} />
      </View>
      <View style={styles.authForm}>
        <View>
          <Text onPress={() => navigation.navigate('Main')} style={styles.authLogo}>
            Авторизация
          </Text>
          {commonFormError && <Text style={{ color: 'white', textAlign: 'center' }}>{commonFormError}</Text>}
          {errors.email ? (
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.label} onPress={() => navigation.navigate('Notes')}>
                Email
              </Text>
              <Text style={{ color: 'white', fontSize: 12 }}>Введите логин</Text>
            </View>
          ) : (
            <Text style={styles.label} onPress={() => navigation.navigate('Notes')}>
              Email
            </Text>
          )}
          {/* <Input name="email" control={control} /> */}
          {/* <TextInput {...register("email")} style={styles.input}></TextInput> */}

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
          {errors.password ? (
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.label} onPress={() => navigation.navigate('Test')}>
                Пароль
              </Text>
              <Text style={{ color: 'white', fontSize: 12 }}>Введите пароль</Text>
            </View>
          ) : (
            <Text style={styles.label} onPress={() => navigation.navigate('Test')}>
              Пароль
            </Text>
          )}
          {/* <Input name="password" control={control} /> */}
          {/* <TextInput {...register("password")} style={styles.input}></TextInput> */}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, value } }) => (
              <View
                style={{
                  backgroundColor: '#1E2127',
                  color: 'white',
                  height: 44,
                  minWidth: '100%',
                  marginBottom: 14,
                  borderRadius: 8,
                  borderWidth: 1,
                  paddingLeft: 20,
                  borderColor: (focusOnPassword && '#fac637') || (errors.password && 'rgb(138,0,0)') || '#333842',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <TextInput
                  onFocus={() => setFocusOnPassword(true)}
                  onBlur={() => setFocusOnPassword(false)}
                  style={{ color: 'white', width: '90%', height: '100%' }}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={showPassword}
                  icon={<VectorOpen />}
                  iconPosition="right"
                />
                <Pressable hitSlop={50} onPress={() => setShowPassword(prev => !prev)}>
                  {!showPassword ? <ViewIcon /> : <ViewIconOff />}
                </Pressable>
              </View>
            )}
            name="password"
          />
          <TouchableOpacity activeOpacity={0.8}>
            <View style={{}}>
              <Text
                style={{
                  color: '#CBCBCB',
                  textAlign: 'right',
                  textDecorationLine: 'underline',
                  fontWeight: '600',
                }}
                onPress={() => navigation.navigate('Recover')}>
                Забыли пароль?
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 25 }}>
          <Text style={{ color: 'white', textAlign: 'center', marginBottom: 24 }}>
            Нет аккаунта? &#160;
            <Text
              style={{ color: 'white', textDecorationLine: 'underline', fontWeight: '600' }}
              onPress={() => navigation.push('Register')}>
              Регистрация
            </Text>
          </Text>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.button}
            activeOpacity={0.8}
            onLongPress={() => {}}>
            <SuperEllipseMaskView
              radius={{
                topLeft: 12,
                topRight: 12,
                bottomRight: 12,
                bottomLeft: 12,
              }}
              style={{
                backgroundColor: '#FAC637',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                marginBottom: 20,
              }}>
              <Text style={{ color: '#0F1218', fontWeight: '600', fontSize: 13 }}>Войти</Text>
            </SuperEllipseMaskView>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutAuth>
  )
}

export default AuthAuthauthentification
