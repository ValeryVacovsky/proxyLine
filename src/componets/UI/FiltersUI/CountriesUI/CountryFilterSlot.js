import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import LightRadioUncheked from '../../../../image/Svg/LightRadioUncheked'
import LightRadioUnchekedRed from '../../../../image/Svg/LightRadioUnchekedRed'

import RadioUncheked from '../../../../image/Svg/RadioUncheked'
import { flagByShortName } from '../../../../common/flagByShortName'

function CountryFilterSlot({
  countreiItem,
  setFilters,
  excludeStatus,
  countriesState,
  setCountriesState,
  countriesStateExlude,
  setCountriesStateExlude,
}) {
  const handlePress = item => {
    setFilters(prevState =>
      prevState.countries.includes(item)
        ? {
            ...prevState,
            countries: prevState.countries.filter(active => active !== item),
          }
        : { ...prevState, countries: prevState.countries.concat(item) },
    )
    setCountriesState(prevState =>
      prevState.includes(item) ? prevState.filter(active => active !== item) : prevState.concat(item),
    )
  }
  const handlePressExclude = item => {
    setFilters(prevState =>
      prevState.countries_exclude.includes(item)
        ? {
            ...prevState,
            countries_exclude: prevState.countries_exclude.filter(active => active !== item),
          }
        : { ...prevState, countries_exclude: prevState.countries_exclude.concat(item) },
    )
    setCountriesStateExlude(prevState =>
      prevState.includes(item) ? prevState.filter(active => active !== item) : prevState.concat(item),
    )
  }
  return (
    <View style={styles.container}>
      {!excludeStatus ? (
        <TouchableOpacity
          style={styles.containerOpacity}
          activeOpacity={0.8}
          onPress={() => handlePress(countreiItem.code)}>
          <Text style={styles.mockText} />
          <View style={styles.countryInfo}>
            <View style={styles.flagIcon}>{flagByShortName[countreiItem.code]}</View>
            <Text style={styles.mainText}>{countreiItem.name_local}</Text>
          </View>
          {countriesState.includes(countreiItem.code) ? (
            <LightRadioUncheked />
          ) : (
            <RadioUncheked width={21} height={20} />
          )}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.containerOpacity}
          activeOpacity={0.8}
          onPress={() => handlePressExclude(countreiItem.code)}>
          <Text style={styles.mockText} />
          <View style={styles.countryInfo}>
            <View style={styles.flagIcon}>{flagByShortName[countreiItem.code]}</View>
            <Text style={styles.mainText}>{countreiItem.name_local}</Text>
          </View>
          {countriesStateExlude.includes(countreiItem.code) ? (
            <LightRadioUnchekedRed />
          ) : (
            <RadioUncheked width={21} height={20} />
          )}
        </TouchableOpacity>
      )}
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
  flagIcon: { top: 2, marginLeft: 5, marginRight: 5, width: 16, height: 13 },
  mainText: { color: 'white', fontWeight: '600', width: '75%' },
})

export default CountryFilterSlot
