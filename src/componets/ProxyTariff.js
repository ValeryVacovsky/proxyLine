import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import PeopleIconProxy from '../image/Svg/PeopleIconProxy'

const ProxyTariff = ({ navigation }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        width: '100%',
      }}>
      <View
        style={{
          alignItems: 'center',
          width: '90%',
          paddingLeft: 20,
          paddingRight: 20,
          zIndex: 0,
          marginTop: 11,
        }}>
        <View style={{ zIndex: 1, borderBottomLeftRadius: 80 }}>
          <Text
            style={{
              color: 'black',
              backgroundColor: '#FAC637',
              paddingLeft: 14,
              paddingTop: 3,
              paddingBottom: 4,
              paddingRight: 14,
              borderRadius: 8,
              top: 15,
              fontSize: 12,
              fontWeight: '600',
            }}>
            Используют до 3-х человек
          </Text>
        </View>
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
          }}>
          <View>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '700' }}>IPv4 Shared</Text>
            <Text style={{ color: '#CBCBCB', fontSize: 12, fontWeight: '400' }}>Подходят для любых целей и сайтов</Text>
          </View>
          <View>
            <PeopleIconProxy />
          </View>
        </View>
        <View
          style={{
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
          }}>
          <View>
            <Text style={{ color: 'white', fontWeight: '700' }}>5 дней</Text>
          </View>
          <View>
            <Text style={{ color: 'white', fontWeight: '700' }}>$ 0.60</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Order')}
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
              fontWeight: '700',
              color: '#FAC637',
              paddingTop: 14,
              paddingBottom: 14,
            }}>
            Подробнее
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProxyTariff
