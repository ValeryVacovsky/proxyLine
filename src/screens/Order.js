import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { ScrollView, View, StyleSheet, Text, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import LayoutMain from '../components/LayoutMain'
import OrderItem from '../components/OrderItem'
import CloudProxyIcon from '../image/Svg/CloudProxyIcon'
import PeopleIconProxy from '../image/Svg/PeopleIconProxy'
import ServerProxyIcon from '../image/Svg/ServerProxyIcon'
import HeaderProxy from '../image/Svg/HeaderProxy'
import { TouchableOpacity } from 'react-native-gesture-handler'
import HeaderTintBack from '../image/Svg/HeaderTintBack'

function Order({ navigation, route }) {
  const proxyText = useSelector(res => res.textReducer)
  const [scrolling, setScrolling] = useState(true)
  const [currentProxyId, setCurrentProxyId] = useState(390)
  const balance = useSelector(data => data.balanceReducer)
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.headerRightContainer}>
          <Pressable
            style={styles.balanceIcon}
            activeOpacity={0.8}
            hitSlop={50}
            onPress={() => navigation.navigate('Balance')}>
            <Text style={styles.headerBalanceText}>$ {balance.balance / 100}</Text>
            <HeaderProxy style={styles.headerRightIcon} />
          </Pressable>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={navigation.goBack} style={styles.headerLeftTintContainer}>
          <HeaderTintBack style={styles.headerLeftIcon} />
          <Text style={styles.headerLeftTintText}> {proxyText.proxy.payload?.buttons?.b1}</Text>
        </TouchableOpacity>
      ),
    })
  }, [navigation, balance])
  const ProxyList = [
    {
      id: 1,
      proxyType: proxyText.proxy.payload?.texts?.t7,
      discription: proxyText.proxy.payload?.texts?.t0,
      days: '5',
      price: 0.6,
      handDesription: proxyText.proxy.payload?.texts?.t3,
      icon: <PeopleIconProxy />,
      ip_type: 2,
      ip_version: 4,
    },
    {
      id: 2,
      proxyType: proxyText.proxy.payload?.texts?.t8,
      discription: proxyText.proxy.payload?.texts?.t1,
      days: '5',
      price: 0.88,
      handDesription: proxyText.proxy.payload?.texts?.t4,
      icon: <CloudProxyIcon />,
      ip_type: 1,
      ip_version: 4,
    },
    {
      id: 3,
      proxyType: proxyText.proxy.payload?.texts?.t9,
      discription: proxyText.proxy.payload?.texts?.t2,
      days: '5',
      price: 1.22,
      handDesription: proxyText.proxy.payload?.texts?.t5,
      icon: <ServerProxyIcon />,
      ip_type: 1,
      ip_version: 6,
    },
  ]
  const startPos = currentProxyId * (route?.params?.proxy?.id - 1)
  const iPtypes = route?.params?.iPtypes
  return (
    <LayoutMain>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ height: '100%' }}>
        <ScrollView
          horizontal
          contentContainerStyle={{ width: `${ProxyList.length * 100}%` }}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={100}
          pagingEnabled
          contentOffset={{ x: startPos }}
          disableIntervalMomentum
          onLayout={event => {
            const { layout } = event.nativeEvent
            setCurrentProxyId(layout.width)
          }}
          scrollEnabled={scrolling}>
          {ProxyList.map((order, index) => (
            <OrderItem
              key={order.key}
              navigation={navigation}
              order={order}
              setScrolling={setScrolling}
              price={iPtypes[index] / 100 && 0.1}
              proxyText={proxyText.order.payload}
            />
          ))}
        </ScrollView>
      </KeyboardAvoidingView>
    </LayoutMain>
  )
}

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
  headerRightContainer: {
    marginLeft: 15,
  },
  headerBalanceText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
  headerRightIcon: {
    marginLeft: 3,
  },
  headerLeftIcon: {
    bottom: 1,
  },
})

export default Order
