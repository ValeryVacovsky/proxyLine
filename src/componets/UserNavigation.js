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
      <TouchableOpacity style={status === 'Main' && styles.active} onPress={() => navigation.navigate('Main')}>
        {status === 'Main' ? <DatabaseButtomOn /> : <DatabaseButtonOff />}
      </TouchableOpacity>
      <TouchableOpacity style={status === 'Proxy' && styles.active} onPress={() => navigation.navigate('Proxy')}>
        {status === 'Proxy' ? <WalletButtonOn /> : <WalletButtonOff />}
      </TouchableOpacity>
      <TouchableOpacity style={status === 'Orders' && styles.active} onPress={() => navigation.navigate('Orders')}>
        {status === 'Orders' ? <OrdersButtonOn /> : <OrdersButtonOff />}
      </TouchableOpacity>
      <TouchableOpacity style={{
        paddingBottom: 20,
        paddingTop: 20,
      }}
      >
        <SettingsButton color="white" />
      </TouchableOpacity>
    </View>
  );
}

export default UserNavigation;
