import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import LightRadioUncheked from '../../../image/Svg/LightRadioUncheked'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { useSelector } from 'react-redux'

import RadioUncheked from '../../../image/Svg/RadioUncheked'
import { flagByShortName } from '../../../common/flagByShortName'

function CountrySlot({
  country,
  selectedCountryShort,
  setSelectedCountryShort,
  setSelectedCountryShortOff,
  firstRender,
  item,
}) {
  const languageGet = useSelector(res => res.textReducer.languages_get.language)
  const countryDiscription = useSelector(res => res.countryDiscriptionReducer.country)
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerOpacity} activeOpacity={0.8}>
        <Text style={styles.mockText} />
        <View style={styles.countryInfo}>
          <View style={styles.bigWordContainer}>
            <Text style={styles.bigWordText}>{firstRender && item}</Text>
          </View>
          <View style={styles.flagIcon}>{flagByShortName[country.code]}</View>
          <Text style={styles.mainText}>{countryDiscription[languageGet][country.code]}</Text>
        </View>
        <Pressable
          hitSlop={25}
          activeOpacity={0.8}
          onPress={() => {
            setSelectedCountryShort(country.code)
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
  countryInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  bigWordContainer: {
    width: 20,
    height: 15,
    alignItems: 'center',
    marginRight: 15,
  },
  bigWordText: {
    fontWeight: '900',
    fontSize: 18,
    lineHeight: 18,
    color: '#FAC637',
    top: 1,
  },
  flagIcon: {
    top: 0,
    marginLeft: 5,
    marginRight: 5,
    width: 16,
    height: 13,
  },
  mainText: {
    color: 'white',
    fontWeight: '600',
    width: '75%',
  },
})

export default CountrySlot
