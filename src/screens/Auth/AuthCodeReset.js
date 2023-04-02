import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import { useForm, Controller } from 'react-hook-form'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'

import LayoutAuth from '../../components/LayoutAuth'

import LogoIntroSmall from '../../image/Svg/LogoIntroSmall'

import postResetCode from '../../api/postResetCode'

const heightOffScreen = Dimensions.get('window').height

function AuthCodeReset({ navigation }) {
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
    const email = await AsyncStorage.getItem('@sign_up_email_reset')
    const res = await postResetCode({ email, ...data })
    if (res?.data?.success === true) {
      navigation.navigate('Auth')
    } else {
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
          <Text style={styles.authMainText}>{authText?.texts?.t12}</Text>
          {errors.code ? (
            <View style={styles.labelContainer}>
              <Text style={styles.label}>{authText?.texts?.t30}</Text>
              <Text style={styles.labelErrorText}>{authText?.texts?.t27}</Text>
            </View>
          ) : (
            <View>
              {commonFormError ? (
                <View style={styles.labelContainer}>
                  <Text style={styles.label} onPress={() => {}}>
                    {authText?.texts?.t30}
                  </Text>
                  <Text style={styles.labelErrorText}>{authText?.texts?.t28}</Text>
                </View>
              ) : (
                <Text style={styles.label} onPress={() => {}}>
                  {authText?.texts?.t30}
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
                style={StyleSheet.flatten([
                  styles.input,
                  {
                    borderColor: (focusOnCode && '#fac637') || (errors.code && 'rgb(138,0,0)') || '#333842',
                  },
                ])}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="code"
          />
          {errors.email && <Text style={styles.errorsEmail}>{authText?.texts?.t31}</Text>}
        </View>
        <View style={styles.buttonSubmitContainer}>
          <TouchableOpacity onPress={handleSubmit(onSubmit)} activeOpacity={0.8}>
            <SuperEllipseMaskView
              radius={{
                topLeft: 12,
                topRight: 12,
                bottomRight: 12,
                bottomLeft: 12,
              }}>
              <View style={styles.buttonInner}>
                <Text style={styles.buttonInnerText}>{authText?.buttons?.b2}</Text>
              </View>
            </SuperEllipseMaskView>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Auth')} activeOpacity={0.8}>
            <View style={styles.buttonInnerBack}>
              <Text style={styles.buttonInnerBackText}>{authText?.buttons?.b3}</Text>
            </View>
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
  labelContainer: {
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
  labelErrorText: {
    color: 'white',
    fontSize: 12,
  },
  errorsEmail: {
    color: 'white',
    marginBottom: 10,
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
  buttonInnerBackText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 13,
  },
  buttonSubmitContainer: {
    marginBottom: 25,
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
  },
  authLogo: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: heightOffScreen > 700 ? 22 : 20,
  },
  authMainText: {
    color: '#CBCBCB',
    textAlign: 'center',
    paddingBottom: 30,
  },
})

export default AuthCodeReset
