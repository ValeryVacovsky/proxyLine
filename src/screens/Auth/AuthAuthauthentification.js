import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Pressable, Dimensions } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'

import LayoutAuth from '../../componets/LayoutAuth'

import LogoIntroSmall from '../../image/Svg/LogoIntroSmall'
import VectorOpen from '../../image/Svg/VectorOpen'
import ViewIcon from '../../image/Svg/ViewIcon'
import ViewIconOff from '../../image/Svg/ViewIconOff'

import { setAuth } from '../../store/reducers/authReducer'

import getAllTexts from '../../common/getAllTexts'

import postAuth from '../../api/postAuth'

const heightOffScreen = Dimensions.get('window').height

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const PASSWORD_REGEX = /(?=(.*[0-9]))(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,64}/

function AuthAuthauthentification({ navigation }) {
  const dispatch = useDispatch()
  const [text, setText] = useState({})
  const [commonFormError, setCommonFormError] = useState('')
  const [focusOnEmail, setFocusOnEmail] = useState(false)
  const [focusOnPassword, setFocusOnPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(true)
  const authText = useSelector(res => res.textReducer.auth.payload)
  const language = useSelector(res => res.textReducer.languages_get.language)

  useEffect(() => {
    setText(authText)
  }, [authText, text])

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
      await AsyncStorage.setItem('@login', String(data.email))
      await AsyncStorage.setItem('@role', String('default'))
      await getAllTexts(dispatch, language)
      dispatch(setAuth(true))
      navigation.navigate('Main')
    } else {
      setCommonFormError('Invalid email or password')
    }
  }

  return (
    <LayoutAuth>
      <View style={styles.header}>
        <LogoIntroSmall style={styles.mainLogo} />
      </View>
      <View style={styles.authForm}>
        <View>
          <Text style={styles.authLogo}>{text?.texts?.t16}</Text>
          {errors.email ? (
            <View style={styles.lableErrorContainer}>
              <Text style={styles.label}>{text?.texts?.t1}</Text>
              <Text style={styles.lableError}>{text?.texts?.t23}</Text>
            </View>
          ) : (
            <View>
              {commonFormError ? (
                <View style={styles.lableErrorContainer}>
                  <Text style={styles.label}>{text?.texts?.t1}</Text>
                  <Text style={styles.lableError}>{text?.texts?.t20}</Text>
                </View>
              ) : (
                <Text style={styles.label}>{text?.texts?.t1}</Text>
              )}
            </View>
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
                style={StyleSheet.flatten([
                  styles.inputEmail,
                  {
                    borderColor: (focusOnEmail && '#fac637') || (errors.email && 'rgb(138,0,0)') || '#333842',
                  },
                ])}
                onChangeText={onChange}
                value={value}
                keyboardType="email-address"
              />
            )}
            name="email"
          />
          {errors.password ? (
            <View style={styles.lableErrorContainer}>
              <Text style={styles.label}>{text?.texts?.t2}</Text>
              <Text style={styles.lableError}>{text?.texts?.t21}</Text>
            </View>
          ) : (
            <View>
              {commonFormError ? (
                <View style={styles.lableErrorContainer}>
                  <Text style={styles.label}>{text?.texts?.t2}</Text>
                </View>
              ) : (
                <Text style={styles.label}>{text?.texts?.t2}</Text>
              )}
            </View>
          )}
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: {
                value: PASSWORD_REGEX,
                required: true,
              },
            }}
            render={({ field: { onChange, value } }) => (
              <View
                style={StyleSheet.flatten([
                  styles.inputPasswordContainer,
                  {
                    borderColor: (focusOnPassword && '#fac637') || (errors.password && 'rgb(138,0,0)') || '#333842',
                  },
                ])}>
                <TextInput
                  onFocus={() => setFocusOnPassword(true)}
                  onBlur={() => setFocusOnPassword(false)}
                  style={styles.inputPassword}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={showPassword}
                  icon={<VectorOpen />}
                  iconPosition="right"
                />
                <Pressable hitSlop={50} onPress={() => setShowPassword(prev => !prev)}>
                  {showPassword ? <ViewIcon /> : <ViewIconOff />}
                </Pressable>
              </View>
            )}
            name="password"
          />
          <TouchableOpacity activeOpacity={0.8}>
            <View>
              <Text style={styles.navigationRecoverText} onPress={() => navigation.navigate('Recover')}>
                {text?.texts?.t22}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.bottomContainerText}>
            {text?.texts?.t13} &#160;
            <Text style={styles.navigationRegisterText} onPress={() => navigation.push('Register')}>
              {text?.texts?.t3}
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
              style={styles.submitButtomContainer}>
              <Text style={styles.submitButtomText}>{text?.buttons?.b0}</Text>
            </SuperEllipseMaskView>
          </TouchableOpacity>
        </View>
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
  lableErrorContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    color: 'white',
    marginBottom: 8,
    fontSize: 16,
    lineHeight: 15,
    fontWeight: '500',
  },
  lableError: {
    color: 'white',
    fontSize: 12,
  },
  inputEmail: {
    backgroundColor: '#1E2127',
    color: 'white',
    height: 44,
    minWidth: '100%',
    marginBottom: 14,
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 20,
    paddingTop: 12,
    paddingBottom: 12,
  },
  inputPasswordContainer: {
    backgroundColor: '#1E2127',
    color: 'white',
    height: 44,
    minWidth: '100%',
    marginBottom: 14,
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputPassword: {
    color: 'white',
    width: '90%',
    height: '100%',
  },
  bottomContainer: {
    marginBottom: 25,
  },
  bottomContainerText: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 24,
  },
  buttonInner: {
    backgroundColor: '#FAC637',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    fontFamily: 'Rubik',
  },
  navigationRecoverText: {
    color: '#CBCBCB',
    textAlign: 'right',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  navigationRegisterText: {
    color: 'white',
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  authLogo: {
    paddingBottom: 30,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: heightOffScreen < 700 ? 22 : 20,
  },
  submitButtomContainer: {
    backgroundColor: '#FAC637',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginBottom: 20,
  },
  submitButtomText: {
    color: '#0F1218',
    fontWeight: '600',
    fontSize: 13,
  },
})

export default AuthAuthauthentification
