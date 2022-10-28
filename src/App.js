import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthIntro from './screens/AuthIntro';
import AuthRegister from './screens/AuthRegister';
import AuthAuthauthentification from './screens/AuthAuthauthentification';
import AuthRecover from './screens/AuthRecover';
import AuthCode from './screens/AuthCode';
import AuthCodeReset from './screens/AuthCodeReset';
import Main from './screens/Main';

import {Provider} from 'react-redux';

import configureStore from './store';
import Proxy from './screens/Proxy';
import HeaderProxy from './image/Svg/HeaderProxy';
import TestScreen from './screens/TestScreen';
import Agreement from './screens/Agreement';
import Order from './screens/Order';

const store = configureStore();

const Stack = createNativeStackNavigator();

const App = ({navigation}) => {
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
          <Stack.Screen
            name="Intro"
            component={AuthIntro}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="Auth"
            component={AuthAuthauthentification}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="Register"
            component={AuthRegister}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="Recover"
            component={AuthRecover}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="Code"
            component={AuthCode}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="CodeReset"
            component={AuthCodeReset}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{headerShown: false, gestureEnabled: false}}
          />
          <Stack.Screen
            name="Proxy"
            component={Proxy}
            options={{
              headerTitle: () => (
                <Text style={{color: 'white', fontSize: 18}}>Прокси</Text>
              ),
              headerRight: () => (
                <View style={{marginLeft: 15}}>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      fontSize: 15,
                    }}>
                    <Text style={{color: 'white'}}>$ 93.5 </Text>
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
              headerBackTitle: 'Назад',
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
            }}
          />
          <Stack.Screen
            name="Agrement"
            component={Agreement}
            options={{
              headerTitle: () => (
                <View style={{alignItems: 'center'}}>
                  <Text style={{color: 'white', fontSize: 18}}>Политика</Text>
                  <Text style={{color: 'white', fontSize: 18}}>
                    конфиденциальности
                  </Text>
                </View>
              ),
              headerStyle: {
                height: 300,
                borderBottomLeftRadius: 50,
                backgroundColor: '#0F1218',
              },
              headerTitleAlign: 'center',
              headerBackTitle: 'Назад',
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
            }}
          />
          <Stack.Screen
            name="Test"
            component={TestScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Order"
            component={Order}
            options={{
              headerTitle: () => (
                <Text style={{color: 'white', fontSize: 18}}>
                  Оформление заказа
                </Text>
              ),
              headerRight: () => (
                <View style={{marginLeft: 15}}>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      fontSize: 15,
                    }}>
                    <Text style={{color: 'white'}}>$ 93.5 </Text>
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
              headerBackTitle: 'Назад',
              headerBackTitleStyle: {
                fontSize: 14,
                color: 'white',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
