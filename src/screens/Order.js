import React, { useState, useEffect } from 'react'
import { ScrollView, View, StyleSheet, Text, Pressable } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LayoutMain from '../componets/LayoutMain'
import OrderItem from '../componets/OrderItem'
import CloudProxyIcon from '../image/Svg/CloudProxyIcon'
import PeopleIconProxy from '../image/Svg/PeopleIconProxy'
import ServerProxyIcon from '../image/Svg/ServerProxyIcon'
import getBalance from '../api/getBalance'
import HeaderProxy from '../image/Svg/HeaderProxy'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  navContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  balanceIcon: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 15,
    alignItems: 'center',
  },
})

function Order({ navigation, route }) {
  const [scrolling, setScrolling] = useState(true)
  const [currentProxyId, setCurrentProxyId] = useState(390)
  const [balance, setBalance] = useState({ balance: null })
  useEffect(() => {
    const fetchData = async () => {
      const token = await AsyncStorage.getItem('@token')
      const id = await AsyncStorage.getItem('@id')
      const data = await getBalance(`${id}_${token}`)
      await setBalance(data.data)
    }
    fetchData()
  }, [])
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <View style={{ marginLeft: 15 }}>
          <Pressable
            style={styles.balanceIcon}
            activeOpacity={0.8}
            hitSlop={50}
            onPress={() => navigation.navigate('Balance')}>
            <Text style={{ color: 'white', fontWeight: '700', fontSize: 15 }}>$ {balance.balance}</Text>
            <HeaderProxy style={{ bottom: 1, marginLeft: 3 }} />
          </Pressable>
        </View>
      ),
    })
  }, [navigation, balance])
  const ProxyList = [
    {
      id: 1,
      proxyType: 'v4 Shared',
      discription: 'Подходит для любых целей и сайтов',
      days: '5 дней',
      price: 0.6,
      handDesription: 'Используется до 3-х человек',
      icon: <PeopleIconProxy />,
    },
    {
      id: 2,
      proxyType: 'v4 Индвидуальные',
      discription: 'Подходит для любых целей и сайтов',
      days: '5 дней',
      price: 0.88,
      handDesription: 'Выдается в одни руки',
      icon: <CloudProxyIcon />,
    },
    {
      id: 3,
      proxyType: 'v6 / 32',
      discription: 'Подходит для любых целей и сайтов',
      days: '5 дней',
      price: 1.22,
      handDesription: 'Выдается в одни руки',
      icon: <ServerProxyIcon />,
    },
  ]
  const startPos = currentProxyId * (route.params.proxy.id - 1)
  return (
    <LayoutMain>
      <ScrollView
        horizontal
        contentContainerStyle={{ width: `${ProxyList.length * 100}%` }}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={100}
        // decelerationRate="fast"
        pagingEnabled
        contentOffset={{ x: startPos }}
        disableIntervalMomentum
        onLayout={event => {
          const { layout } = event.nativeEvent
          setCurrentProxyId(layout.width)
        }}
        scrollEnabled={scrolling}>
        {ProxyList.map(order => (
          // eslint-disable-next-line react/jsx-key
          <OrderItem navigation={navigation} order={order} setScrolling={setScrolling} />
        ))}
      </ScrollView>
    </LayoutMain>
  )
}

export default Order
