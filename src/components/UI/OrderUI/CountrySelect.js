import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import VectorRightSmall from '../../../image/Svg/VectorRightSmall'

const CountrySelect = ({
  proxyText,
  countryDescription,
  flagByShortName,
  languageGet,
  selectedCountryShort,
  handlePressCountry,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handlePressCountry} activeOpacity={0.8}>
      <View>
        <Text style={styles.countryNameText}>{proxyText?.texts?.t0}</Text>
      </View>
      <View style={styles.countrySelectContainer}>
        <Text style={styles.countrySelectText}>{countryDescription[languageGet][selectedCountryShort]}</Text>
        <View style={styles.countryFlag}>{flagByShortName[selectedCountryShort]}</View>
        <VectorRightSmall width={6} height={12} style={styles.vectorIcon} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    paddingTop: 13,
    paddingBottom: 13,
  },
  countryNameText: {
    color: '#CBCBCB',
    fontSize: 15,
    fontWeight: '600',
  },
  countrySelectContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  countrySelectText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 13,
  },
  countryFlag: {
    width: 16,
    height: 16,
    marginLeft: 5,
    marginRight: 5,
  },
})

export default CountrySelect
