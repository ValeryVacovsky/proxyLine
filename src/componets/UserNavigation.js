import React from 'react'
import { StyleSheet, Pressable, View } from 'react-native'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'

import DatabaseButtomOn from '../image/Svg/DatabaseButtomOn'
import DatabaseButtonOff from '../image/Svg/DatabaseButtonOff'
import OrdersButtonOff from '../image/Svg/OrdersButtonOff'
import OrdersButtonOn from '../image/Svg/OrdersButtonOn'
import SettingsButtonOff from '../image/Svg/SettingsButtonOff'
import SettingsButtonOn from '../image/Svg/SettingsButtonOn'
import WalletButtonOff from '../image/Svg/WalletButtonOff'
import WalletButtonOn from '../image/Svg/WalletButtonOn'

function UserNavigation({ status, navigation }) {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <SuperEllipseMaskView style={styles.container} radius={12}>
      <View>
        <Pressable
          style={status === 'Main' && styles.active}
          onPress={() => navigation.navigate('Main')}
          hitSlop={25}
          activeOpacity={0.8}>
          {status === 'Main' ? <DatabaseButtomOn /> : <DatabaseButtonOff />}
        </Pressable>
        {status === 'Main' && <View style={styles.orderStatus} />}
      </View>
      <View>
        <Pressable
          style={status === 'Proxy' && styles.active}
          onPress={() => navigation.navigate('Proxy')}
          hitSlop={25}
          activeOpacity={0.8}>
          {status === 'Proxy' ? <WalletButtonOn /> : <WalletButtonOff />}
        </Pressable>
        {status === 'Proxy' && <View style={styles.orderStatus} />}
      </View>
      <View>
        <Pressable
          style={status === 'Orders' && styles.active}
          onPress={() => navigation.navigate('Orders')}
          hitSlop={25}
          activeOpacity={0.8}>
          {status === 'Orders' ? <OrdersButtonOn /> : <OrdersButtonOff />}
        </Pressable>
        {status === 'Orders' && <View style={styles.orderStatus} />}
      </View>
      <View>
        <Pressable
          style={status === 'Settings' && styles.active}
          onPress={() => navigation.navigate('Settings')}
          hitSlop={25}
          activeOpacity={0.8}>
          {status === 'Settings' ? <SettingsButtonOn /> : <SettingsButtonOff />}
        </Pressable>
        {status === 'Settings' && <View style={styles.orderStatus} />}
      </View>
    </SuperEllipseMaskView>
  )
}

const styles = StyleSheet.create({
  active: {
    paddingTop: 20,
    paddingBottom: 20,
    shadowColor: '#FAC637',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  container: {
    alignItems: 'center',
    width: '95%',
    height: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.07)',
    borderRadius: 14,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  orderStatus: {
    width: 20,
    height: 5,
    backgroundColor: '#FAC637',
    borderRadius: 20,
    bottom: 1,
  },
})

export default UserNavigation
