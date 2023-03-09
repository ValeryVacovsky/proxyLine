import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ScrollView, StyleSheet, SafeAreaView, Text, View, TouchableOpacity } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { TextInput } from 'react-native-gesture-handler'
import LayoutMain from '../../componets/LayoutMain'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'
import postSetUserPassword from '../../api/postSetUserPassword'
import AsyncStorage from '@react-native-async-storage/async-storage'

function ChangePassword({ navigation }) {
  const text = useSelector(res => res.textReducer.settings.payload)
  const [focusOnEmail, setFocusOnEmail] = useState(false)
  const [focusOnPassword, setFocusOnPassword] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: {
      password: '',
      passwordConfirmation: '',
    },
  })
  const onSubmit = async item => {
    const tokenUser = await AsyncStorage.getItem('@token')
    const id = await AsyncStorage.getItem('@id')
    const token = `${id}_${tokenUser}`
    async function ChangePassword() {
      const data = { password: item.passwordConfirmation }
      await postSetUserPassword({ token, data })
      navigation.navigate('Auth')
    }
    ChangePassword()
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={{ bottom: 1 }} />
          <Text style={styles.headerLeftTintText}> {text?.buttons?.b2}</Text>
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
              {/* <View style={styles.inputEmailContainer}>
                <TextInput style={styles.inputEmailChange} />
              </View> */}
              <Controller
                control={control}
                rules={{}}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    onFocus={() => setFocusOnEmail(true)}
                    onBlur={() => setFocusOnEmail(false)}
                    style={{
                      backgroundColor: '#1E2127',
                      color: 'white',
                      height: 44,
                      marginLeft: 20,
                      marginRight: 20,
                      marginBottom: 14,
                      borderRadius: 8,
                      borderWidth: 1,
                      paddingLeft: 20,
                      paddingTop: 12,
                      paddingBottom: 12,
                      borderColor: (focusOnEmail && '#fac637') || (errors.password && 'rgb(138,0,0)') || '#333842',
                    }}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="password"
              />
            </View>
            <Text style={styles.text}>{text?.texts?.t17 && 'Повторите новый пароль'}</Text>
            <View style={styles.dataProxyes}>
              <Controller
                control={control}
                rules={{
                  required: true,
                  validate: value => value === getValues('password'),
                }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    onFocus={() => setFocusOnPassword(true)}
                    onBlur={() => setFocusOnPassword(false)}
                    style={{
                      backgroundColor: '#1E2127',
                      color: 'white',
                      height: 44,
                      marginLeft: 20,
                      marginRight: 20,
                      marginBottom: 14,
                      borderRadius: 8,
                      borderWidth: 1,
                      paddingLeft: 20,
                      paddingTop: 12,
                      paddingBottom: 12,
                      borderColor:
                        (focusOnPassword && '#fac637') || (errors.passwordConfirmation && 'rgb(138,0,0)') || '#333842',
                    }}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
                name="passwordConfirmation"
              />
            </View>
            <View style={styles.dataProxyesButton}>
              <TouchableOpacity
                style={styles.buttonChangeContianer}
                activeOpacity={0.8}
                onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonChangeText}>{text?.texts?.t18 && 'Применить'}</Text>
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
  },
  dataProxyesButton: {
    width: '100%',
    alignItems: 'center',
  },
  headerLeftTintContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerLeftTintText: {
    color: '#CBCBCB',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
  },
  inputEmailContainer: {
    alignItems: 'center',
    width: '100%',
  },
  inputEmailChange: {
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
  },
  inputPasswordContainer: {
    alignItems: 'center',
    width: '100%',
  },
  inputPasswordChange: {
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
  },
  buttonChangeContianer: {
    backgroundColor: '#1E2127',
    width: '90%',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 20,
  },
  buttonChangeText: {
    fontWeight: '600',
    fontSize: 13,
    color: '#FAC637',
    paddingBottom: 18,
    paddingTop: 18,
  },
})

export default ChangePassword
