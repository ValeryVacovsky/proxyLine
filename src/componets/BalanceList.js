import React from 'react'
import { View, Text } from 'react-native'
// import SuperEllipseMaskView from 'react-native-super-ellipse-mask';

import Robocassa from '../image/Svg/Robocassa'

function BalanceList() {
  return (
    <View
      style={{
        alignItems: 'center',
        width: '100%',
      }}>
      <View
        style={{
          alignItems: 'center',
          width: '100%',
          zIndex: 0,
          marginTop: 11,
        }}>
        <View
          style={{
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
          }}>
          <View>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>Robokassa</Text>
            <Text
              style={{
                color: '#CBCBCB',
                fontSize: 12,
                fontWeight: '600',
                lineHeight: 15,
              }}>
              От 19.03.2022 19:04
            </Text>
          </View>
          <View>
            <Robocassa />
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'rgba(51, 51, 51, 0.3)',
            marginBottom: 1,
            width: '100%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 14,
              paddingBottom: 14,
            }}>
            <Text style={{ color: '#CBCBCB', fontWeight: '600', fontSize: 13 }}>Сумма</Text>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <Text style={{ color: 'white', fontWeight: '600', fontSize: 13 }}>$ 10.00</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            backgroundColor: 'rgba(51, 51, 51, 0.3)',
            paddingLeft: 20,
            paddingRight: 20,
            borderBottomLeftRadius: 14,
            borderBottomRightRadius: 14,
          }}>
          <Text
            style={{
              fontWeight: '600',
              color: '#FAC637',
              paddingTop: 14,
              paddingBottom: 14,
            }}>
            Заказ 4829002398
          </Text>
        </View>
      </View>
    </View>
  )
}

export default BalanceList
