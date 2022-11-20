import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

function ProxyTariff({ navigation, proxy }) {
  return (
    <View style={{
      alignItems: 'center',
      width: '100%',
    }}
    >

      <View style={{
        alignItems: 'center',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 11,
      }}
      >
        <View style={{
          backgroundColor: '#FAC637',
          top: '7%',
          borderRadius: 8,
          position: 'relative',
          paddingTop: 4,
          paddingBottom: 4,
          paddingLeft: 14,
          paddingRight: 14,
          shadowColor: '#FAC637',
          shadowOffset: { width: 3, height: 20 },
          shadowOpacity: 0.15,
          shadowRadius: 10,
          zIndex: 1,
        }}
        >
          <Text style={{
            alignItems: 'center', fontWeight: '600', fontSize: 12, color: '#0F1218',
          }}
          >
            {proxy.handDesription}
          </Text>
        </View>
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
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 21,
          paddingBottom: 14,
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
        }}
        >
          <View>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>
              IP
              {proxy.proxyType}
            </Text>
            <Text style={{
              color: '#CBCBCB', fontSize: 12, fontWeight: '400', lineHeight: 15,
            }}
            >
              {proxy.discription}
            </Text>
          </View>
          <View>
            {proxy.icon}
          </View>
        </View>
        <View style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          zIndex: 0,
          backgroundColor: 'rgba(51, 51, 51, 0.3)',
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 14,
          paddingBottom: 14,
          marginBottom: 1,
        }}
        >
          <View>
            <Text style={{ color: 'white', fontWeight: '700' }}>{proxy.days}</Text>
          </View>
          <View>
            <Text style={{ color: 'white', fontWeight: '700' }} onPress={() => { navigation.navigate('Balance'); }}>
              $
              {' '}
              {proxy.price}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Order', { proxy })}
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
            fontWeight: '700',
            color: '#FAC637',
            paddingTop: 14,
            paddingBottom: 14,
          }}
          >
            Подробнее
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ProxyTariff;
