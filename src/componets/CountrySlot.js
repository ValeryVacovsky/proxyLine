import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import FlagUsaSmall from '../image/Svg/FlagUsaSmall'

import RadioUncheked from '../image/Svg/RadioUncheked'

function CountrySlot() {
  // setTimeout(() => navigation.navigate('Auth'), 1000)
  return (
    <View style={{ borderBottomWidth: 1, borderBottomColor: '#36393e' }}>
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingTop: 18,
          paddingBottom: 18,
          borderBottomColor: 'white',
          marginHorizontal: 20,
        }}
        activeOpacity={0.8}>
        <Text
          style={{
            color: '#FAC637',
            fontSize: 18,
            fontWeight: '900',
          }}
        />
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <FlagUsaSmall width={16} height={13} style={{ top: 2, marginLeft: 5, marginRight: 5 }} />
          <Text style={{ color: 'white', fontWeight: '600', width: '75%' }}>United States of America</Text>
        </View>
        <RadioUncheked width={21} height={20} />
      </TouchableOpacity>
    </View>
  )
}

export default CountrySlot
