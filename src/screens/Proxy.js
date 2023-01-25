import React, { useEffect, useState } from 'react'
import { View, ScrollView, StyleSheet, SafeAreaView, Text, Pressable, Dimensions } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LayoutMain from '../componets/LayoutMain'
import ProxyTariff from '../componets/ProxyTariff'
import UserNavigation from '../componets/UserNavigation'
import CloudProxyIcon from '../image/Svg/CloudProxyIcon'
import HeaderProxy from '../image/Svg/HeaderProxy'
import PeopleIconProxy from '../image/Svg/PeopleIconProxy'
import ServerProxyIcon from '../image/Svg/ServerProxyIcon'
import getBalance from '../api/getBalance'
import postOrderAmount from '../api/postOrderAmount'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 0,
  },
  text: {
    fontSize: 42,
  },
  navContainer: {
    alignItems: 'center',
    marginBottom: 25,
  },
  s_navContainer: {
    alignItems: 'center',
    width: '95%',
    left: 10,
  },
  balanceIcon: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: 15,
    alignItems: 'center',
  },
})

function Proxy({ navigation }) {
  const [iPtypes, setIpTypes] = useState([10, 10, 10])

  useEffect(() => {
    async function name() {
      const ipTypes = []
      await postOrderAmount({
        quantity: 1,
        ip_type: 2,
        ip_version: 4,
        country: 'ru',
        period: 5,
        coupon: '',
      }).then(data => ipTypes.push(data?.data.amount))
      await postOrderAmount({
        quantity: 1,
        ip_type: 1,
        ip_version: 4,
        country: 'ru',
        period: 5,
        coupon: '',
      }).then(data => ipTypes.push(data?.data.amount))
      await postOrderAmount({
        quantity: 1,
        ip_type: 1,
        ip_version: 6,
        country: 'ru',
        period: 5,
        coupon: '',
      }).then(data => ipTypes.push(data?.data.amount))
      setIpTypes(ipTypes)
    }
    name()
  }, [])

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
            <Text style={{ color: 'white', fontWeight: '700', fontSize: 15 }}>$ {balance.balance / 100}</Text>
            <HeaderProxy style={{ bottom: 1, marginLeft: 3 }} />
          </Pressable>
        </View>
      ),
    })
  }, [navigation, balance])
  const heightOffScreen = Dimensions.get('window').height
  return (
    <LayoutMain>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          {ProxyList.map((proxy, index) => (
            <ProxyTariff
              key={proxy.id}
              proxy={proxy}
              ProxyList={ProxyList}
              navigation={navigation}
              iPtype={iPtypes[index]}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
      <View style={heightOffScreen > 700 ? styles.navContainer : styles.s_navContainer}>
        <UserNavigation status="Proxy" navigation={navigation} />
      </View>
    </LayoutMain>
  )
}

export default Proxy
