import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'

import FlagUsaSmall from '../image/Svg/FlagUsaSmall'

import RadioUncheked from '../image/Svg/RadioUncheked'

function CountrySlot() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerOpacity} activeOpacity={0.8}>
        <Text style={styles.mockText} />
        <View style={styles.countryInfo}>
          <FlagUsaSmall width={16} height={13} style={styles.flagIcon} />
          <Text style={styles.mainText}>United States of America</Text>
        </View>
        <RadioUncheked width={21} height={20} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { borderBottomWidth: 1, borderBottomColor: '#36393e' },
  containerOpacity: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 18,
    paddingBottom: 18,
    borderBottomColor: 'white',
    marginHorizontal: 20,
  },
  mockText: {
    color: '#FAC637',
    fontSize: 18,
    fontWeight: '900',
  },
  countryInfo: { display: 'flex', flexDirection: 'row' },
  flagIcon: { top: 2, marginLeft: 5, marginRight: 5 },
  mainText: { color: 'white', fontWeight: '600', width: '75%' },
})

export default CountrySlot
