import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import DatabaseButtomOn from '../image/Svg/DatabaseButtomOn';
import DatabaseButtonOff from '../image/Svg/DatabaseButtonOff';
import OrdersButtonOff from '../image/Svg/OrdersButtonOff';
import OrdersButtonOn from '../image/Svg/OrdersButtonOn';
import SettingsButton from '../image/Svg/SettingsButton';
import WalletButtonOff from '../image/Svg/WalletButtonOff';
import WalletButtonOn from '../image/Svg/WalletButtonOn';

const styles = StyleSheet.create({
  active: {
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 4,
    borderBottomColor: '#FAC637',
    shadowColor: '#FAC637',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});

function UserNavigation({ status, navigation }) {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <View style={{
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
    >
      <TouchableOpacity style={status === 'Main' && styles.active} onPress={() => navigation.navigate('Main')} activeOpacity={0.8}>
        {status === 'Main' ? <DatabaseButtomOn /> : <DatabaseButtonOff />}
      </TouchableOpacity>
      <TouchableOpacity style={status === 'Proxy' && styles.active} onPress={() => navigation.navigate('Proxy')} activeOpacity={0.8}>
        {status === 'Proxy' ? <WalletButtonOn /> : <WalletButtonOff />}
      </TouchableOpacity>
      <TouchableOpacity style={status === 'Orders' && styles.active} onPress={() => navigation.navigate('Orders')} activeOpacity={0.8}>
        {status === 'Orders' ? <OrdersButtonOn /> : <OrdersButtonOff />}
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingBottom: 20,
          paddingTop: 20,
        }}
        activeOpacity={0.8}
      >
        <SettingsButton color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default UserNavigation;
