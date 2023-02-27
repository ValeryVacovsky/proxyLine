import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { useSelector } from 'react-redux'
import AuthIntro from '../../screens/Auth/AuthIntro'
import AuthRegister from '../../screens/Auth/AuthRegister'
import AuthAuthauthentification from '../../screens/Auth/AuthAuthauthentification'
import AuthRecover from '../../screens/Auth/AuthRecover'
import AuthCode from '../../screens/Auth/AuthCode'
import AuthCodeReset from '../../screens/Auth/AuthCodeReset'
import Main from '../../screens/Main'

import Proxy from '../../screens/Proxy'
import HeaderProxy from '../../image/Svg/HeaderProxy'
import TestScreen from '../../screens/TestScreen'
import Agreement from '../../screens/Auth/Agreement'
import Order from '../../screens/Order'
import Countreis from '../../screens/Countreis'
import Orders from '../../screens/Orders'
import Balance from '../../screens/Balance/Balance'
import MyProxies from '../../screens/MyProxy/MyProxies'
import Notes from '../../screens/Notes'
import ProxyInfo from '../../screens/ProxyInfo'
import Settgings from '../../screens/Settings/Settgings'
import AnswerQuastion from '../../screens/Settings/AnswerQuastion'
import AccountInfo from '../../screens/Settings/AccountInfo'
import ChangePassword from '../../screens/Settings/ChangePassword'
import MessageForm from '../../screens/Settings/MessageForm'
import Filters from '../../screens/Filters'
import DeleteProxies from '../../screens/MyProxy/DeleteProxies'
import ExtendProxies from '../../screens/MyProxy/ExtendProxies'
import ChangeProxies from '../../screens/MyProxy/ChangeProxies'
import Ofert from '../../screens/Auth/Ofert'
import BalanceSystems from '../../screens/Balance/BalanceSystems'
import WebPayment from '../../screens/WebView/WeBPayment'
import BalanceMethod from '../../screens/Balance/BalanceMethod'
import ChangeLanguage from '../../screens/Settings/ChangeLanguage'
import ConfirmIps from '../../screens/Settings/ConfirmIps'
import Tags from '../../screens/Settings/Tags'

const Stack = createNativeStackNavigator()

function Navigation() {
  const auth = useSelector(data => data.authReducer.authStatus)
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0F1218',
            headerTintColor: 'red',
          },
        }}>
        <Stack.Screen name="Intro" component={AuthIntro} options={{ headerShown: false, gestureEnabled: false }} />
        {!auth && (
          <>
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
            <Stack.Screen
              name="Ofert"
              component={Ofert}
              options={{
                headerTitle: () => (
                  <View style={{ alignItems: 'center' }}>
                    <Text style={styles.headerTitle}>Публичная</Text>
                    <Text style={styles.headerTitle}>оферта</Text>
                  </View>
                ),
                headerStyle: styles.headerStyle,
                headerTitleAlign: 'center',
                headerTintColor: '#CBCBCB',
                headerBackTitle: 'Назад',
                headerBackTitleStyle: styles.headerBackTitleStyle,
              }}
            />
            <Stack.Screen
              name="Agrement"
              component={Agreement}
              options={{
                headerTitle: () => (
                  <View style={{ alignItems: 'center' }}>
                    <Text style={styles.headerTitle}>Политика</Text>
                    <Text style={styles.headerTitle}>конфиденциальности</Text>
                  </View>
                ),
                headerStyle: styles.headerStyle,
                headerTitleAlign: 'center',
                headerTintColor: '#CBCBCB',
                headerBackTitle: 'Назад',
                headerBackTitleStyle: styles.headerBackTitleStyle,
              }}
            />
          </>
        )}
        {auth && (
          <>
            <Stack.Screen name="Main" component={Main} options={{ headerShown: false, gestureEnabled: false }} />
            <Stack.Screen
              name="Proxy"
              component={Proxy}
              options={{
                headerTitle: () => <Text style={styles.headerTitle}>Прокси</Text>,
                headerRight: () => (
                  <View style={{ marginLeft: 15 }}>
                    <TouchableOpacity
                      style={{ display: 'flex', flexDirection: 'row', fontSize: 15 }}
                      activeOpacity={0.8}>
                      <Text style={{ color: 'white' }}>$ 93.5 </Text>
                      <HeaderProxy />
                    </TouchableOpacity>
                  </View>
                ),
                headerStyle: styles.headerStyle,
                headerTintColor: '#CBCBCB',
                headerTitleAlign: 'center',
                headerBackTitle: 'Назад',
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen name="Test" component={TestScreen} options={{ headerShown: false }} />
            <Stack.Screen
              name="Order"
              component={Order}
              options={{
                headerTitle: () => <Text style={styles.headerTitle}>Оформление заказа</Text>,
                headerRight: () => (
                  <View style={{ marginLeft: 15 }}>
                    <TouchableOpacity
                      style={{ display: 'flex', flexDirection: 'row', fontSize: 15 }}
                      activeOpacity={0.8}>
                      <Text style={{ color: 'white' }}>$ 93.5 </Text>
                      <HeaderProxy />
                    </TouchableOpacity>
                  </View>
                ),
                headerStyle: styles.headerStyle,
                headerTitleAlign: 'center',
                headerTintColor: '#CBCBCB',
                headerBackTitle: 'Прокси',
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="Orders"
              component={Orders}
              options={{
                headerTitle: () => <Text style={styles.headerTitle}>Заказы</Text>,
                headerStyle: styles.headerStyle,
                headerTitleAlign: 'center',
                headerTintColor: '#CBCBCB',
                headerBackTitle: 'Назад',
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="Countries"
              component={Countreis}
              options={{
                headerTitle: () => <Text style={styles.headerTitle}>Выбор страны</Text>,

                headerStyle: styles.headerStyle,
                headerTintColor: '#CBCBCB',
                headerTitleAlign: 'center',
                headerBackTitle: 'Заказ',
                headerBackTitleStyle: styles.headerBackTitleStyle,
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
                headerTitle: () => <Text style={styles.headerTitle}>Ваш баланс</Text>,
                headerStyle: styles.headerStyle,
                headerTintColor: '#CBCBCB',
                headerTitleAlign: 'center',
                headerBackTitleVisible: true,
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
                headerBackTitle: 'Назад',
              }}
            />
            <Stack.Screen
              name="BalanceSystems"
              component={BalanceSystems}
              options={{
                headerTitle: () => <Text style={styles.headerTitle}>Оплата</Text>,
                headerStyle: styles.headerStyle,
                headerTintColor: '#CBCBCB',
                headerTitleAlign: 'center',
                headerBackTitleVisible: true,
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
                headerBackTitle: 'Назад',
              }}
            />
            <Stack.Screen
              name="BalanceMethod"
              component={BalanceMethod}
              options={{
                headerTitle: () => <Text style={styles.headerTitle}>Оплата</Text>,
                headerStyle: styles.headerStyle,
                headerTintColor: '#CBCBCB',
                headerTitleAlign: 'center',
                headerBackTitleVisible: true,
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
                headerBackTitle: 'Назад',
              }}
            />
            <Stack.Screen
              name="Proxies"
              component={MyProxies}
              options={{
                headerTitle: () => (
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 16,
                      fontWeight: '700',
                    }}>
                    Мои прокси
                  </Text>
                ),
                headerStyle: styles.headerStyle,
                headerTintColor: '#CBCBCB',
                headerTitleAlign: 'center',
                headerBackTitleVisible: true,
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
                headerBackTitle: 'Назад',
              }}
            />
            <Stack.Screen
              name="Notes"
              component={Notes}
              options={{
                headerTitle: () => <Text style={styles.headerTitle}>Заметки</Text>,
                headerStyle: styles.headerStyle,
                headerTintColor: '#CBCBCB',
                headerTitleAlign: 'center',
                headerBackTitleVisible: true,
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
                headerBackTitle: 'Мои прокси',
              }}
            />
            <Stack.Screen
              name="Info"
              component={ProxyInfo}
              options={{
                headerTitle: () => <Text style={styles.headerTitle}>О прокси</Text>,
                headerStyle: styles.headerStyle,
                headerTintColor: '#CBCBCB',
                headerTitleAlign: 'center',
                headerBackTitleVisible: true,
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
                headerBackTitle: 'Мои прокси',
              }}
            />
            <Stack.Screen
              name="Settings"
              component={Settgings}
              options={{
                headerTitle: () => <Text style={styles.headerTitle}>Настройки</Text>,

                headerStyle: styles.headerStyle,
                headerTitleAlign: 'center',
                headerTintColor: '#CBCBCB',
                headerBackTitle: 'Назад',
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="AnwserQuaction"
              component={AnswerQuastion}
              options={{
                headerTitle: () => <Text style={styles.headerTitle}>Вопрос-ответ</Text>,

                headerStyle: styles.headerStyle,
                headerTitleAlign: 'center',
                headerTintColor: '#CBCBCB',
                headerBackTitle: 'Настройки',
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
              }}
            />
            <Stack.Screen
              name="Account"
              component={AccountInfo}
              options={{
                headerTitle: () => <Text style={styles.headerTitle}>Аккаунт</Text>,
                headerStyle: styles.headerStyle,
                headerTintColor: '#CBCBCB',
                headerTitleAlign: 'center',
                headerBackTitleVisible: true,
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
                headerBackTitle: 'Настройки',
              }}
            />
            <Stack.Screen
              name="Resset"
              component={ChangePassword}
              options={{
                headerTitle: () => <Text style={styles.headerTitle}>Смена пароля</Text>,
                headerStyle: styles.headerStyle,
                headerTintColor: '#CBCBCB',
                headerTitleAlign: 'center',
                headerBackTitleVisible: true,
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
                headerBackTitle: 'Назад',
              }}
            />
            <Stack.Screen
              name="Message"
              component={MessageForm}
              options={{
                headerTitle: () => <Text style={styles.headerTitle}>Написать нам</Text>,
                headerStyle: styles.headerStyle,
                headerTintColor: '#CBCBCB',
                headerTitleAlign: 'center',
                headerBackTitleVisible: true,
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
                headerBackTitle: 'Настройки',
              }}
            />
            <Stack.Screen
              name="Filters"
              component={Filters}
              options={{
                headerTitle: () => <Text style={styles.headerTitle}>Фильтр</Text>,
                headerStyle: styles.headerStyle,
                headerTintColor: '#CBCBCB',
                headerTitleAlign: 'center',
                headerBackTitleVisible: true,
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
                headerBackTitle: 'Мои прокси',
              }}
            />
            <Stack.Screen
              name="Delete"
              component={DeleteProxies}
              options={{
                headerTitle: () => <Text style={styles.headerTitle}>Удалить</Text>,
                headerStyle: styles.headerStyle,
                headerTintColor: '#CBCBCB',
                headerTitleAlign: 'center',
                headerBackTitleVisible: true,
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
                headerBackTitle: 'Мои прокси',
              }}
            />
            <Stack.Screen
              name="Extend"
              component={ExtendProxies}
              options={{
                headerTitle: () => <Text style={styles.headerTitle}>Продлить</Text>,
                headerStyle: styles.headerStyle,
                headerTintColor: '#CBCBCB',
                headerTitleAlign: 'center',
                headerBackTitleVisible: true,
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
                headerBackTitle: 'Мои прокси',
              }}
            />
            <Stack.Screen
              name="Change"
              component={ChangeProxies}
              options={{
                headerTitle: () => <Text style={styles.headerTitle}>Изменить</Text>,
                headerStyle: styles.headerStyle,
                headerTintColor: '#CBCBCB',
                headerTitleAlign: 'center',
                headerBackTitleVisible: true,
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
                headerBackTitle: 'Мои прокси',
              }}
            />
            <Stack.Screen
              name="Language"
              component={ChangeLanguage}
              options={{
                headerTitle: () => <Text style={styles.headerTitle}>Выбор языка</Text>,
                headerStyle: styles.headerStyle,
                headerTintColor: '#CBCBCB',
                headerTitleAlign: 'center',
                headerBackTitleVisible: true,
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
                headerBackTitle: 'Настройки',
              }}
            />
            <Stack.Screen
              name="Confirm"
              component={ConfirmIps}
              options={{
                headerTitle: () => <Text style={styles.headerTitle}>Разрешенные IP</Text>,
                headerStyle: styles.headerStyle,
                headerTintColor: '#CBCBCB',
                headerTitleAlign: 'center',
                headerBackTitleVisible: true,
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
                headerBackTitle: 'Настройки',
              }}
            />
            <Stack.Screen
              name="Tags"
              component={Tags}
              options={{
                headerTitle: () => <Text style={styles.headerTitle}>Теги</Text>,
                headerStyle: styles.headerStyle,
                headerTintColor: '#CBCBCB',
                headerTitleAlign: 'center',
                headerBackTitleVisible: true,
                headerBackTitleStyle: styles.headerBackTitleStyle,
                gestureEnabled: false,
                headerBackTitle: 'Настройки',
              }}
            />
            <Stack.Screen name="WebPayment" component={WebPayment} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  headerStyle: {
    height: 300,
    borderBottomLeftRadius: 50,
    backgroundColor: '#0F1218',
  },
  headerBackTitleStyle: {
    fontSize: 14,
  },
  headerTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
})

export default Navigation
