import React, { useEffect, useState } from 'react'
import { View, ScrollView, StyleSheet, SafeAreaView, Text, Pressable, Dimensions, TouchableOpacity } from 'react-native'
import HeaderTintBack from '../image/Svg/HeaderTintBack'
import { useSelector } from 'react-redux'

import LayoutMain from '../componets/LayoutMain'
import ProxyTariff from '../componets/ProxyTariff'
import UserNavigation from '../componets/UserNavigation'
import CloudProxyIcon from '../image/Svg/CloudProxyIcon'
import HeaderProxy from '../image/Svg/HeaderProxy'
import PeopleIconProxy from '../image/Svg/PeopleIconProxy'
import ServerProxyIcon from '../image/Svg/ServerProxyIcon'

function Proxy({ navigation }) {
  const iPtypes = useSelector(res => res.orderPriceReducer.orderPrice)
  const [text, setText] = useState({})
  const proxyText = useSelector(res => res.textReducer)
  useEffect(() => {
    setText(proxyText)
  }, [proxyText, text])

  const balance = useSelector(data => data.balanceReducer)
  const ProxyList = [
    {
      id: 1,
      proxyType: proxyText.proxy.payload?.texts?.t7,
      discription: proxyText.proxy.payload?.texts?.t0,
      days: '5',
      price: 0.6,
      handDesription: proxyText.proxy.payload?.texts?.t3,
      icon: <PeopleIconProxy />,
    },
    {
      id: 2,
      proxyType: proxyText.proxy.payload?.texts?.t8,
      discription: proxyText.proxy.payload?.texts?.t1,
      days: '5',
      price: 0.88,
      handDesription: proxyText.proxy.payload?.texts?.t4,
      icon: <CloudProxyIcon />,
    },
    {
      id: 3,
      proxyType: proxyText.proxy.payload?.texts?.t9,
      discription: proxyText.proxy.payload?.texts?.t2,
      days: '5',
      price: 1.22,
      handDesription: proxyText.proxy.payload?.texts?.t5,
      icon: <ServerProxyIcon />,
    },
  ]
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
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={{ bottom: 1 }} />
          <Text style={styles.headerLeftTintText}> Назад</Text>
        </TouchableOpacity>
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
              proxyText={proxyText}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginHorizontal: 0,
    marginBottom: 5,
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
})

export default Proxy
