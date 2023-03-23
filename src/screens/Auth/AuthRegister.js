import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSelector } from 'react-redux'

import SuperEllipseMaskView from 'react-native-super-ellipse-mask'
import LayoutAuth from '../../componets/LayoutAuth'

import LogoIntroSmall from '../../image/Svg/LogoIntroSmall'
import postRegisterCode from '../../api/postRegisterCode'

let heightOffScreen = Dimensions.get('window').height

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function AuthRegister({ navigation }) {
  const [commonFormError, setCommonFormError] = useState('')
  const [focusOnEmail, setFocusOnEmail] = useState(false)
  const [text, setText] = useState({})
  const authText = useSelector(res => res.textReducer.auth.payload)
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
  const onSubmit = async data => {
    try {
      const res = await postRegisterCode(data)
      if (res?.data?.success === true) {
        await AsyncStorage.setItem('@sign_up_email', data.email)
        navigation.navigate('Code')
      } else {
      }
    } catch (err) {
      setCommonFormError('Invalid email or password')
    }
  }
  return (
    <LayoutAuth>
      <View style={styles.header}>
        <LogoIntroSmall width={132} height={24} style={styles.mainLogo} />
      </View>
      <View style={styles.authForm}>
        <View>
          <Text style={styles.authLogo}>{authText?.texts?.t3}</Text>
          <Text style={styles.authUnderLogo}>{authText?.texts?.t4}</Text>
          {errors.email ? (
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles.label}>{authText?.texts?.t1}</Text>
              <Text style={{ color: 'white', fontSize: 12 }}>{authText?.texts?.t23}</Text>
            </View>
          ) : (
            <View>
              {commonFormError ? (
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={styles.label}>{authText?.texts?.t1}</Text>
                  <Text style={{ color: 'white', fontSize: 12 }}>{authText?.texts?.t24}</Text>
                </View>
              ) : (
                <Text style={styles.label}>{authText?.texts?.t1}</Text>
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
                style={{
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
                  borderColor: (focusOnEmail && '#fac637') || (errors.email && 'rgb(138,0,0)') || '#333842',
                }}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />
          <Text style={styles.publickOfferText}>
            {authText?.texts?.t5}{' '}
            <Text onPress={() => navigation.navigate('Ofert')} style={styles.publickOfferTextUnderline}>
              {authText?.texts?.t6}
            </Text>
            <Text> {authText?.texts?.t7} </Text>
            <Text onPress={() => navigation.navigate('Agrement')} style={styles.publickOfferTextUnderline}>
              {authText?.texts?.t8}
            </Text>
          </Text>
        </View>
        <View style={{ marginBottom: 25 }}>
          <Text style={styles.haveAcc}>
            {' '}
            {authText?.texts?.t15} &#160;
            <Text style={styles.auth} onPress={() => navigation.navigate('Auth')}>
              {authText?.texts?.t16}
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
                <Text style={styles.buttonInnerText}>{authText?.buttons?.b1}</Text>
              </View>
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
    fontSize: heightOffScreen > 700 ? 22 : 20,
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

export default AuthRegister
