import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ScrollView, StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Pressable } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { TextInput } from 'react-native-gesture-handler'
import LayoutMain from '../../componets/LayoutMain'
import HeaderTintBack from '../../image/Svg/HeaderTintBack'
import postSetUserPassword from '../../api/postSetUserPassword'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ViewIcon from '../../image/Svg/ViewIcon'
import ViewIconOff from '../../image/Svg/ViewIconOff'
import ModalSuccess from '../../componets/Orders/ModalSuccess'

const PASSWORD_REGEX = /(?=(.*[0-9]))(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,64}/

function ChangePassword({ navigation }) {
  const text = useSelector(res => res.textReducer.settings.payload)
  const [showPasswordTop, setShowPasswordTop] = useState(true)
  const [showPasswordBottom, setShowPasswordBottom] = useState(true)
  const [focusOnPasswordTop, setFocusOnPasswordTop] = useState(false)
  const [focusOnPasswordBottom, setFocusOnPasswordBottom] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

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
      setModalVisible(true)
    }
    ChangePassword()
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={styles.headerLeftIcon} />
          <Text style={styles.headerLeftTintText}> {text?.buttons?.b2}</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation])
  return (
    <LayoutMain style={styles.layoutContainer}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <View>
            <View style={styles.validTextContainer}>
              <Text style={styles.text}>{text?.texts?.t16 || 'Новый пароль'}</Text>
              {errors.password && <Text style={styles.validText}>{text?.texts?.t38 || 'Не валдиный пароль'}</Text>}
            </View>
            <View style={styles.dataProxyes}>
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
                      styles.inputStyle,
                      {
                        borderColor:
                          (focusOnPasswordTop && '#fac637') ||
                          (errors.password && 'rgb(138,0,0)') ||
                          (errors.passwordConfirmation && 'rgb(138,0,0)') ||
                          '#333842',
                      },
                    ])}>
                    <TextInput
                      onFocus={() => setFocusOnPasswordTop(true)}
                      onBlur={() => setFocusOnPasswordTop(false)}
                      style={styles.inputPassword}
                      onChangeText={onChange}
                      value={value}
                      secureTextEntry={showPasswordTop}
                    />
                    <Pressable hitSlop={50} onPress={() => setShowPasswordTop(prev => !prev)}>
                      {showPasswordTop ? <ViewIcon /> : <ViewIconOff />}
                    </Pressable>
                  </View>
                )}
                name="password"
              />
            </View>
            <View style={styles.validTextContainer}>
              <Text style={styles.text}>{text?.texts?.t17 || 'Повторите новый пароль'}</Text>
              {errors.passwordConfirmation && (
                <Text style={styles.validText}> {text?.texts?.t39 || 'Не совпадает'}</Text>
              )}
            </View>
            <View style={styles.dataProxyes}>
              <Controller
                control={control}
                rules={{
                  required: true,
                  validate: value => value === getValues('password'),
                }}
                render={({ field: { onChange, value } }) => (
                  <View
                    style={StyleSheet.flatten([
                      styles.inputStyle,
                      {
                        borderColor:
                          (focusOnPasswordBottom && '#fac637') ||
                          (errors.passwordConfirmation && 'rgb(138,0,0)') ||
                          '#333842',
                      },
                    ])}>
                    <TextInput
                      onFocus={() => setFocusOnPasswordBottom(true)}
                      onBlur={() => setFocusOnPasswordBottom(false)}
                      style={styles.inputPasswordConfirmation}
                      onChangeText={onChange}
                      value={value}
                      secureTextEntry={showPasswordBottom}
                    />
                    <Pressable hitSlop={50} onPress={() => setShowPasswordBottom(prev => !prev)}>
                      {showPasswordBottom ? <ViewIcon /> : <ViewIconOff />}
                    </Pressable>
                  </View>
                )}
                name="passwordConfirmation"
              />
            </View>
            <View style={styles.dataProxyesButton}>
              <TouchableOpacity
                style={styles.buttonChangeContianer}
                activeOpacity={0.8}
                onPress={handleSubmit(onSubmit)}>
                <Text style={styles.buttonChangeText}>{text?.texts?.t18 || 'Применить'}</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.textSmallh1}>{text?.texts?.t19 || 'Требования к паролю'}</Text>
            <Text style={styles.textSmall}>
              {text?.texts?.t20 || '1. 8 и более символов.'}
              {'\n'}
              {text?.texts?.t21 || '2. Непохож на email.'}
              {'\n'}
              {text?.texts?.t22 || '3. Прописные и строчые буквы.'}
              {'\n'}
              {text?.texts?.t23 || '4. Хотя бы одна цифра.'}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
      <ModalSuccess visible={modalVisible} onClose={toggleModal}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>{text?.texts?.t37 || 'Пароль обновлен!'}</Text>
        </View>
      </ModalSuccess>
    </LayoutMain>
  )
}

const styles = StyleSheet.create({
  layoutContainer: {
    width: '100%',
  },
  container: {
    flex: 1,
    marginTop: 10,
  },
  scrollView: {
    width: '100%',
  },
  inputStyle: {
    backgroundColor: '#1E2127',
    color: 'white',
    height: 44,
    marginBottom: 14,
    borderRadius: 8,
    borderWidth: 1,
    paddingLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  inputPassword: {
    color: 'white',
    width: '90%',
    height: '100%',
  },
  inputPasswordConfirmation: {
    color: 'white',
    width: '90%',
    height: '100%',
  },
  text: {
    color: 'white',
    fontSize: 14,
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
  headerLeftIcon: {
    bottom: 1,
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
  validTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  validText: {
    fontWeight: '600',
    fontSize: 12,
    color: 'white',
    marginRight: 20,
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
  modalContainer: {
    backgroundColor: '#1E2127',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
    width: '80%',
  },
  modalText: {
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 17,
    color: 'white',
  },
})

export default ChangePassword
