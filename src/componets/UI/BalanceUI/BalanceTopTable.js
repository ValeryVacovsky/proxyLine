import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

function BalanceTopTable({ balance }) {
  return (
    <View style={{
      alignItems: 'center',
    }}
    >

      <View style={{
        display: 'flex',
        alignItems: 'center',
        width: '90%',
        zIndex: 0,
        marginTop: 11,
      }}
      >
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          zIndex: 0,
          border: 2,
          borderBottomColor: 'white',
          backgroundColor: 'rgba(51, 51, 51, 0.3)',
          marginBottom: 1,
          alignItems: 'center',
        }}
        />
        <View style={{
          backgroundColor: 'rgba(51, 51, 51, 0.3)',
          marginBottom: 1,
          width: '100%',
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          alignItems: 'center',
        }}
        >
          <View style={{
            display: 'flex',
            paddingLeft: 14,
            paddingRight: 14,
            paddingTop: 20,
            paddingBottom: 20,
            alignItems: 'center',
            flexDirection: 'row',
          }}
          >
            <Text style={{
              color: '#CBCBCB', fontWeight: '600', fontSize: 20,
            }}
            >
              $
            </Text>
            <Text style={{
              color: 'white', fontWeight: '600', fontSize: 40, marginLeft: 10,
            }}
            >
              {balance}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            width: '100%',
            alignItems: 'center',
            backgroundColor: 'rgba(51, 51, 51, 0.3)',
            paddingLeft: 20,
            paddingRight: 20,
            borderBottomLeftRadius: 14,
            borderBottomRightRadius: 14,
          }}
          activeOpacity={0.8}
        >
          <Text style={{
            fontWeight: '600',
            color: '#FAC637',
            paddingTop: 14,
            paddingBottom: 14,
            fontSize: 13,
          }}
          >
            Пополнить
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default BalanceTopTable;
