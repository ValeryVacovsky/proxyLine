import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import LayoutAuth from '../componets/LayoutAuth';

import { useForm, Controller } from 'react-hook-form';

import LogoIntroSmall from '../image/Svg/LogoIntroSmall';
import postAuth from '../api/postAuth';
import SuperEllipseMaskView from 'react-native-super-ellipse-mask';
import { Squircle } from 'react-ios-corners';
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const AuthAuthauthentification = ({ navigation }) => {
  const [commonFormError, setCommonFormError] = useState('');
  const [focusOnEmail, setFocusOnEmail] = useState(false)
  const [focusOnPassword, setFocusOnPassword] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        e.preventDefault();
        console.log(123);
      }),
    [navigation],
  );
  const onSubmit = data => {
    postAuth(data).then(result => {
      console.log(result.data);
      if (result.data.success === true) {
        navigation.navigate('Main');
      } else {
        setCommonFormError('Invalid email or password');
      }
    });
    if (data.email === 'email@gmail.com' && data.password === 'password') {
      navigation.push('Main', {
        initial: false,
      });
    }
    if (data.email === 1111) {
      navigation.push('Main');
    }
    console.log(data);
  };

  const customOnFocuse = () => {

  }

  return (
    <LayoutAuth>
      <View style={styles.header}>
        <LogoIntroSmall width={132} height={24} style={styles.mainLogo} />
      </View>
      <View style={styles.authForm}>
        <View>
          <Text style={styles.authLogo}>Авторизация</Text>
          {commonFormError && (
            <Text style={{ color: 'white', textAlign: 'center' }}>
              {commonFormError}
            </Text>
          )}
          <Text style={styles.label}>Email</Text>
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
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onFocus={(e) => setFocusOnEmail(true)}
                onBlur={(e) => setFocusOnEmail(false)}
                style={{
                  backgroundColor: '#1E2127',
                  color: 'white',
                  height: 44,
                  minWidth: '100%',
                  marginBottom: 14,
                  borderRadius: 8,
                  borderWidth: 1,
                  paddingLeft: 20,
                  paddingTop: 14,
                  paddingBottom: 14,
                  borderColor: (focusOnEmail && '#fac637') || (errors.email && 'rgb(138,0,0)') || '#333842'
                }}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="email"
          />

          <Text style={styles.label}>Пароль</Text>
          {/* <Input name="password" control={control} /> */}
          {/* <TextInput {...register("password")} style={styles.input}></TextInput> */}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                onFocus={(e) => setFocusOnPassword(true)}
                onBlur={(e) => setFocusOnPassword(false)}
                style={{
                  backgroundColor: '#1E2127',
                  color: 'white',
                  height: 44,
                  minWidth: '100%',
                  marginBottom: 14,
                  borderRadius: 8,
                  borderWidth: 1,
                  paddingLeft: 20,
                  paddingTop: 14,
                  paddingBottom: 14,
                  borderColor: (focusOnPassword && '#fac637') || (errors.password && 'rgb(138,0,0)') || '#333842'
                }}
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
          <TouchableOpacity>
            <View style={{}}>
              <Text
                style={{
                  color: '#CBCBCB',
                  textAlign: 'right',
                  textDecorationLine: 'underline',
                  fontWeight: "600"
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
              style={{ color: 'white', textDecorationLine: 'underline', fontWeight: "600" }}
              onPress={() => navigation.push('Register')}>
              Регистрация
            </Text>
          </Text>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <View style={{
              backgroundColor: '#FAC637',
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
              borderRadius: 12,
              marginBottom: 20
            }}>
              <Text style={{ color: '#0F1218', fontWeight: "600", fontSize: 13 }}>Войти</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </LayoutAuth>
  );
};

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
});

export default AuthAuthauthentification;
