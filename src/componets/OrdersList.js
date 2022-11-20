import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
// import SuperEllipseMaskView from 'react-native-super-ellipse-mask';

import FlagUsaSmall from '../image/Svg/FlagUsaSmall';

function OrdersList() {
  const [received, setReceived] = useState(true);
  return (
    <View style={{
      alignItems: 'center',
      width: '100%',
    }}
    >
      <View style={{
        alignItems: 'center',
        width: '100%',
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
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 21,
          paddingBottom: 14,
          borderTopLeftRadius: 14,
          borderTopRightRadius: 14,
          alignItems: 'center',
        }}
        >
          <View>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>IPv4 Shared</Text>
            <Text style={{
              color: '#CBCBCB', fontSize: 12, fontWeight: '600', lineHeight: 15,
            }}
            >
              От 19.03.2022 19:04
            </Text>
          </View>
          <View>
            <Text style={{
              color: '#CBCBCB', fontSize: 12, fontWeight: '600', lineHeight: 15, textAlign: 'right', marginBottom: 5,
            }}
            >
              ID 4829002398
            </Text>
            <Text style={{
              color: '#CBCBCB', fontSize: 12, fontWeight: '600', lineHeight: 15, textAlign: 'right',
            }}
            >
              Осталось 5 дней 6 часов
            </Text>
          </View>
        </View>
        <View style={{
          backgroundColor: 'rgba(51, 51, 51, 0.3)',
          marginBottom: 1,
          width: '100%',
          borderBottomLeftRadius: (!received && 14),
          borderBottomRightRadius: (!received && 14),
        }}
        >
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 14,
            paddingBottom: 14,
          }}
          >
            <Text style={{ color: '#CBCBCB', fontWeight: '600', fontSize: 13 }}>Страна</Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={{ color: 'white', fontWeight: '600', fontSize: 13 }}>United States of America</Text>
              <FlagUsaSmall
                width={16}
                height={13}
                style={{ top: 2, marginLeft: 5, marginRight: 5 }}
              />
            </View>
          </View>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 14,
            paddingBottom: 14,
          }}
          >
            <Text style={{ color: '#CBCBCB', fontWeight: '600', fontSize: 13 }}>дней</Text>
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 13 }}>90</Text>
          </View>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 14,
            paddingBottom: 14,
          }}
          >
            <Text style={{ color: '#CBCBCB', fontWeight: '600', fontSize: 13 }}>Количество IP</Text>
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 13 }}>5</Text>
          </View>
          <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 14,
            paddingBottom: 14,
          }}
          >
            <Text style={{ color: '#CBCBCB', fontWeight: '600', fontSize: 13 }}>Сумма</Text>
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 13 }}>$ 10.00</Text>
          </View>
          {!received && (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 14,
              paddingBottom: 14,
            }}
          >
            <Text style={{ color: '#CBCBCB', fontWeight: '600', fontSize: 13 }} onPress={() => setReceived(true)}>Получено</Text>
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 13 }}>20.03.2022</Text>
          </View>
          )}
        </View>
        {received && (
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
          onPress={() => { setReceived(false); }}
          activeOpacity={0.8}
        >
          <Text style={{
            fontWeight: '700',
            color: '#FAC637',
            paddingTop: 14,
            paddingBottom: 14,
          }}
          >
            Получить
          </Text>
        </TouchableOpacity>
        )}

      </View>
    </View>
  );
}

export default OrdersList;
