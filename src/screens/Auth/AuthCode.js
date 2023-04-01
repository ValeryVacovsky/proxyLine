import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useForm, Controller } from 'react-hook-form'
import { useSelector } from 'react-redux'

import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import LayoutAuth from '../../components/LayoutAuth'

import LogoIntroSmall from '../../image/Svg/LogoIntroSmall'
import postRegister from '../../api/postRegister'

const heightOffScreen = Dimensions.get('window').height

function AuthCode({ navigation }) {
  const [text, setText] = useState({})
  const [commonFormError, setCommonFormError] = useState('')
  const [focusOnCode, setFocusOnCode] = useState(false)
  const authText = useSelector(res => res.textReducer.auth.payload)

  useEffect(() => {
    setText(authText)
  }, [authText, text])
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({})

  const onSubmit = async data => {
    const email = await AsyncStorage.getItem('@sign_up_email')
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
          <Text style={styles.authLogo}>{authText?.texts?.t11}</Text>
          <Text style={styles.authTextMain}>{authText?.texts?.t25}</Text>
          {errors.email_code ? (
            <View style={styles.errorContainer}>
              <Text style={styles.label} onPress={() => {}}>
                {authText?.texts?.t26}
              </Text>
              <Text style={styles.errorLableError}>{authText?.texts?.t27}</Text>
            </View>
          ) : (
            <View>
              {commonFormError ? (
                <View style={styles.errorContainer}>
                  <Text style={styles.label} onPress={() => {}}>
                    {authText?.texts?.t26}
                  </Text>
                  <Text style={styles.errorLableError}>{authText?.texts?.t28}</Text>
                </View>
              ) : (
                <Text style={styles.errorLableError}>{authText?.texts?.t29}</Text>
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
                style={StyleSheet.flatten([
                  styles.input,
                  {
                    borderColor: (focusOnCode && '#fac637') || (errors.email_code && 'rgb(138,0,0)') || '#333842',
                  },
                ])}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email_code"
          />
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={handleSubmit(onSubmit)} activeOpacity={0.8}>
            <SuperEllipseMaskView
              radius={{
                topLeft: 12,
                topRight: 12,
                bottomLeft: 12,
                bottomRight: 12,
              }}>
              <View style={styles.buttonInner}>
                <Text style={styles.buttonInnerText}>{authText?.buttons?.b2}</Text>
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
                <Text style={styles.buttonInnerBackText}>{authText?.buttons?.b3}</Text>
              </View>
            </SuperEllipseMaskView>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutAuth>
  )
}

const styles = StyleSheet.create({
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
  authTextMain: {
    color: '#CBCBCB',
    textAlign: 'center',
    paddingBottom: 30,
  },
  errorContainer: {
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
  bottomContainer: {
    marginBottom: 25,
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
  },
  buttonInnerBackText: {
    color: 'white',
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
    paddingLeft: 20,
    paddingTop: 12,
    paddingBottom: 12,
    marginTop: 8,
  },
  authLogo: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: heightOffScreen > 700 ? 22 : 20,
  },
})

export default AuthCode
