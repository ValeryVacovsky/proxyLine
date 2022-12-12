import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import SuperEllipseMaskView from 'react-native-super-ellipse-mask'

import DatabaseButtomOn from '../image/Svg/DatabaseButtomOn'
import DatabaseButtonOff from '../image/Svg/DatabaseButtonOff'
import OrdersButtonOff from '../image/Svg/OrdersButtonOff'
import OrdersButtonOn from '../image/Svg/OrdersButtonOn'
import SettingsButtonOff from '../image/Svg/SettingsButtonOff'
import SettingsButtonOn from '../image/Svg/SettingsButtonOn'
import WalletButtonOff from '../image/Svg/WalletButtonOff'
import WalletButtonOn from '../image/Svg/WalletButtonOn'

const styles = StyleSheet.create({
  active: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 4,
    borderBottomColor: '#FAC637',
    shadowColor: '#FAC637',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
})

function UserNavigation({ status, navigation }) {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <SuperEllipseMaskView
      style={{
        alignItems: 'center',
        width: '95%',
        height: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.07)',
        borderRadius: 14,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15,
      }}
      radius={12}>
      <Pressable
        style={status === 'Main' && styles.active}
        onPress={() => navigation.navigate('Main')}
        hitSlop={25}
        activeOpacity={0.8}>
        {status === 'Main' ? <DatabaseButtomOn /> : <DatabaseButtonOff />}
      </Pressable>
      <Pressable
        style={status === 'Proxy' && styles.active}
        onPress={() => navigation.navigate('Proxy')}
        hitSlop={25}
        activeOpacity={0.8}>
        {status === 'Proxy' ? <WalletButtonOn /> : <WalletButtonOff />}
      </Pressable>
      <Pressable
        style={status === 'Orders' && styles.active}
        onPress={() => navigation.navigate('Orders')}
        hitSlop={25}
        activeOpacity={0.8}>
        {status === 'Orders' ? <OrdersButtonOn /> : <OrdersButtonOff />}
      </Pressable>
      <Pressable
        style={status === 'Settings' && styles.active}
        onPress={() => navigation.navigate('Settings')}
        hitSlop={25}
        activeOpacity={0.8}>
        {status === 'Settings' ? <SettingsButtonOn /> : <SettingsButtonOff />}
      </Pressable>
    </SuperEllipseMaskView>
  )
}

export default UserNavigation
