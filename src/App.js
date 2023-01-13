import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Provider } from 'react-redux'
import AuthIntro from './screens/Auth/AuthIntro'
import AuthRegister from './screens/Auth/AuthRegister'
import AuthAuthauthentification from './screens/Auth/AuthAuthauthentification'
import AuthRecover from './screens/Auth/AuthRecover'
import AuthCode from './screens/Auth/AuthCode'
import AuthCodeReset from './screens/Auth/AuthCodeReset'
import Main from './screens/Main'

import configureStore from './store'
import Proxy from './screens/Proxy'
import HeaderProxy from './image/Svg/HeaderProxy'
import TestScreen from './screens/TestScreen'
import Agreement from './screens/Auth/Agreement'
import Order from './screens/Order'
import Countreis from './screens/Countreis'
import Orders from './screens/Orders'
import Balance from './screens/Balance'
import MyProxies from './screens/MyProxy/MyProxies'
import Notes from './screens/Notes'
import ProxyInfo from './screens/ProxyInfo'
import Settgings from './screens/Settings/Settgings'
import AnswerQuastion from './screens/Settings/AnswerQuastion'
import AccountInfo from './screens/Settings/AccountInfo'
import ChangePassword from './screens/Settings/ChangePassword'
import MessageForm from './screens/Settings/MessageForm'
import Filters from './screens/Filters'
import DeleteProxies from './screens/MyProxy/DeleteProxies'
import ExtendProxies from './screens/MyProxy/ExtendProxies'
import ChangeProxies from './screens/MyProxy/ChangeProxies'
import Ofert from './screens/Auth/Ofert'

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({})

const store = configureStore()

const Stack = createNativeStackNavigator()

// eslint-disable-next-line no-unused-vars
function App({ navigation }) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0F1218',
              headerTintColor: 'red',
            },
          }}>
          <Stack.Screen name="Intro" component={AuthIntro} options={{ headerShown: false, gestureEnabled: false }} />
          <Stack.Screen
            name="Auth"
            component={AuthAuthauthentification}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="Register"
            component={AuthRegister}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="Recover"
            component={AuthRecover}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen name="Code" component={AuthCode} options={{ headerShown: false, gestureEnabled: false }} />
          <Stack.Screen
            name="CodeReset"
            component={AuthCodeReset}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false, gestureEnabled: false }} />
          <Stack.Screen
            name="Proxy"
            component={Proxy}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Прокси</Text>,
              // eslint-disable-next-line react/no-unstable-nested-components
              headerRight: () => (
                <View style={{ marginLeft: 15 }}>
                  <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', fontSize: 15 }} activeOpacity={0.8}>
                    <Text style={{ color: 'white' }}>$ 93.5 </Text>
                    <HeaderProxy />
                  </TouchableOpacity>
                </View>
              ),
              headerStyle: {
                height: 300,
                borderBottomLeftRadius: 50,
                backgroundColor: '#0F1218',
              },
              headerTintColor: '#CBCBCB',
              headerTitleAlign: 'center',
              headerBackTitle: 'Назад',
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="Agrement"
            component={Agreement}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => (
                <View style={{ alignItems: 'center' }}>
                  <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Политика</Text>
                  <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>конфиденциальности</Text>
                </View>
              ),
              headerStyle: {
                height: 300,
                borderBottomLeftRadius: 50,
                backgroundColor: '#0F1218',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#CBCBCB',
              headerBackTitle: 'Назад',
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
            }}
          />
          <Stack.Screen
            name="Ofert"
            component={Ofert}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => (
                <View style={{ alignItems: 'center' }}>
                  <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Публичная</Text>
                  <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>оферта</Text>
                </View>
              ),
              headerStyle: {
                height: 300,
                borderBottomLeftRadius: 50,
                backgroundColor: '#0F1218',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#CBCBCB',
              headerBackTitle: 'Назад',
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
            }}
          />
          <Stack.Screen name="Test" component={TestScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="Order"
            component={Order}
            options={{
              headerTitle: () => (
                <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Оформление заказа</Text>
              ),
              headerRight: () => (
                <View style={{ marginLeft: 15 }}>
                  <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', fontSize: 15 }} activeOpacity={0.8}>
                    <Text style={{ color: 'white' }}>$ 93.5 </Text>
                    <HeaderProxy />
                  </TouchableOpacity>
                </View>
              ),
              headerStyle: {
                height: 300,
                borderBottomLeftRadius: 50,
                backgroundColor: '#0F1218',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#CBCBCB',
              headerBackTitle: 'Прокси',
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="Orders"
            component={Orders}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Заказы</Text>,
              // eslint-disable-next-line react/no-unstable-nested-components
              headerStyle: {
                height: 300,
                borderBottomLeftRadius: 50,
                backgroundColor: '#0F1218',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#CBCBCB',
              headerBackTitle: 'Назад',
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="Countries"
            component={Countreis}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Выбор страны</Text>,
              // eslint-disable-next-line react/no-unstable-nested-components
              headerStyle: {
                height: 300,
                borderBottomLeftRadius: 50,
                backgroundColor: '#0F1218',
              },
              headerTintColor: '#CBCBCB',
              headerTitleAlign: 'center',
              headerBackTitle: 'Заказ',
              headerLargeTitleStyle: {
                fontSize: 12,
                color: 'red',
              },
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="Balance"
            component={Balance}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Ваш баланс</Text>,
              headerStyle: {
                height: 300,
                borderBottomLeftRadius: 50,
                backgroundColor: '#0F1218',
              },
              headerTintColor: '#CBCBCB',
              headerTitleAlign: 'center',
              headerBackTitleVisible: true,
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
              gestureEnabled: false,
              headerBackTitle: 'Назад',
            }}
          />
          <Stack.Screen
            name="Proxies"
            component={MyProxies}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Мои прокси</Text>,
              headerStyle: {
                height: 300,
                borderBottomLeftRadius: 50,
                backgroundColor: '#0F1218',
              },
              headerTintColor: '#CBCBCB',
              headerTitleAlign: 'center',
              headerBackTitleVisible: true,
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
              gestureEnabled: false,
              headerBackTitle: 'Назад',
            }}
          />
          <Stack.Screen
            name="Notes"
            component={Notes}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Заметки</Text>,
              headerStyle: {
                height: 300,
                borderBottomLeftRadius: 50,
                backgroundColor: '#0F1218',
              },
              headerTintColor: '#CBCBCB',
              headerTitleAlign: 'center',
              headerBackTitleVisible: true,
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
              gestureEnabled: false,
              headerBackTitle: 'Мои прокси',
            }}
          />
          <Stack.Screen
            name="Info"
            component={ProxyInfo}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>О прокси</Text>,
              headerStyle: {
                height: 300,
                borderBottomLeftRadius: 50,
                backgroundColor: '#0F1218',
              },
              headerTintColor: '#CBCBCB',
              headerTitleAlign: 'center',
              headerBackTitleVisible: true,
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
              gestureEnabled: false,
              headerBackTitle: 'Мои прокси',
            }}
          />
          <Stack.Screen
            name="Settings"
            component={Settgings}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Настройки</Text>,
              // eslint-disable-next-line react/no-unstable-nested-components
              headerStyle: {
                height: 300,
                borderBottomLeftRadius: 50,
                backgroundColor: '#0F1218',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#CBCBCB',
              headerBackTitle: 'Назад',
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="AnwserQuaction"
            component={AnswerQuastion}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Вопрос-ответ</Text>,
              // eslint-disable-next-line react/no-unstable-nested-components
              headerStyle: {
                height: 300,
                borderBottomLeftRadius: 50,
                backgroundColor: '#0F1218',
              },
              headerTitleAlign: 'center',
              headerTintColor: '#CBCBCB',
              headerBackTitle: 'Настройки',
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name="Account"
            component={AccountInfo}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Аккаунт</Text>,
              headerStyle: {
                height: 300,
                borderBottomLeftRadius: 50,
                backgroundColor: '#0F1218',
              },
              headerTintColor: '#CBCBCB',
              headerTitleAlign: 'center',
              headerBackTitleVisible: true,
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
              gestureEnabled: false,
              headerBackTitle: 'Настройки',
            }}
          />
          <Stack.Screen
            name="Resset"
            component={ChangePassword}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Смена пароля</Text>,
              headerStyle: {
                height: 300,
                borderBottomLeftRadius: 50,
                backgroundColor: '#0F1218',
              },
              headerTintColor: '#CBCBCB',
              headerTitleAlign: 'center',
              headerBackTitleVisible: true,
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
              gestureEnabled: false,
              headerBackTitle: 'Назад',
            }}
          />
          <Stack.Screen
            name="Message"
            component={MessageForm}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Написать нам</Text>,
              headerStyle: {
                height: 300,
                borderBottomLeftRadius: 50,
                backgroundColor: '#0F1218',
              },
              headerTintColor: '#CBCBCB',
              headerTitleAlign: 'center',
              headerBackTitleVisible: true,
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
              gestureEnabled: false,
              headerBackTitle: 'Настройки',
            }}
          />
          <Stack.Screen
            name="Filters"
            component={Filters}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Фильтр</Text>,
              headerStyle: {
                height: 300,
                borderBottomLeftRadius: 50,
                backgroundColor: '#0F1218',
              },
              headerTintColor: '#CBCBCB',
              headerTitleAlign: 'center',
              headerBackTitleVisible: true,
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
              gestureEnabled: false,
              headerBackTitle: 'Мои прокси',
            }}
          />
          <Stack.Screen
            name="Delete"
            component={DeleteProxies}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Удалить</Text>,
              headerStyle: {
                height: 300,
                borderBottomLeftRadius: 50,
                backgroundColor: '#0F1218',
              },
              headerTintColor: '#CBCBCB',
              headerTitleAlign: 'center',
              headerBackTitleVisible: true,
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
              gestureEnabled: false,
              headerBackTitle: 'Мои прокси',
            }}
          />
          <Stack.Screen
            name="Extend"
            component={ExtendProxies}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Продлить</Text>,
              headerStyle: {
                height: 300,
                borderBottomLeftRadius: 50,
                backgroundColor: '#0F1218',
              },
              headerTintColor: '#CBCBCB',
              headerTitleAlign: 'center',
              headerBackTitleVisible: true,
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
              gestureEnabled: false,
              headerBackTitle: 'Мои прокси',
            }}
          />
          <Stack.Screen
            name="Change"
            component={ChangeProxies}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Изменить</Text>,
              headerStyle: {
                height: 300,
                borderBottomLeftRadius: 50,
                backgroundColor: '#0F1218',
              },
              headerTintColor: '#CBCBCB',
              headerTitleAlign: 'center',
              headerBackTitleVisible: true,
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
              gestureEnabled: false,
              headerBackTitle: 'Мои прокси',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
