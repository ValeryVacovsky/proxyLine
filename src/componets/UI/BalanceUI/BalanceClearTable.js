import React from 'react'
import { View, Text } from 'react-native'

function BalanceClearTable() {
  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '90%',
          zIndex: 0,
          marginTop: 11,
        }}>
        <View
          style={{
            backgroundColor: 'rgba(250, 198, 55, 0.2)',
            marginBottom: 1,
            width: '100%',
            borderRadius: 14,
            alignItems: 'center',
          }}>
          <View
            style={{
              display: 'flex',
              paddingLeft: 14,
              paddingRight: 14,
              paddingTop: 20,
              paddingBottom: 20,
              flexDirection: 'column',
            }}>
            <Text
              style={{
                color: '#FAC637',
                fontWeight: '700',
                fontSize: 18,
                textAlign: 'left',
                marginBottom: 6,
              }}>
              Нет ни одной операции
            </Text>
            <Text
              style={{
                color: 'white',
                fontWeight: '400',
                fontSize: 12,
              }}>
              На данный момент вы не совершали никаких операций или операция в обработке
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default BalanceClearTable
