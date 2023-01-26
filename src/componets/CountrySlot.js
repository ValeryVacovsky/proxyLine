import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import LightRadioUncheked from '../image/Svg/LightRadioUncheked'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'

import FlagUsaSmall from '../image/Svg/FlagUsaSmall'

import RadioUncheked from '../image/Svg/RadioUncheked'

function CountrySlot({
  country,
  selectedCountryShort,
  setSelectedCountryShort,
  setSelectedCountry,
  setSelectedCountryOff,
  setSelectedCountryShortOff,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerOpacity} activeOpacity={0.8}>
        <Text style={styles.mockText} />
        <View style={styles.countryInfo}>
          <FlagUsaSmall width={16} height={13} style={styles.flagIcon} />
          <Text style={styles.mainText}>{country.name_local}</Text>
        </View>
        <Pressable
          hitSlop={25}
          activeOpacity={0.8}
          onPress={() => {
            setSelectedCountryShort(country.code)
            setSelectedCountry(country.name_local)
            setSelectedCountryOff(country.name_local)
            setSelectedCountryShortOff(country.code)
          }}>
          {selectedCountryShort === country.code ? <LightRadioUncheked /> : <RadioUncheked width={21} height={20} />}
        </Pressable>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { borderBottomWidth: 1, borderBottomColor: 'rgba(54, 57, 62, 0.4)' },
  containerOpacity: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 18,
    paddingBottom: 18,
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
