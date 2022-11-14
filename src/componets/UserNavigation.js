import React from 'react';

import {
  View,
  TouchableOpacity,
} from 'react-native';

import DatabaseButtom from '../image/Svg/DatabaseButtom';
import OrdersButton from '../image/Svg/OrdersButton';
import SettingsButton from '../image/Svg/SettingsButton';
import WalletButton from '../image/Svg/WalletButton';

function UserNavigation() {
  return (
    <View style={{
      alignItems: 'center',
      width: '95%',
      height: 60,
      backgroundColor: 'rgba(255, 255, 255, 0.07)',
      borderRadius: 14,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    }}
    >
      <TouchableOpacity style={{
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 4,
        borderBottomColor: '#FAC637',
      }}
      >
        <DatabaseButtom color="#FAC637" />
      </TouchableOpacity>
      <TouchableOpacity style={{
        paddingBottom: 20,
        paddingTop: 20,
      }}
      >
        <WalletButton color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={{
        paddingBottom: 20,
        paddingTop: 20,
      }}
      >
        <OrdersButton color="white" />
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
